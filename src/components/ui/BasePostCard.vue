<template>
  <article class="base-post-card">
    <router-link v-if="to" :to="to" class="base-post-card__cover-link">
      <img
        v-if="cover"
        :src="cover"
        :alt="title"
        class="base-post-card__cover"
        loading="lazy"
      />
      <div v-else class="base-post-card__cover base-post-card__cover--empty" aria-hidden="true">
        <span>{{ emoji || '📝' }}</span>
      </div>
    </router-link>

    <div class="base-post-card__body">
      <div v-if="category" class="base-post-card__meta">
        <BaseBadge variant="primary" size="sm">{{ category }}</BaseBadge>
        <span v-if="readTime" class="base-post-card__read">{{ readTime }} min de leitura</span>
      </div>

      <h3 class="base-post-card__title">
        <router-link v-if="to" :to="to">{{ title }}</router-link>
        <span v-else>{{ title }}</span>
      </h3>

      <p v-if="excerpt" class="base-post-card__excerpt">{{ excerpt }}</p>

      <footer class="base-post-card__footer">
        <div class="base-post-card__author">
          <BaseAvatar :name="author" :src="authorAvatar" size="sm" />
          <div>
            <div class="base-post-card__author-name">{{ author }}</div>
            <time v-if="date" :datetime="date" class="base-post-card__date">
              {{ formattedDate }}
            </time>
          </div>
        </div>

        <div class="base-post-card__stats" v-if="likes != null || comments != null">
          <span v-if="likes != null" title="Curtidas">
            <OhVueIcon name="fa-regular-heart" /> {{ likes }}
          </span>
          <span v-if="comments != null" title="Comentários">
            <OhVueIcon name="bi-chat-square-text" /> {{ comments }}
          </span>
        </div>
      </footer>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import BaseAvatar from './BaseAvatar.vue'
import BaseBadge from './BaseBadge.vue'

const props = defineProps({
  title: { type: String, required: true },
  excerpt: { type: String, default: '' },
  cover: { type: String, default: '' },
  emoji: { type: String, default: '' },
  category: { type: String, default: '' },
  author: { type: String, default: 'Anônimo' },
  authorAvatar: { type: String, default: '' },
  date: { type: String, default: '' },
  readTime: { type: [Number, String], default: '' },
  likes: { type: Number, default: null },
  comments: { type: Number, default: null },
  to: { type: [String, Object], default: '' },
})

const formattedDate = computed(() => {
  if (!props.date) return ''
  try {
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(
      new Date(props.date)
    )
  } catch {
    return props.date
  }
})
</script>

<style scoped>
.base-post-card {
  display: flex;
  flex-direction: column;
  background-color: var(--surface-primary);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px var(--shadow);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  height: 100%;
}
.base-post-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px var(--shadow-hover);
}

.base-post-card__cover-link { display: block; }
.base-post-card__cover {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  background-color: var(--surface-secondary);
  display: block;
}
.base-post-card__cover--empty {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  background: linear-gradient(135deg, var(--champagne), var(--light-rose));
}

.base-post-card__body {
  padding: 1em 1.1em 1.2em;
  display: flex;
  flex-direction: column;
  gap: 0.6em;
  flex: 1;
}

.base-post-card__meta {
  display: flex;
  align-items: center;
  gap: 0.6em;
  flex-wrap: wrap;
}
.base-post-card__read {
  font-size: 0.8em;
  color: var(--text-secondary);
}

.base-post-card__title {
  font-family: 'Bellota', cursive;
  font-size: 1.3em;
  margin: 0;
  line-height: 1.25;
  color: var(--title-secondary);
}
.base-post-card__title a {
  color: inherit;
  text-decoration: none;
}
.base-post-card__title a:hover { color: var(--strong-rose); text-decoration: none; }

.base-post-card__excerpt {
  font-size: 0.93em;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.base-post-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5em;
  margin-top: auto;
  padding-top: 0.75em;
  border-top: 1px dashed var(--border);
  flex-wrap: wrap;
}
.base-post-card__author {
  display: flex;
  align-items: center;
  gap: 0.6em;
}
.base-post-card__author-name {
  font-weight: 600;
  font-size: 0.85em;
}
.base-post-card__date {
  font-size: 0.75em;
  color: var(--text-secondary);
}
.base-post-card__stats {
  display: flex;
  gap: 0.75em;
  font-size: 0.82em;
  color: var(--text-secondary);
}
.base-post-card__stats span {
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
}
</style>
