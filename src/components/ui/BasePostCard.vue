<template>
  <article class="post-card" :style="tagStyle">
    <!-- Capa -->
    <div class="post-card__media">
      <img
        v-if="showCover"
        :src="cover"
        :alt="title"
        class="post-card__cover"
        loading="lazy"
        @error="onCoverError"
      />
      <div
        v-else
        class="post-card__cover post-card__cover--placeholder"
        aria-hidden="true"
      >
        <span>{{ emoji || '📝' }}</span>
      </div>
    </div>

    <div class="post-card__body">
      <h3 class="post-card__title">
        <!--
          Link "esticado": só existe um link por card, mas o card inteiro
          é clicável (o ::after do link cobre a área do card).
        -->
        <router-link v-if="to" :to="to" class="post-card__link">
          {{ title }}
        </router-link>
        <span v-else>{{ title }}</span>
      </h3>

      <p v-if="excerpt" class="post-card__excerpt">{{ excerpt }}</p>

      <footer class="post-card__footer">
        <!-- A tag é o "autor" real do post (persona: Pamonha, Ruka, Mochiemi...) -->
        <BaseAuthor v-if="authorTag" :tag="authorTag" />

        <span class="post-card__meta">
          <span v-if="readTime" class="post-card__read">
            {{ readTime }} min
          </span>
          <span v-if="date" class="post-card__date">
            <OhVueIcon name="hi-clock" aria-hidden="true" />
            <time :datetime="date">{{ formattedDate }}</time>
          </span>
          <span v-if="likes != null" class="post-card__stat" title="Curtidas">
            <OhVueIcon name="fa-regular-heart" /> {{ likes }}
          </span>
          <span
            v-if="comments != null"
            class="post-card__stat"
            title="Comentários"
          >
            <OhVueIcon name="bi-chat-square-text" /> {{ comments }}
          </span>
        </span>
      </footer>
    </div>
  </article>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import BaseAuthor from './BaseAuthor.vue'
import { getTagColor } from '@/constants/tagColors'

const props = defineProps({
  title: { type: String, required: true },
  excerpt: { type: String, default: '' },
  cover: { type: String, default: '' },
  emoji: { type: String, default: '' },
  /** Tag/persona que assina o post (Pamonha, Ruka, Mochiemi, Mochi, Purple). */
  tag: { type: String, default: '' },
  /** @deprecated use `tag` — mantido para não quebrar chamadas antigas. */
  category: { type: String, default: '' },
  date: { type: String, default: '' },
  readTime: { type: [Number, String], default: '' },
  likes: { type: Number, default: null },
  comments: { type: Number, default: null },
  to: { type: [String, Object], default: '' },
})

/** O autor exibido é a tag do post. */
const authorTag = computed(() => props.tag || props.category)

/** Injeta a cor da tag como CSS var (usada na borda, avatar etc.). */
const tagStyle = computed(() => ({
  '--tag-color': getTagColor(authorTag.value),
}))

/** Se a imagem falhar, cai no placeholder visual. */
const imageBroken = ref(false)
watch(
  () => props.cover,
  () => {
    imageBroken.value = false
  },
)
function onCoverError() {
  imageBroken.value = true
}
const showCover = computed(() => Boolean(props.cover) && !imageBroken.value)

const formattedDate = computed(() => {
  if (!props.date) return ''
  try {
    return new Intl.DateTimeFormat('pt-BR', { dateStyle: 'medium' }).format(
      new Date(props.date),
    )
  } catch {
    return props.date
  }
})
</script>

<style scoped>
.post-card {
  /* cor padrão caso o post não tenha tag */
  --tag-color: var(--champagne);

  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  /* zera o padding/margin que o seletor global `article` aplica */
  margin: 0;
  padding: 0;
  background-color: var(--surface-primary);
  /* borda tracejada tingida pela tag — no hover ela fica na cor cheia */
  border: var(--border-width) dashed
    color-mix(in srgb, var(--tag-color) 55%, var(--border));
  border-top: 4px solid var(--tag-color);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

/* No hover a borda assume a cor da tag: a identidade "aparece" no card */
.post-card:hover {
  transform: translateY(-4px);
  border-color: var(--tag-color);
  box-shadow: var(--shadow-md);
}

/* ---------- Capa ---------- */
.post-card__media {
  overflow: hidden;
  background-color: var(--surface-secondary);
  /* separador tracejado: mesma linguagem dos títulos e do rodapé */
  border-bottom: 2px dashed var(--border);
}

.post-card__cover {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.post-card:hover .post-card__cover {
  transform: scale(1.05);
}

.post-card__cover--placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3em;
  background: linear-gradient(135deg, var(--champagne), var(--light-rose));
}

/* ---------- Conteúdo ---------- */
.post-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.55em;
  padding: 1em 1.15em 1.2em;
}

.post-card__title {
  /* anula o estilo global de h3 (borda tracejada/padding) dentro do card */
  margin: 0;
  padding: 0;
  border: 0;
  font-family: 'Bellota', cursive;
  font-size: 1.28em;
  line-height: 1.3;
  color: var(--title-secondary);
  overflow-wrap: anywhere;
}

.post-card__link {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

/* Faz o card inteiro ser clicável sem criar links duplicados */
.post-card__link::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
}

.post-card:hover .post-card__link {
  color: var(--strong-rose);
}

/* Anel de foco visível em todo o card quando o link recebe foco */
.post-card__link:focus-visible {
  outline: none;
}

.post-card__link:focus-visible::after {
  outline: 3px solid var(--focus);
  outline-offset: -3px;
}

.post-card__excerpt {
  display: -webkit-box;
  margin: 0;
  overflow: hidden;
  font-size: 0.93em;
  line-height: 1.55;
  color: var(--text-secondary);
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}

/* ---------- Rodapé: autor (tag) + metadados ---------- */
.post-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.6em;
  margin-top: auto;
  padding-top: 0.85em;
  border-top: 1px dashed var(--border);
}

.post-card__meta {
  display: inline-flex;
  align-items: center;
  gap: 0.6em;
  font-size: 0.78em;
  color: var(--text-secondary);
}

.post-card__read {
  display: inline-flex;
  align-items: center;
  padding: 0.15em 0.55em;
  border-radius: var(--radius-pill);
  background-color: var(--surface-secondary);
  border: 1px dashed var(--border);
}

.post-card__date {
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
}

.post-card__stat {
  display: inline-flex;
  align-items: center;
  gap: 0.25em;
}
</style>
