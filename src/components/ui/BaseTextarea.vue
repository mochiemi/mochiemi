<template>
  <div class="base-textarea">
    <label v-if="label" :for="textareaId" class="base-textarea__label">
      {{ label }}
    </label>
    <textarea
      :id="textareaId"
      :value="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      :disabled="disabled"
      class="base-textarea__field"
      @input="$emit('update:modelValue', $event.target.value)"
    ></textarea>
  </div>
</template>

<script setup>
import { computed, useId } from 'vue'

defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  rows: { type: [Number, String], default: 4 },
  placeholder: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
})

defineEmits(['update:modelValue'])

const textareaId = computed(() => `textarea-${useId()}`)
</script>

<style scoped>
.base-textarea {
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  margin-bottom: 0.75em;
}

.base-textarea__label {
  font-weight: 600;
  font-size: 0.95em;
  color: var(--text-primary);
}

.base-textarea__field {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: 0.95em;
  color: var(--text-primary);
  background-color: var(--surface-secondary);
  border: var(--border-width) solid var(--border);
  border-radius: var(--radius-sm);
  padding: 0.5em 0.75em;
  resize: vertical;
  min-height: 80px;
  width: 100%;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.base-textarea__field:focus {
  border-color: var(--border-secondary);
  background-color: var(--surface-primary);
  box-shadow: 0 0 0 3px var(--sky-blue-surface);
  outline: none;
}
</style>
