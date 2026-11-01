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
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-meta">
          <BaseAvatar :name="post.author?.displayName" size="sm" />
          <span>{{ post.author?.displayName }}</span>
          <time :datetime="post.published">{{ formatDate(post.published) }}</time>
        </div>
      </header>

      <div class="post-content" v-html="post.content"></div>

      <footer class="post-footer">
        <BaseButton variant="ghost" icon="hi-arrow-left" @click="$router.back()">
          Voltar
        </BaseButton>
      </footer>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { BaseButton, BaseAvatar, BaseEmptyState } from '@/components/ui'
import { fetchPostById } from '@/services/bloggerApi'

const route = useRoute()
const post = ref(null)
const loading = ref(false)
const error = ref(null)

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
.post-title {
  font-family: 'Bellota', cursive;
  font-size: 2.2em;
  color: var(--title-secondary);
  margin: 0 0 0.5em;
  line-height: 1.2;
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
.post-content {
  line-height: 1.7;
  color: var(--text-primary);
}
.post-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}
.post-content :deep(a) {
  color: var(--strong-rose);
}
.post-footer {
  margin-top: 2em;
  padding-top: 1.5em;
  border-top: 1px dashed var(--border);
}
.loading-state {
  text-align: center;
  padding: 3em;
  color: var(--text-secondary);
}
</style>
