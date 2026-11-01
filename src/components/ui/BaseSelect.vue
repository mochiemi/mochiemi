<template>
  <div class="base-select">
    <label v-if="label" :for="selectId" class="base-select__label">
      {{ label }}
    </label>
    <select
      :id="selectId"
      :value="modelValue"
      :disabled="disabled"
      class="base-select__field"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option v-if="placeholder" value="">{{ placeholder }}</option>
      <option v-for="opt in options" :key="opt.value" :value="opt.value">
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { computed, useId } from 'vue'

defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  options: { type: Array, default: () => [] },
})

defineEmits(['update:modelValue'])

const selectId = computed(() => `select-${useId()}`)
</script>

<style scoped>
.base-select {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin-bottom: 0.75em;
}

.base-select__label {
  font-weight: 600;
  font-size: 0.95em;
  color: var(--text-primary);
}

.base-select__field {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 0.95em;
  color: var(--text-primary);
  background-color: var(--surface-secondary);
  border: 2px solid var(--border);
  border-radius: 6px;
  padding: 0.5em 0.75em;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.base-select__field:focus {
  border-color: var(--border-secondary);
  background-color: var(--surface-primary);
  box-shadow: 0 0 0 3px var(--sky-blue-surface);
  outline: none;
}
</style>
