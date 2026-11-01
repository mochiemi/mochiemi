<template>
  <div class="base-empty">
    <div class="base-empty__icon" aria-hidden="true">
      <OhVueIcon :name="icon || 'oi-question'" />
    </div>
    <h3 class="base-empty__title">{{ title }}</h3>
    <p v-if="description" class="base-empty__desc">{{ description }}</p>
    <div v-if="$slots.action" class="base-empty__action">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Nada por aqui' },
  description: { type: String, default: '' },
  icon: { type: String, default: '' },
})
</script>

<style scoped>
.base-empty {
  text-align: center;
  padding: 2.5em 1.5em;
  border: var(--border-width) dashed var(--border);
  border-radius: var(--radius-md);
  background-color: var(--surface-secondary);
  color: var(--text-secondary);
  margin: 1em 0;
}
.base-empty__icon {
  font-size: 3em;
  color: var(--border-strong);
  margin-bottom: 0.3em;
  display: inline-flex;
}
.base-empty__title {
  /* zera a borda tracejada que o h3 global aplica */
  padding: 0;
  border: 0;
  font-family: 'Bellota', cursive;
  font-size: 1.4em;
  color: var(--title-secondary);
  margin: 0 0 0.3em;
}
.base-empty__desc {
  max-width: 420px;
  margin: 0 auto;
  font-size: 0.95em;
  line-height: 1.5;
}
.base-empty__action { margin-top: 1em; }
</style>
