<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="['base-button', `base-button--${variant}`, `base-button--${size}`]"
    @click="$emit('click', $event)"
  >
    <OhVueIcon v-if="icon" :name="icon" class="base-button__icon" />
    <span v-if="$slots.default" class="base-button__label">
      <slot />
    </span>
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'button',
    validator: (v) => ['button', 'submit', 'reset'].includes(v),
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'secondary', 'ghost', 'danger'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  icon: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
})

defineEmits(['click'])
</script>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 2px 8px var(--shadow);
  line-height: 1.2;
}

.base-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
  transform: none !important;
}

.base-button--sm { font-size: 0.85em; padding: 0.4em 0.9em; }
.base-button--md { font-size: 1em;    padding: 0.6em 1.25em; }
.base-button--lg { font-size: 1.1em;  padding: 0.75em 1.6em; }

.base-button--primary {
  background-color: var(--primary);
  color: var(--text-primary);
  border-color: var(--border-contrast);
}
.base-button--primary:hover:not(:disabled) {
  background-color: var(--strong-rose);
  border-color: var(--rose);
  color: var(--text-inverted);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--shadow-hover);
}

.base-button--secondary {
  background-color: var(--rose-surface);
  color: var(--text-primary);
  border-color: var(--border-primary);
}
.base-button--secondary:hover:not(:disabled) {
  background-color: var(--rose-surface-i);
  border-color: var(--rose-surface);
  color: var(--text-inverted);
  transform: translateY(-1px);
}

.base-button--ghost {
  background-color: transparent;
  color: var(--text-primary);
  border-color: var(--border);
  box-shadow: none;
}
.base-button--ghost:hover:not(:disabled) {
  background-color: var(--surface-secondary);
  border-color: var(--border);
}

.base-button--danger {
  background-color: var(--red);
  color: var(--white);
  border-color: var(--border-strong);
}
.base-button--danger:hover:not(:disabled) {
  background-color: var(--coral);
  color: var(--text-inverted);
  transform: translateY(-1px);
}

.base-button__icon {
  display: inline-flex;
  align-items: center;
}
</style>
