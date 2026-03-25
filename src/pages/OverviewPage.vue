<script setup lang="ts">
import { useTheme } from '../composables/useTheme'
import { usePages } from '../composables/usePages'

const { themes, currentTheme, setTheme } = useTheme()
const { pages, currentPage } = usePages()
</script>

<template>
  <div>
    <div class="mb-10">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Design System</p>
      <h1 class="text-3xl font-bold">Construct UI</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">The visual language for the Construct ecosystem. Components available via <code class="text-xs px-1.5 py-0.5 rounded" :style="{ background: 'var(--c-input)', color: 'var(--c-accent)' }">@construct-space/ui</code></p>
    </div>

    <!-- Principles -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
      <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <h3 class="text-sm font-semibold mb-1">Dark First</h3>
        <p class="text-xs" :style="{ color: 'var(--c-muted)' }">{{ themes.length }} themes. Dark is default.</p>
      </div>
      <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <h3 class="text-sm font-semibold mb-1">Minimal Chrome</h3>
        <p class="text-xs" :style="{ color: 'var(--c-muted)' }">Content first. Subtle borders.</p>
      </div>
      <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <h3 class="text-sm font-semibold mb-1">One Token Set</h3>
        <p class="text-xs" :style="{ color: 'var(--c-muted)' }">Same CSS vars across all products.</p>
      </div>
    </div>

    <!-- Color tokens -->
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Active Tokens</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
      <div v-for="token in ['bg','fg','muted','accent','border','surface','card','input']" :key="token" class="flex items-center gap-3 p-3 rounded-lg border" :style="{ borderColor: 'var(--c-border)' }">
        <div class="size-8 rounded-md shrink-0 border" :style="{ background: `var(--c-${token})`, borderColor: 'var(--c-border)' }"></div>
        <div>
          <p class="text-xs font-mono font-medium">{{ token }}</p>
          <p class="text-[10px] font-mono" :style="{ color: 'var(--c-muted)' }">--c-{{ token }}</p>
        </div>
      </div>
    </div>

    <!-- Component preview -->
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Components</p>
    <div class="p-6 rounded-lg border mb-10" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
      <div class="flex flex-wrap gap-3 mb-5">
        <button class="px-4 py-2 rounded-lg text-sm font-medium" :style="{ background: 'var(--c-accent)', color: 'var(--c-accent-fg)' }">Primary</button>
        <button class="px-4 py-2 rounded-lg text-sm font-medium" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">Secondary</button>
        <button class="px-4 py-2 rounded-lg text-sm font-medium border" :style="{ borderColor: 'var(--c-border)', color: 'var(--c-fg)' }">Outline</button>
        <button class="px-4 py-2 rounded-lg text-sm font-medium" :style="{ color: 'var(--c-muted)' }">Ghost</button>
      </div>
      <div class="flex flex-col sm:flex-row gap-3 mb-5">
        <input type="text" placeholder="Text input" class="flex-1 px-3 py-2 rounded-lg text-sm border-none outline-none" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
        <input type="text" placeholder="Disabled" disabled class="flex-1 px-3 py-2 rounded-lg text-sm border-none outline-none opacity-40" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
      </div>
      <div class="flex flex-wrap gap-2">
        <span class="px-2 py-0.5 rounded-full text-[10px] font-medium" :style="{ background: 'color-mix(in srgb, var(--c-accent) 15%, transparent)', color: 'var(--c-accent)' }">Badge</span>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-medium" :style="{ background: 'color-mix(in srgb, #ef4444 15%, transparent)', color: '#ef4444' }">Error</span>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-medium" :style="{ background: 'color-mix(in srgb, #eab308 15%, transparent)', color: '#eab308' }">Warning</span>
        <span class="px-2 py-0.5 rounded-full text-[10px] font-medium" :style="{ background: 'color-mix(in srgb, #22c55e 15%, transparent)', color: '#22c55e' }">Success</span>
      </div>
    </div>

    <!-- Theme strip -->
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Themes</p>
    <div class="flex flex-wrap gap-2 mb-10">
      <button
        v-for="t in themes" :key="t.id"
        class="size-8 rounded-md border transition-all cursor-pointer"
        :style="{
          background: t.bg,
          borderColor: currentTheme.id === t.id ? t.accent : 'var(--c-border)',
          outline: currentTheme.id === t.id ? `2px solid ${t.accent}` : 'none',
          outlineOffset: '1px',
        }"
        :title="t.name"
        @click="setTheme(t)"
      >
        <span class="block size-2 rounded-full mx-auto mt-2.5" :style="{ background: t.accent }"></span>
      </button>
    </div>

    <!-- Quick nav -->
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Pages</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
      <button
        v-for="p in pages.filter(p => p.id !== 'overview')" :key="p.id"
        class="p-3 rounded-lg border text-left text-sm transition-colors cursor-pointer"
        :style="{ borderColor: 'var(--c-border)', color: 'var(--c-fg)' }"
        @click="currentPage = p.id"
      >
        <span class="text-[10px] uppercase tracking-widest" :style="{ color: 'var(--c-muted)' }">{{ p.group }}</span>
        <span class="block mt-0.5">{{ p.label }}</span>
      </button>
    </div>
  </div>
</template>
