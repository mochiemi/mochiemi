<template>
  <span
    :class="[
      'base-avatar',
      `base-avatar--${size}`,
      { 'base-avatar--round': round, 'base-avatar--bordered': bordered },
    ]"
    :title="name"
  >
    <img
      v-if="src && !imageError"
      :src="src"
      :alt="name"
      class="base-avatar__img"
      @error="imageError = true"
    />
    <span v-else class="base-avatar__initials" aria-hidden="true">
      {{ initials }}
    </span>
    <span
      v-if="status"
      :class="['base-avatar__status', `base-avatar__status--${status}`]"
      :aria-label="statusLabel"
    />
  </span>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const props = defineProps({
  src: { type: String, default: '' },
  name: { type: String, default: '' },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(v),
  },
  round: { type: Boolean, default: true },
  bordered: { type: Boolean, default: false },
  status: {
    type: String,
    default: '',
    validator: (v) => ['', 'online', 'offline', 'busy'].includes(v),
  },
})

const imageError = ref(false)
watch(() => props.src, () => (imageError.value = false))

const initials = computed(() => {
  if (!props.name) return '?'
  const parts = props.name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
})

const statusLabel = computed(
  () =>
    ({ online: 'Online', offline: 'Offline', busy: 'Ocupado' })[props.status] ?? ''
)
</script>

<style scoped>
.base-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--rose-surface);
  color: var(--title-secondary);
  font-family: 'Kumbh Sans', sans-serif;
  font-weight: 700;
  overflow: visible;
  flex-shrink: 0;
  user-select: none;
}
.base-avatar--round { border-radius: 50%; }
.base-avatar--bordered { box-shadow: 0 0 0 2px var(--surface-primary), 0 0 0 4px var(--strong-rose); }

.base-avatar--xs { width: 24px; height: 24px; font-size: 0.65em; }
.base-avatar--sm { width: 32px; height: 32px; font-size: 0.75em; }
.base-avatar--md { width: 40px; height: 40px; font-size: 0.9em; }
.base-avatar--lg { width: 56px; height: 56px; font-size: 1.15em; }
.base-avatar--xl { width: 80px; height: 80px; font-size: 1.6em; }

.base-avatar__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}
.base-avatar__initials {
  line-height: 1;
  letter-spacing: 0.02em;
}

.base-avatar__status {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 28%;
  height: 28%;
  min-width: 8px;
  min-height: 8px;
  border-radius: 50%;
  border: 2px solid var(--surface-primary);
}
.base-avatar__status--online { background-color: var(--green); }
.base-avatar__status--offline { background-color: var(--gray); }
.base-avatar__status--busy { background-color: var(--red); }
</style>
