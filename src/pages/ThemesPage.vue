<script setup lang="ts">
import { useTheme } from '../composables/useTheme'

const { themes, currentTheme, setTheme } = useTheme()
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Foundation</p>
      <h1 class="text-3xl font-bold">Themes</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">{{ themes.length }} built-in themes. Click to switch.</p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
      <button
        v-for="t in themes" :key="t.id"
        class="p-4 rounded-lg border text-left transition-all cursor-pointer"
        :style="{
          background: t.bg,
          borderColor: currentTheme.id === t.id ? t.accent : 'var(--c-border)',
          outline: currentTheme.id === t.id ? `2px solid ${t.accent}` : 'none',
          outlineOffset: '2px',
        }"
        @click="setTheme(t)"
      >
        <div class="flex items-center gap-2 mb-2">
          <div class="size-3 rounded-full" :style="{ background: t.accent }"></div>
          <span class="text-sm font-medium" :style="{ color: t.fg }">{{ t.name }}</span>
        </div>
        <div class="flex gap-1">
          <div class="h-2 flex-1 rounded" :style="{ background: t.accent }"></div>
          <div class="h-2 flex-1 rounded" :style="{ background: t.muted }"></div>
          <div class="h-2 flex-1 rounded" :style="{ background: t.fg }"></div>
        </div>
        <p class="text-[10px] mt-2 font-mono" :style="{ color: t.muted }">{{ t.mode }} · {{ t.accent }}</p>
      </button>
    </div>
  </div>
</template>
