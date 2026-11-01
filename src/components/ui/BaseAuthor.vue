<template>
  <span class="base-author" :style="tagStyle">
    <span class="base-author__avatar" aria-hidden="true">{{ initial }}</span>
    <span class="base-author__name">
      <small>por</small>
      {{ tag }}
    </span>
  </span>
</template>

<script setup>
import { computed } from 'vue'
import { getTagColor } from '@/constants/tagColors'

/**
 * Autoria de um post: a tag (persona) é o autor real.
 * A cor vem de `tagColors.js`, então Pamonha, Ruka, Mochiemi, Mochi e Purple
 * aparecem cada uma com sua cor.
 */
const props = defineProps({
  tag: { type: String, default: '' },
})

/** Inicial usada no "avatar" (ex.: Pamonha -> P). */
const initial = computed(() =>
  props.tag ? props.tag.trim().charAt(0).toUpperCase() : '?',
)

/** Injeta a cor da tag como CSS var. */
const tagStyle = computed(() => ({
  '--tag-color': getTagColor(props.tag),
}))
</script>

<style scoped>
.base-author {
  /* cor padrão caso o post não tenha tag */
  --tag-color: var(--champagne);

  display: inline-flex;
  align-items: center;
  gap: 0.5em;
  min-width: 0;
}

.base-author__avatar {
  display: grid;
  flex: 0 0 auto;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--tag-color);
  color: var(--white);
  font-size: 0.82rem;
  font-weight: 700;
  line-height: 1;
  box-shadow: 0 1px 4px var(--shadow);
}

.base-author__name {
  display: flex;
  align-items: baseline;
  gap: 0.3em;
  overflow: hidden;
  font-size: 0.9em;
  font-weight: 600;
  color: var(--text-primary);
  white-space: nowrap;
  text-overflow: ellipsis;
}

.base-author__name small {
  font-size: 0.8em;
  font-weight: 400;
  color: var(--text-secondary);
}
</style>
