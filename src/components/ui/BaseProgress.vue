<template>
  <div class="base-progress">
    <label v-if="label" :for="progressId" class="base-progress__label">
      {{ label }}
    </label>

    <div class="base-progress__row">
      <progress
        :id="progressId"
        :value="value"
        :max="max"
        class="base-progress__bar"
      >
        {{ value }}%
      </progress>
      <span class="base-progress__value">{{ value }}%</span>

      <meter
        v-if="withMeter"
        :value="value / max"
        min="0"
        max="1"
        low="0.3"
        high="0.8"
        optimum="0.5"
        class="base-progress__meter"
      >
        {{ value }}%
      </meter>
    </div>
  </div>
</template>

<script setup>
import { computed, useId } from 'vue'

defineProps({
  value: { type: Number, required: true },
  max: { type: Number, default: 100 },
  label: { type: String, default: '' },
  withMeter: { type: Boolean, default: false },
})

const progressId = computed(() => `progress-${useId()}`)
</script>

<style scoped>
.base-progress { margin: 0.75em 0; }
.base-progress__label {
  font-weight: 600;
  font-size: 0.95em;
  color: var(--text-primary);
  margin-bottom: 0.35em;
  display: inline-block;
}
.base-progress__row {
  display: flex;
  align-items: center;
  gap: 0.75em;
  flex-wrap: wrap;
}
.base-progress__bar {
  width: 100%;
  max-width: 300px;
  height: 20px;
  border-radius: var(--radius-pill);
  overflow: hidden;
  background-color: var(--surface-secondary);
  border: 1px solid var(--border);
  vertical-align: middle;
}
.base-progress__value {
  font-weight: 700;
  color: var(--title-secondary);
  min-width: 3em;
}
.base-progress__meter {
  width: 100%;
  max-width: 300px;
  height: 20px;
}
</style>
