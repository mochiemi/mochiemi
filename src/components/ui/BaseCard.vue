<template>
  <article :class="['base-card', `base-card--${variant}`]">
    <header v-if="$slots.header || title" class="base-card__header">
      <slot name="header">
        <h3 v-if="title" class="base-card__title">{{ title }}</h3>
      </slot>
    </header>
    <div class="base-card__body">
      <slot />
    </div>
    <footer v-if="$slots.footer" class="base-card__footer">
      <slot name="footer" />
    </footer>
  </article>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  variant: {
    type: String,
    default: 'default',
    validator: (v) => ['default', 'info', 'warning', 'success'].includes(v),
  },
})
</script>

<style scoped>
.base-card {
  margin: 1em 0;
  padding: 1em;
  border-radius: 8px;
  background-color: var(--surface-secondary);
  border: 2px solid var(--secondary);
}

.base-card--info { border-left-color: var(--secondary); }
.base-card--warning {
  border-color: var(--yellow);
  background-color: var(--surface-error);
}
.base-card--success { border-color: var(--deep-teal); }

.base-card__header { margin-bottom: 0.5em; }
.base-card__title {
  font-family: 'Bellota', cursive;
  font-weight: 700;
  font-size: 1.2em;
  color: var(--title-secondary);
  margin: 0;
}
.base-card__body { font-size: 0.95em; }
.base-card__footer {
  margin-top: 0.75em;
  padding-top: 0.5em;
  border-top: 1px dashed var(--border);
}
</style>
