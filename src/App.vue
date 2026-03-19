<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { themes, applyTheme, type Theme } from './themes'
import Sidebar from './components/Sidebar.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'

const pages = [
  { id: 'overview', label: 'Overview', group: 'Foundation' },
  { id: 'colors', label: 'Colors', group: 'Foundation' },
  { id: 'typography', label: 'Typography', group: 'Foundation' },
  { id: 'themes', label: 'Themes', group: 'Foundation' },
  { id: 'logo', label: 'Logo & Brand', group: 'Foundation' },
  { id: 'buttons', label: 'Buttons', group: 'Components' },
  { id: 'inputs', label: 'Inputs', group: 'Components' },
  { id: 'cards', label: 'Cards', group: 'Components' },
  { id: 'feedback', label: 'Feedback', group: 'Components' },
  { id: 'navigation', label: 'Navigation', group: 'Components' },
  { id: 'data', label: 'Data Display', group: 'Components' },
  { id: 'sidebar', label: 'Sidebar', group: 'Patterns' },
  { id: 'settings', label: 'Settings Page', group: 'Patterns' },
  { id: 'dashboard', label: 'Dashboard', group: 'Patterns' },
]

const currentPage = ref('overview')
const currentTheme = ref<Theme>(themes[2]) // vs-dark default

function setTheme(t: Theme) {
  currentTheme.value = t
  applyTheme(t)
}

onMounted(() => applyTheme(currentTheme.value))
</script>

<template>
  <div class="flex min-h-screen" :style="{ background: 'var(--c-bg)', color: 'var(--c-fg)' }">
    <Sidebar :pages="pages" :active="currentPage" @navigate="currentPage = $event" />

    <main class="ml-56 flex-1 px-10 py-8 max-w-4xl">
      <ThemeSwitcher :themes="themes" :current="currentTheme" @select="setTheme" />

      <!-- Overview -->
      <template v-if="currentPage === 'overview'">
        <div class="mb-8">
          <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Design System</p>
          <h1 class="text-3xl font-bold">Construct UI</h1>
          <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">The visual language for the Construct ecosystem.</p>
        </div>
        <div class="grid grid-cols-3 gap-4 mb-8">
          <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
            <h3 class="text-sm font-semibold mb-1">Dark First</h3>
            <p class="text-xs" :style="{ color: 'var(--c-muted)' }">14 themes. Dark is default.</p>
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
      </template>

      <!-- Themes -->
      <template v-if="currentPage === 'themes'">
        <div class="mb-8">
          <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Foundation</p>
          <h1 class="text-3xl font-bold">Themes</h1>
          <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">14 built-in themes. Click to switch.</p>
        </div>
        <div class="grid grid-cols-3 gap-3 mb-8">
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
      </template>

      <!-- Buttons -->
      <template v-if="currentPage === 'buttons'">
        <div class="mb-8">
          <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Components</p>
          <h1 class="text-3xl font-bold">Buttons</h1>
        </div>
        <div class="flex flex-wrap gap-3 mb-6">
          <button class="px-4 py-2 rounded-lg text-sm font-medium text-white" :style="{ background: 'var(--c-accent)' }">Primary</button>
          <button class="px-4 py-2 rounded-lg text-sm font-medium" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">Secondary</button>
          <button class="px-4 py-2 rounded-lg text-sm font-medium border" :style="{ borderColor: 'var(--c-border)', color: 'var(--c-fg)' }">Outline</button>
          <button class="px-4 py-2 rounded-lg text-sm font-medium" :style="{ color: 'var(--c-muted)' }">Ghost</button>
          <button class="px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-500">Danger</button>
          <button class="px-4 py-2 rounded-lg text-sm font-medium opacity-40 cursor-not-allowed text-white" :style="{ background: 'var(--c-accent)' }" disabled>Disabled</button>
        </div>
        <p class="text-[10px] uppercase tracking-widest mb-2" :style="{ color: 'var(--c-muted)' }">Sizes</p>
        <div class="flex items-center gap-3">
          <button class="px-3 py-1 rounded-md text-xs font-medium text-white" :style="{ background: 'var(--c-accent)' }">Small</button>
          <button class="px-4 py-2 rounded-lg text-sm font-medium text-white" :style="{ background: 'var(--c-accent)' }">Default</button>
          <button class="px-6 py-3 rounded-lg text-base font-medium text-white" :style="{ background: 'var(--c-accent)' }">Large</button>
        </div>
      </template>

      <!-- Fallback for pages not yet ported -->
      <template v-if="!['overview','themes','buttons'].includes(currentPage)">
        <div class="mb-8">
          <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">{{ pages.find(p => p.id === currentPage)?.group }}</p>
          <h1 class="text-3xl font-bold">{{ pages.find(p => p.id === currentPage)?.label }}</h1>
          <p class="text-sm mt-2" :style="{ color: 'var(--c-muted)' }">Switch themes above to preview tokens.</p>
        </div>
      </template>
    </main>
  </div>
</template>
