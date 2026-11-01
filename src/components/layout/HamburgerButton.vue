<template>
  <button
    class="hamburger-button"
    :class="{ 'hamburger-button--active': isOpen }"
    :aria-label="isOpen ? 'Fechar menu' : 'Abrir menu'"
    :aria-expanded="isOpen"
    aria-controls="mobile-menu"
    @click="$emit('toggle')"
  >
    <span class="hamburger-button__line"></span>
    <span class="hamburger-button__line"></span>
    <span class="hamburger-button__line"></span>
  </button>
</template>

<script setup>
defineProps({
  isOpen: { type: Boolean, default: false },
})

defineEmits(['toggle'])
</script>

<style scoped>
.hamburger-button {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  background-color: var(--bg-primary) !important;
  border: 2px solid var(--border-navbar);
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px var(--shadow);
  transition: all 0.3s ease;
}

.hamburger-button:hover {
  background-color: var(--surface-contrast) !important;
  transform: scale(1.05);
  box-shadow: 0 4px 12px var(--shadow-hover);
}

.hamburger-button:active {
  transform: scale(0.95);
}

.hamburger-button__line {
  display: block;
  width: 20px;
  height: 2px;
  background-color: var(--text-secondary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger-button--active .hamburger-button__line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.hamburger-button--active .hamburger-button__line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.hamburger-button--active .hamburger-button__line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 768px) {
  .hamburger-button {
    display: flex;
  }
}
</style>
