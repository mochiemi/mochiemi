<template>
  <div class="post-detail-view">
    <div v-if="loading" class="loading-state">Carregando post...</div>

    <BaseEmptyState
      v-else-if="error"
      title="Post não encontrado"
      :description="error"
    />

    <article v-else-if="post" class="post-article">
      <header class="post-header">
        <h2 class="post-title">{{ post.title }}</h2>
        <div class="post-meta">
          <!-- A tag (persona) é o autor real do post, igual ao card da listagem -->
          <BaseAuthor v-if="authorTag" :tag="authorTag" />
          <span v-if="authorTag" class="post-meta__sep" aria-hidden="true">•</span>
          <time :datetime="post.published">{{ formatDate(post.published) }}</time>
        </div>
      </header>

      <div class="post-content" v-html="post.content"></div>

      <footer class="post-footer">
        <BaseButton
          class="post-back"
          variant="secondary"
          size="sm"
          icon="hi-arrow-left"
          @click="$router.back()"
        >
          Voltar
        </BaseButton>
      </footer>
    </article>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { BaseButton, BaseAuthor, BaseEmptyState } from '@/components/ui'
import { fetchPostById } from '@/services/bloggerApi'

const route = useRoute()
const post = ref(null)
const loading = ref(false)
const error = ref(null)

/** Tag que assina o post (labels[0]) — usada como autoria. */
const authorTag = computed(() => post.value?.labels?.[0] || '')

async function loadPost(id) {
  if (!id) return
  loading.value = true
  error.value = null
  try {
    post.value = await fetchPostById(id)
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
}

function formatDate(dateStr) {
  return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'long' }).format(new Date(dateStr))
}

onMounted(() => loadPost(route.params.id))
watch(() => route.params.id, (newId) => loadPost(newId))
</script>

<style scoped>
.post-detail-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 2em 1em;
}
/* Painel do post: mesma linguagem dos cards (12px, borda 2px tracejada) */
.post-article {
  margin: 0;
  padding: 1.5em;
  background-color: var(--surface-primary);
  border: var(--border-width) dashed var(--border);
  border-left: 4px solid var(--secondary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}
.post-title {
  /* zera o estilo global de h2 (fundo/bordas) para usar só a tipografia */
  margin: 0 0 0.5em;
  padding: 0;
  border: 0;
  background: none;
  text-align: left;
  font-family: 'Bellota', cursive;
  font-size: 2.2em;
  line-height: 1.2;
  color: var(--title-secondary);
}
.post-meta {
  display: flex;
  align-items: center;
  gap: 0.75em;
  color: var(--text-secondary);
  font-size: 0.9em;
  padding-bottom: 1.5em;
  border-bottom: 1px dashed var(--border);
  margin-bottom: 1.5em;
}
.post-meta__sep {
  color: var(--border-strong);
  opacity: 0.7;
}
.post-content {
  line-height: 1.7;
  color: var(--text-primary);
}
.post-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-sm);
}
.post-content :deep(a) {
  color: var(--strong-rose);
}
.post-footer {
  margin-top: 2em;
  padding-top: 1.5em;
  border-top: 1px dashed var(--border);
  display: flex;
  justify-content: flex-start;
}

/* Botão "Voltar": pílula suave, com a seta deslizando no hover */
.post-back {
  border-radius: var(--radius-pill);
  padding-inline: 1.1em;
  gap: 0.45em;
}
.post-back :deep(.base-button__icon) {
  transition: transform 0.25s ease;
}
.post-back:hover :deep(.base-button__icon) {
  transform: translateX(-3px);
}
.loading-state {
  text-align: center;
  padding: 3em;
  color: var(--text-secondary);
}
</style>
