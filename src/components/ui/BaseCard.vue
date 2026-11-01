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
  border-radius: var(--radius-md);
  /*
   * `--card-accent` define a personalidade do card: borda tracejada 2px na cor
   * e fundo levemente tingido por ela. Quem usa o card só precisa definir a
   * variável (ex.: `--card-accent: var(--rose)`).
   */
  background-color: color-mix(
    in srgb,
    var(--card-accent, var(--border)) 6%,
    var(--surface-secondary)
  );
  border: var(--border-width) dashed var(--card-accent, var(--border));
  box-shadow: var(--shadow-sm);
}

.base-card--info {
  --card-accent: var(--secondary);
}

.base-card--warning {
  --card-accent: var(--yellow);
  background-color: var(--surface-error);
}

.base-card--success {
  --card-accent: var(--deep-teal);
}

.base-card__header { margin-bottom: 0.5em; }
.base-card__title {
  /* zera borda/padding do h3 global para o título do card */
  padding: 0;
  border: 0;
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
