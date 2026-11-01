<template>
  <div class="base-input" :class="{ 'base-input--inline': inline }">
    <label v-if="label" :for="inputId" class="base-input__label">
      {{ label }}
    </label>

    <div class="base-input__control">
      <input
        :id="inputId"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :min="min"
        :max="max"
        :step="step"
        :autocomplete="autocomplete"
        class="base-input__field"
        @input="$emit('update:modelValue', coerce($event.target.value))"
      />
      <span v-if="suffix" class="base-input__suffix">{{ suffix }}</span>
    </div>

    <small v-if="hint" class="base-input__hint">{{ hint }}</small>
  </div>
</template>

<script setup>
import { computed, useId } from 'vue'

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  inline: { type: Boolean, default: false },
  hint: { type: String, default: '' },
  suffix: { type: String, default: '' },
  autocomplete: { type: String, default: 'off' },
  min: { type: [String, Number], default: undefined },
  max: { type: [String, Number], default: undefined },
  step: { type: [String, Number], default: undefined },
  numeric: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])

const inputId = computed(() => `input-${useId()}`)

function coerce(value) {
  if (!props.numeric) return value
  const n = Number(value)
  return Number.isNaN(n) ? '' : n
}
</script>

<style scoped>
.base-input {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin-bottom: 0.75em;
}

.base-input--inline {
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5em;
}

.base-input__label {
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 600;
  font-size: 0.95em;
  color: var(--text-primary);
  margin: 0;
}

.base-input__control {
  display: inline-flex;
  align-items: center;
  gap: 0.5em;
}

.base-input__field {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 0.95em;
  color: var(--text-primary);
  background-color: var(--surface-secondary);
  border: 2px solid var(--border);
  border-radius: 6px;
  padding: 0.5em 0.75em;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 100%;
}

.base-input__field:focus {
  border-color: var(--border-secondary);
  background-color: var(--surface-primary);
  box-shadow: 0 0 0 3px var(--sky-blue-surface);
  outline: none;
}

.base-input__field:disabled {
  background-color: var(--disabled-surface);
  color: var(--disabled-letter);
  cursor: not-allowed;
  opacity: 0.7;
}

.base-input__suffix {
  font-weight: 700;
  color: var(--title-secondary);
  min-width: 2.5em;
}

.base-input__hint {
  font-size: 0.8em;
  color: var(--text-secondary);
}
</style>
