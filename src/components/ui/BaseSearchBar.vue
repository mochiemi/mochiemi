<template>
  <form class="base-search" role="search" @submit.prevent="$emit('submit', query)">
    <div class="base-search__control">
      <OhVueIcon name="oi-search" class="base-search__icon" aria-hidden="true" />
      <input
        :value="modelValue"
        type="search"
        class="base-search__field"
        :placeholder="placeholder"
        :aria-label="ariaLabel"
        autocomplete="off"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button
        v-if="modelValue"
        type="button"
        class="base-search__clear"
        aria-label="Limpar busca"
        @click="$emit('update:modelValue', ''); $emit('clear')"
      >
        ×
      </button>
    </div>

    <button type="submit" class="base-search__submit">
      Buscar
    </button>
  </form>
</template>

<script setup>
defineProps({
  modelValue: { type: String, default: '' },
  placeholder: { type: String, default: 'Buscar por tag ou palavra...' },
  ariaLabel: { type: String, default: 'Buscar posts' },
})

defineEmits(['update:modelValue', 'submit', 'clear'])
</script>

<style scoped>
.base-search {
  display: flex;
  gap: 0.5em;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1em;
}
.base-search__control {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 220px;
}
.base-search__icon {
  position: absolute;
  left: 0.75em;
  color: var(--text-secondary);
  pointer-events: none;
  font-size: 1.1em;
}
.base-search__field {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 0.95em;
  color: var(--text-primary);
  background-color: var(--surface-secondary);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.6em 2.4em 0.6em 2.4em;
  width: 100%;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.base-search__field:focus {
  border-color: var(--border-secondary);
  background-color: var(--surface-primary);
  box-shadow: 0 0 0 3px var(--sky-blue-surface);
  outline: none;
}
.base-search__clear {
  position: absolute;
  right: 0.5em;
  background: transparent;
  border: none;
  box-shadow: none;
  font-size: 1.3em;
  line-height: 1;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0 0.25em;
  width: auto;
  margin: 0;
}
.base-search__clear:hover { color: var(--red); transform: none; box-shadow: none; }

.base-search__submit {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95em;
  color: var(--text-inverted);
  background-color: var(--strong-rose);
  border: var(--border-width) solid var(--border-primary);
  border-radius: var(--radius-sm);
  padding: 0.6em 1.2em;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: var(--shadow-sm);
}
.base-search__submit:hover {
  background-color: var(--primary);
  color: var(--text-primary);
  transform: translateY(-1px);
}
</style>
