<template>
  <Teleport to="body">
    <transition name="modal-fade">
      <div v-if="modelValue" class="base-modal" @click.self="close">
        <div
          :class="['base-modal__dialog', `base-modal__dialog--${size}`]"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="titleId"
          ref="dialogRef"
        >
          <header class="base-modal__header">
            <h2 :id="titleId" class="base-modal__title">
              <slot name="title">{{ title }}</slot>
            </h2>
            <button
              type="button"
              class="base-modal__close"
              aria-label="Fechar modal"
              @click="close"
            >
              ×
            </button>
          </header>
          <div class="base-modal__body"><slot /></div>
          <footer v-if="$slots.footer" class="base-modal__footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: '' },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['sm', 'md', 'lg'].includes(v),
  },
  closeOnBackdrop: { type: Boolean, default: true },
})

const emit = defineEmits(['update:modelValue', 'close'])

const titleId = `modal-title-${Math.random().toString(36).slice(2, 9)}`
const dialogRef = ref(null)
let lastFocused = null

const close = () => {
  if (!props.closeOnBackdrop) return
  emit('update:modelValue', false)
  emit('close')
}

const onKeydown = (e) => {
  if (e.key === 'Escape') close()
}

watch(
  () => props.modelValue,
  async (isOpen) => {
    if (isOpen) {
      lastFocused = document.activeElement
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onKeydown)
      await nextTick()
      dialogRef.value?.querySelector('button, [href], input, select, textarea')?.focus()
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeydown)
      lastFocused?.focus?.()
    }
  }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.base-modal {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 1em;
}
.base-modal__dialog {
  background-color: var(--surface-primary);
  color: var(--text-primary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: var(--border-width) solid var(--border);
}
.base-modal__dialog--sm { max-width: 380px; }
.base-modal__dialog--md { max-width: 560px; }
.base-modal__dialog--lg { max-width: 820px; }

.base-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.25em;
  border-bottom: 1px dashed var(--border);
}
.base-modal__title {
  margin: 0;
  font-family: 'Bellota', cursive;
  font-size: 1.4em;
  color: var(--title-secondary);
}
.base-modal__close {
  background: transparent;
  border: none;
  box-shadow: none;
  font-size: 1.6em;
  line-height: 1;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 0;
  margin: 0;
  width: auto;
}
.base-modal__close:hover { color: var(--red); transform: none; box-shadow: none; }

.base-modal__body {
  padding: 1.25em;
  overflow-y: auto;
}
.base-modal__footer {
  padding: 0.9em 1.25em;
  border-top: 1px dashed var(--border);
  display: flex;
  justify-content: flex-end;
  gap: 0.5em;
  flex-wrap: wrap;
}

.modal-fade-enter-active,
.modal-fade-leave-active { transition: opacity 0.2s ease; }
.modal-fade-enter-from,
.modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-active .base-modal__dialog,
.modal-fade-leave-active .base-modal__dialog { transition: transform 0.25s ease; }
.modal-fade-enter-from .base-modal__dialog,
.modal-fade-leave-to .base-modal__dialog { transform: scale(0.94); }

@media (max-width: 480px) {
  .base-modal__footer { flex-direction: column-reverse; }
  .base-modal__footer > * { width: 100%; }
}
</style>
