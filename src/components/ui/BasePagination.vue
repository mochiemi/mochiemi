<template>
  <nav class="base-pagination" aria-label="Paginação">
    <button
      type="button"
      class="base-pagination__btn"
      :disabled="current <= 1"
      @click="goTo(current - 1)"
      aria-label="Página anterior"
    >
      ‹
    </button>

    <template v-for="(page, idx) in pages" :key="idx">
      <span v-if="page === '…'" class="base-pagination__ellipsis">…</span>
      <button
        v-else
        type="button"
        :class="['base-pagination__btn', { 'base-pagination__btn--active': page === current }]"
        :aria-current="page === current ? 'page' : undefined"
        @click="goTo(page)"
      >
        {{ page }}
      </button>
    </template>

    <button
      type="button"
      class="base-pagination__btn"
      :disabled="current >= total"
      @click="goTo(current + 1)"
      aria-label="Próxima página"
    >
      ›
    </button>
  </nav>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  current: { type: Number, default: 1 },
  total: { type: Number, required: true },
  siblings: { type: Number, default: 1 },
})

const emit = defineEmits(['update:current', 'change'])

const pages = computed(() => {
  const total = props.total
  const current = props.current
  const sib = props.siblings
  const range = []
  const start = Math.max(2, current - sib)
  const end = Math.min(total - 1, current + sib)

  range.push(1)
  if (start > 2) range.push('…')
  for (let i = start; i <= end; i++) range.push(i)
  if (end < total - 1) range.push('…')
  if (total > 1) range.push(total)

  return [...new Set(range)]
})

const goTo = (page) => {
  if (page < 1 || page > props.total || page === props.current) return
  emit('update:current', page)
  emit('change', page)
}
</script>

<style scoped>
.base-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25em;
  flex-wrap: wrap;
  margin: 1.5em 0;
}
.base-pagination__btn {
  min-width: 38px;
  height: 38px;
  padding: 0 0.5em;
  margin: 0;
  border-radius: 50%;
  background-color: var(--surface-primary);
  border: 2px solid var(--border);
  color: var(--text-primary);
  font-weight: 700;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.2s ease;
}
.base-pagination__btn:hover:not(:disabled) {
  border-color: var(--strong-rose);
  background-color: var(--rose-surface);
  transform: translateY(-1px);
}
.base-pagination__btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.base-pagination__btn--active {
  background-color: var(--strong-rose);
  border-color: var(--strong-rose);
  color: var(--white);
}
.base-pagination__ellipsis {
  padding: 0 0.25em;
  color: var(--text-secondary);
  font-weight: 700;
}
</style>
