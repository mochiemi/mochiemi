<template>
  <component
    :is="tag || (clickable ? 'button' : 'span')"
    :type="clickable ? 'button' : undefined"
    :class="[
      'base-badge',
      `base-badge--${variant}`,
      `base-badge--${size}`,
      {
        'base-badge--clickable': clickable,
        'base-badge--custom': !!color,
      },
    ]"
    :style="color ? { '--badge-custom-color': color } : undefined"
    @click="clickable && $emit('click', $event)"
  >
    <OhVueIcon v-if="icon" :name="icon" class="base-badge__icon" />
    <slot />
    <button
      v-if="dismissible"
      type="button"
      class="base-badge__close"
      aria-label="Remover"
      @click.stop="$emit('dismiss')"
    >
      ×
    </button>
  </component>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: (v) =>
      ['info', 'success', 'warning', 'danger', 'neutral', 'primary'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  tag: { type: String, default: '' },
  icon: { type: String, default: '' },
  clickable: { type: Boolean, default: false },
  dismissible: { type: Boolean, default: false },
  /**
   * Cor CSS customizada (ex: 'var(--green)').
   * Quando fornecida, sobrescreve as cores do `variant`.
   */
  color: { type: String, default: '' },
})

defineEmits(['click', 'dismiss'])
</script>

<style scoped>
.base-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 600;
  line-height: 1;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  padding: 0.35em 0.75em;
  white-space: nowrap;
  transition: all 0.2s ease;
}
.base-badge--sm { font-size: 0.7em; padding: 0.25em 0.6em; }
.base-badge--md { font-size: 0.8em; }
.base-badge--lg { font-size: 0.95em; padding: 0.45em 0.9em; }

.base-badge--info {
  background-color: var(--badge-info-bg);
  color: var(--text-primary);
  border-color: var(--badge-info-border);
}
.base-badge--success {
  background-color: var(--soft-mint);
  color: var(--teal);
  border-color: var(--deep-mint);
}
.base-badge--warning {
  background-color: var(--champagne);
  color: var(--deep-coral);
  border-color: var(--coral);
}
.base-badge--danger {
  background-color: var(--soft-coral);
  color: var(--deep-coral);
  border-color: var(--red);
}
.base-badge--neutral {
  background-color: var(--surface-secondary);
  color: var(--text-secondary);
  border-color: var(--border);
}
.base-badge--primary {
  background-color: var(--strong-rose);
  color: var(--white);
  border-color: var(--dark-rose);
}

/* Cor customizada: usa a CSS var injetada via :style */
.base-badge--custom {
  background-color: var(--badge-custom-color);
  border-color: var(--badge-custom-color);
  color: var(--text-primary);
  /* Sombra leve para legibilidade em fundos claros como champagne */
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.35);
}

.base-badge--clickable {
  cursor: pointer;
  padding: 0.35em 0.75em;
  margin: 0;
  box-shadow: none;
  width: auto;
}
.base-badge--clickable:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 6px var(--shadow-hover);
}
.base-badge--custom.base-badge--clickable:hover {
  filter: brightness(1.08);
}

.base-badge__icon { font-size: 0.95em; }

.base-badge__close {
  background: transparent;
  border: none;
  padding: 0;
  margin: 0 0 0 0.25em;
  box-shadow: none;
  color: inherit;
  font-size: 1.1em;
  line-height: 1;
  cursor: pointer;
  width: auto;
}
.base-badge__close:hover {
  transform: none;
  box-shadow: none;
  color: var(--red);
}
</style>
