<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '../composables/useTheme'

const { themes, currentTheme, setTheme } = useTheme()

const open = ref(false)

function pick(t: typeof themes[number]) {
  setTheme(t)
  open.value = false
}
</script>

<template>
  <div class="fixed top-4 right-4 z-50">
    <button
      class="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm transition-colors"
      :style="{
        background: 'var(--c-surface)',
        borderColor: 'var(--c-border)',
        color: 'var(--c-fg)',
      }"
      @click="open = !open"
    >
      <span class="size-2.5 rounded-full" :style="{ background: currentTheme.accent }"></span>
      <span>{{ currentTheme.name }}</span>
      <svg class="size-3 transition-transform" :class="{ 'rotate-180': open }" :style="{ color: 'var(--c-muted)' }" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 4.5L6 7.5L9 4.5"/></svg>
    </button>

    <div
      v-if="open"
      class="absolute right-0 mt-1 w-48 rounded-lg border py-1 max-h-80 overflow-y-auto"
      :style="{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }"
    >
      <button
        v-for="t in themes" :key="t.id"
        class="flex items-center gap-2 w-full px-3 py-1.5 text-sm text-left transition-colors"
        :style="{
          color: currentTheme.id === t.id ? 'var(--c-accent)' : 'var(--c-fg)',
          background: currentTheme.id === t.id ? 'color-mix(in srgb, var(--c-accent) 10%, transparent)' : 'transparent',
        }"
        @click="pick(t)"
      >
        <span class="size-2.5 rounded-full shrink-0" :style="{ background: t.accent }"></span>
        <span>{{ t.name }}</span>
      </button>
    </div>

    <div v-if="open" class="fixed inset-0 z-[-1]" @click="open = false"></div>
  </div>
</template>
