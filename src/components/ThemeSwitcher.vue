<script setup lang="ts">
import type { Theme } from '../themes'

defineProps<{
  themes: Theme[]
  current: Theme
}>()
defineEmits<{ select: [theme: Theme] }>()
</script>

<template>
  <div class="fixed top-4 right-4 flex flex-wrap gap-1 max-w-md z-50">
    <button
      v-for="t in themes" :key="t.id"
      class="px-2 py-1 rounded text-[10px] font-medium border transition-all"
      :style="{
        background: t.bg,
        borderColor: current.id === t.id ? t.accent : 'var(--c-border)',
        opacity: current.id === t.id ? '1' : '0.7',
        outline: current.id === t.id ? `2px solid ${t.accent}` : 'none',
        outlineOffset: '2px',
      }"
      :title="t.name"
      @click="$emit('select', t)"
    >
      <span :style="{ color: t.accent }">{{ t.name }}</span>
    </button>
  </div>
</template>
