<template>
  <transition name="alert-fade">
    <div
      v-if="visible"
      :class="['base-alert', `base-alert--${variant}`]"
      role="alert"
      aria-live="polite"
    >
      <OhVueIcon :name="iconName" class="base-alert__icon" />
      <div class="base-alert__content">
        <strong v-if="title" class="base-alert__title">{{ title }}</strong>
        <div class="base-alert__body"><slot /></div>
        <div v-if="$slots.actions" class="base-alert__actions">
          <slot name="actions" />
        </div>
      </div>
      <button
        v-if="dismissible"
        type="button"
        class="base-alert__close"
        aria-label="Fechar aviso"
        @click="close"
      >
        ×
      </button>
    </div>
  </transition>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: (v) => ['info', 'success', 'warning', 'danger'].includes(v),
  },
  title: { type: String, default: '' },
  dismissible: { type: Boolean, default: true },
})

const emit = defineEmits(['dismiss'])

const visible = ref(true)
const close = () => {
  visible.value = false
  emit('dismiss')
}

const iconName = computed(
  () =>
    ({
      info: 'hi-information-circle',
      success: 'md-checkcircleoutline',
      warning: 'md-warning-round',
      danger: 'oi-x-circle',
    })[props.variant]
)
</script>

<style scoped>
.base-alert {
  display: flex;
  gap: 0.75em;
  padding: 0.85em 1em;
  border-radius: var(--radius-md);
  border: var(--border-width) solid var(--border);
  background-color: var(--surface-secondary);
  color: var(--text-primary);
  align-items: flex-start;
  margin: 0.75em 0;
}
.base-alert--info {
  background-color: var(--badge-info-bg);
  border-color: var(--badge-info);
}
.base-alert--success {
  background-color: var(--sky-blue-surface);
  border-color: var(--teal);
}
.base-alert--warning {
  background-color: var(--surface-error);
  border-color: var(--border-strong);
}
.base-alert--danger {
  background-color: var(--rose-surface);
  border-color: var(--orange);
}

.base-alert__icon {
  font-size: 1.5em;
  flex-shrink: 0;
  margin-top: 0.1em;
}
.base-alert__content { flex: 1; }
.base-alert__title { display: block; margin-bottom: 0.2em; color: var(--text-contrast);}
.base-alert__body { font-size: 0.95em; line-height: 1.5; }
.base-alert__actions {
  margin-top: 0.6em;
  display: flex;
  gap: 0.5em;
  flex-wrap: wrap;
}
.base-alert__close {
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  font-size: 1.4em;
  line-height: 1;
  color: var(--text-secondary);
  cursor: pointer;
  width: auto;
}
.base-alert__close:hover { color: var(--red); transform: none; box-shadow: none; }

.alert-fade-leave-active { transition: all 0.25s ease; }
.alert-fade-leave-to { opacity: 0; transform: translateY(-6px); }
</style>
