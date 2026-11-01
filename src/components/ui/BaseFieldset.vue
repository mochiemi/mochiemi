<template>
  <fieldset class="base-fieldset">
    <legend v-if="legend" class="base-fieldset__legend">{{ legend }}</legend>
    <slot />
  </fieldset>
</template>

<script setup>
defineProps({
  legend: { type: String, default: '' },
})
</script>

<style scoped>
.base-fieldset {
  border: var(--border-width) solid var(--border);
  padding: 1.25em;
  margin: 1em 0;
  border-radius: var(--radius-md);
  background-color: var(--surface-primary);
  box-shadow: var(--shadow-sm);
}

.base-fieldset__legend {
  padding: 0 0.75em;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  font-size: 1.1em;
  color: var(--title-secondary);
  background-color: var(--surface-primary);
}
</style>
