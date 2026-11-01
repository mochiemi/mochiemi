<template>
  <div class="base-tabs">
    <div role="tablist" class="base-tabs__list" :aria-label="ariaLabel">
      <button
        v-for="(tab, idx) in tabs"
        :key="tab.value"
        :id="`tab-${uid}-${tab.value}`"
        role="tab"
        :aria-selected="active === tab.value"
        :aria-controls="`panel-${uid}-${tab.value}`"
        :tabindex="active === tab.value ? 0 : -1"
        :class="['base-tabs__tab', { 'base-tabs__tab--active': active === tab.value }]"
        @click="select(tab.value)"
        @keydown="onKey($event, idx)"
      >
        <OhVueIcon v-if="tab.icon" :name="tab.icon" />
        {{ tab.label }}
      </button>
    </div>

    <div
      v-for="tab in tabs"
      v-show="active === tab.value"
      :key="tab.value"
      :id="`panel-${uid}-${tab.value}`"
      role="tabpanel"
      :aria-labelledby="`tab-${uid}-${tab.value}`"
      class="base-tabs__panel"
    >
      <slot :name="tab.value" :tab="tab" />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  tabs: { type: Array, required: true }, // [{ value, label, icon? }]
  modelValue: { type: String, default: '' },
  ariaLabel: { type: String, default: 'Abas' },
})
const emit = defineEmits(['update:modelValue', 'change'])

const uid = Math.random().toString(36).slice(2, 8)
const active = ref(props.modelValue || props.tabs[0]?.value)

watch(() => props.modelValue, (v) => (active.value = v))

const select = (value) => {
  active.value = value
  emit('update:modelValue', value)
  emit('change', value)
}

const onKey = (e, idx) => {
  const len = props.tabs.length
  if (e.key === 'ArrowRight') select(props.tabs[(idx + 1) % len].value)
  if (e.key === 'ArrowLeft') select(props.tabs[(idx - 1 + len) % len].value)
  if (e.key === 'Home') select(props.tabs[0].value)
  if (e.key === 'End') select(props.tabs[len - 1].value)
}
</script>

<style scoped>
.base-tabs__list {
  display: flex;
  gap: 0.25em;
  border-bottom: 2px solid var(--border);
  margin-bottom: 1em;
  overflow-x: auto;
}
.base-tabs__tab {
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  border-radius: 0;
  box-shadow: none;
  color: var(--text-secondary);
  padding: 0.7em 1em;
  font-weight: 600;
  cursor: pointer;
  margin: 0;
  white-space: nowrap;
  transition: all 0.2s ease;
}
.base-tabs__tab:hover { color: var(--strong-rose); transform: none; box-shadow: none; }
.base-tabs__tab--active {
  color: var(--strong-rose);
  border-bottom-color: var(--strong-rose);
}
.base-tabs__panel {
  padding: 0.5em 0;
  animation: fade-in 0.2s ease;
}
@keyframes fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: none; }
}
</style>
