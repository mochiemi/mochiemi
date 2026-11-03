<template>
  <div class="posts-list-view">
    <header class="posts-list-header">
      <h1 class="page-title">Blog</h1>
      <p class="page-subtitle">
        Explore as publicações por tag ou por palavras contidas no conteúdo.
      </p>
    </header>

    <BaseAlert variant="warning" title="Aviso de conteúdo">
      Este site pode conter conteúdos inadequados para menores de 16 anos e
      abordar assuntos sensíveis a alguns públicos. A leitura é de
      responsabilidade do visitante.
    </BaseAlert>

    <!-- Barra de busca -->
    <BaseSearchBar
      v-model="searchTerm"
      placeholder="Buscar por tag ou palavra no post..."
      @submit="applySearch"
    />

    <!-- Chips de tags (labels) disponíveis nos posts carregados -->
    <div v-if="availableTags.length" class="tags-bar" role="group" aria-label="Filtrar por tag">
      <span class="tags-bar__label">Tags:</span>
      <BaseBadge
        v-for="tag in availableTags"
        :key="tag"
        :variant="activeTag === tag ? 'primary' : 'neutral'"
        :clickable="true"
        size="sm"
        @click="toggleTag(tag)"
      >
        {{ tag }}
      </BaseBadge>
      <button
        v-if="activeTag || searchTerm"
        type="button"
        class="tags-bar__clear"
        @click="clearFilters"
      >
        Limpar filtros
      </button>
    </div>

    <!-- Contador de resultados -->
    <p v-if="!loading && !error && hasActiveFilter" class="results-count" aria-live="polite">
      {{ filteredPosts.length }}
      {{ filteredPosts.length === 1 ? 'post encontrado' : 'posts encontrados' }}
      <template v-if="activeTag"> na tag <strong>{{ activeTag }}</strong></template>
      <template v-if="searchTerm"> para "<strong>{{ searchTerm }}</strong>"</template>
    </p>

    <div v-if="loading" class="loading-state">Carregando posts...</div>

    <BaseEmptyState
      v-else-if="error"
      title="Erro ao carregar"
      :description="error"
      icon="oi-alert"
    />

    <BaseEmptyState
      v-else-if="posts.length === 0"
      title="Nenhum post encontrado"
      description="Ainda não há publicações por aqui."
    />

    <!-- Estado vazio específico de busca -->
    <BaseEmptyState
      v-else-if="filteredPosts.length === 0"
      title="Nada corresponde à sua busca"
      :description="`Não encontramos posts para '${searchTerm || activeTag}'. Tente outra palavra ou remova o filtro.`"
      icon="oi-search"
    >
      <template #action>
        <BaseButton variant="secondary" size="sm" @click="clearFilters">
          Limpar filtros
        </BaseButton>
      </template>
    </BaseEmptyState>

    <div v-else class="posts-grid">
      <BasePostCard
        v-for="post in filteredPosts"
        :key="post.id"
        :title="post.title"
        :excerpt="stripHtml(post.content || '')"
        :cover="extractFirstImage(post.content)"
        :tag="post.labels?.[0]"
        :date="post.published"
        :to="`/post/${post.id}`"
      />
    </div>

    <BasePagination
      v-if="totalPages > 1 && !hasActiveFilter"
      :current="currentPage"
      :total="totalPages"
      @change="goToPage"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  BaseAlert,
  BasePostCard,
  BasePagination,
  BaseEmptyState,
  BaseBadge,
  BaseButton,
  BaseSearchBar,
} from '@/components/ui'
import { fetchPosts, extractFirstImage, stripHtml } from '@/services/bloggerApi'

const router = useRouter()
const route = useRoute()

const posts = ref([])
const loading = ref(false)
const error = ref(null)
const nextToken = ref(null)

// Estado de busca / filtros
const searchTerm = ref('')
const activeTag = ref('')

const currentPage = computed(() => Number(route.query.page) || 1)
const totalPages = computed(() => currentPage.value + (nextToken.value ? 1 : 0))

const hasActiveFilter = computed(
  () => Boolean(searchTerm.value.trim() || activeTag.value)
)

/**
 * Normaliza texto para busca (minúsculas + remove acentos).
 * Assim "coração" casa com "coracao", "São" com "sao", etc.
 */
function normalize(text = '') {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

/** Extrai todas as tags (labels) únicas dos posts carregados. */
const availableTags = computed(() => {
  const set = new Set()
  for (const p of posts.value) {
    for (const label of p.labels || []) set.add(label)
  }
  return [...set].sort((a, b) => a.localeCompare(b, 'pt-BR'))
})

/** Filtra posts por termo (título + conteúdo + labels) e/ou tag ativa. */
const filteredPosts = computed(() => {
  const term = normalize(searchTerm.value.trim())
  const tag = normalize(activeTag.value.trim())

  return posts.value.filter((p) => {
    // Filtro por tag
    if (tag) {
      const labels = (p.labels || []).map(normalize)
      if (!labels.includes(tag)) return false
    }

    // Filtro por termo livre
    if (term) {
      const haystack = normalize(
        [p.title, stripHtml(p.content || ''), ...(p.labels || [])].join(' ')
      )
      if (!haystack.includes(term)) return false
    }

    return true
  })
})

async function loadPosts(token = '') {
  loading.value = true
  error.value = null
  try {
    const data = await fetchPosts(token)
    posts.value = data.items || []
    nextToken.value = data.nextPageToken || null
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

function applySearch() {
  // Busca é local (client-side) sobre os posts já carregados.
  // Se quiser buscar remotamente por label, ver fetchPosts(q) em bloggerApi.
  // Aqui apenas garantimos que o filtro reaja.
  // (Vue já reage ao searchTerm via computed.)
}

function toggleTag(tag) {
  activeTag.value = activeTag.value === tag ? '' : tag
}

function clearFilters() {
  searchTerm.value = ''
  activeTag.value = ''
}

function goToPage(page) {
  if (page === 1) {
    router.push({ query: {} })
    loadPosts('')
  }
}

onMounted(() => loadPosts())
watch(() => route.query, () => loadPosts(''))
</script>

<style scoped>
.posts-list-view {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2em 1em;
}

.posts-list-header {
  margin-bottom: 1.25em;
}
.page-title {
  font-family: 'Bellota', cursive;
  font-size: 2em;
  color: var(--title-secondary);
  margin: 0 0 0.25em;
}
.page-subtitle {
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.95em;
}

/* Barra de tags */
.tags-bar {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
  margin: 0.75em 0 1em;
  padding: 0.75em;
  background-color: var(--surface-secondary);
  border: var(--border-width) dashed var(--border);
  border-radius: var(--radius-md);
}
.tags-bar__label {
  font-weight: 700;
  font-size: 0.85em;
  color: var(--text-secondary);
  margin-right: 0.25em;
}
.tags-bar__clear {
  background: transparent;
  border: none;
  box-shadow: none;
  color: var(--strong-rose);
  font-weight: 600;
  font-size: 0.85em;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
  width: auto;
}
.tags-bar__clear:hover {
  color: var(--red);
  transform: none;
  box-shadow: none;
  text-decoration: underline;
}

/* Contador */
.results-count {
  margin: 0.25em 0 1em;
  color: var(--text-secondary);
  font-size: 0.9em;
}

/* Grid */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5em;
}

.loading-state {
  text-align: center;
  padding: 3em;
  color: var(--text-secondary);
}
</style>
