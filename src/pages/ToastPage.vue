<script setup lang="ts">
import { CToast, CScrollArea } from '@construct-space/ui'
import { useToast } from '@construct-space/ui'
import SdkUsage from '../components/SdkUsage.vue'

const { add } = useToast()

function showToast(color: 'success' | 'error' | 'warning' | 'info', title: string, description: string) {
  add({ title, description, color, duration: 4000 })
}

const sdkComponents = [
  { name: 'useToast', import: 'useToast', source: 'ui', usage: `const { add } = useToast()\n\nadd({ title: 'Saved', color: 'success' })\nadd({ title: 'Failed', color: 'error', description: 'Could not connect.' })` },
  { name: 'CScrollArea', import: 'CScrollArea', source: 'ui', usage: `<CScrollArea class="h-64">\n  <!-- long content -->\n</CScrollArea>` },
]

const scrollItems = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  label: [
    'System preferences', 'User accounts', 'Notifications', 'Security settings',
    'API tokens', 'Webhooks', 'Integrations', 'Billing & plans',
    'Team members', 'Audit log', 'Custom domains', 'Email templates',
    'Database backups', 'Environment variables', 'Deployment config',
    'Rate limiting', 'Error tracking', 'Analytics', 'Feature flags', 'Access control',
  ][i],
}))
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">@construct-space/ui</p>
      <h1 class="text-3xl font-bold">Toast & Scroll</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">Live toast notifications and custom scroll areas from @construct-space/ui.</p>
    </div>

    <!-- Section 1: Live Toast Triggers -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Toast</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Click to trigger real toast notifications using useToast().</p>

      <div class="flex flex-wrap gap-3">
        <button
          class="px-4 py-2 rounded-lg text-sm font-medium text-white"
          style="background: #22c55e"
          @click="showToast('success', 'Saved successfully', 'Your changes have been saved.')"
        >
          Success
        </button>
        <button
          class="px-4 py-2 rounded-lg text-sm font-medium text-white"
          style="background: #ef4444"
          @click="showToast('error', 'Deploy failed', 'Build exited with code 1.')"
        >
          Error
        </button>
        <button
          class="px-4 py-2 rounded-lg text-sm font-medium text-white"
          style="background: #f59e0b"
          @click="showToast('warning', 'Disk space low', 'Less than 10% storage remaining.')"
        >
          Warning
        </button>
        <button
          class="px-4 py-2 rounded-lg text-sm font-medium text-white"
          :style="{ background: 'var(--c-accent)' }"
          @click="showToast('info', 'New update available', 'Refresh to update.')"
        >
          Info
        </button>
      </div>
    </section>

    <!-- Section 2: ScrollArea -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">ScrollArea</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Custom scrollable container from @construct-space/ui.</p>

      <CScrollArea class="rounded-lg max-w-sm" style="height: 200px; border: 1px solid var(--c-border); background: var(--c-card);">
        <div
          v-for="item in scrollItems"
          :key="item.id"
          class="flex items-center gap-3 px-4 py-2.5"
          :style="{ borderBottom: '1px solid var(--c-border)' }"
        >
          <span
            class="w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono shrink-0"
            :style="{ background: 'var(--c-surface)', color: 'var(--c-muted)' }"
          >
            {{ String(item.id).padStart(2, '0') }}
          </span>
          <span class="text-sm" :style="{ color: 'var(--c-fg)' }">{{ item.label }}</span>
        </div>
      </CScrollArea>
    </section>

    <SdkUsage :components="sdkComponents" />

    <!-- Toast container -->
    <CToast />
  </div>
</template>
