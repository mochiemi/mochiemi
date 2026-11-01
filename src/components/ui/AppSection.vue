<template>
  <section :class="['app-section', { 'app-section--bordered': bordered }]">
    <header v-if="title || $slots.header" class="app-section__header">
      <slot name="header">
        <h2 class="app-section__title">{{ title }}</h2>
      </slot>
    </header>
    <div class="app-section__body">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' },
  bordered: { type: Boolean, default: true },
})
</script>

<style scoped>
.app-section {
  margin-bottom: 2.5em;
  padding-bottom: 1.5em;
}
.app-section--bordered {
  border-bottom: 1px dashed var(--border);
}
.app-section--bordered:last-of-type {
  border-bottom: none;
}
.app-section__title {
  font-family: 'Bellota', cursive;
  font-weight: 700;
  font-size: 1.8em;
  line-height: 1.3;
  margin: 0 0 0.5em;
  color: var(--secondary);
}
</style>
