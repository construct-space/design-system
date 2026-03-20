<script setup lang="ts">
const toasts = [
  { type: 'info', color: 'var(--c-accent)', title: 'New update available', description: 'A new version has been published. Refresh to update.' },
  { type: 'success', color: '#22c55e', title: 'Saved successfully', description: 'Your changes have been saved to the database.' },
  { type: 'warning', color: '#f59e0b', title: 'Disk space low', description: 'You have less than 10% storage remaining.' },
  { type: 'error', color: '#ef4444', title: 'Deploy failed', description: 'Build exited with code 1. Check logs for details.' },
]

const positions = [
  { label: 'top-left', top: '8px', left: '8px', right: 'auto', bottom: 'auto' },
  { label: 'top-right', top: '8px', right: '8px', left: 'auto', bottom: 'auto' },
  { label: 'bottom-left', bottom: '8px', left: '8px', top: 'auto', right: 'auto' },
  { label: 'bottom-right', bottom: '8px', right: '8px', top: 'auto', left: 'auto' },
]

import SdkUsage from '../components/SdkUsage.vue'

const sdkComponents = [
  { name: 'useToast', import: 'useToast', usage: `const { toast } = useToast()\n\ntoast.success('Saved', 'Your changes were saved.')\ntoast.error('Failed', 'Could not connect.')\ntoast.warning('Low disk', 'Less than 1GB remaining.')\ntoast.info('Update', 'New version available.')` },
  { name: 'ScrollArea', import: 'ScrollArea', usage: `<ScrollArea class="h-64">\n  <!-- long content -->\n</ScrollArea>` },
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
    <!-- Page Header -->
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Components</p>
      <h1 class="text-3xl font-bold">Toast & Scroll</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">Toast notifications and custom scroll areas.</p>
    </div>

    <!-- Section 1: Toast -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Toast</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Non-intrusive notifications for status updates and alerts.</p>

      <div class="flex flex-col gap-3 max-w-md">
        <div
          v-for="toast in toasts"
          :key="toast.type"
          class="rounded-lg border-l-4 flex items-start gap-3 px-4 py-3"
          :style="{
            background: 'var(--c-card)',
            border: '1px solid var(--c-border)',
            borderLeft: `4px solid ${toast.color}`,
          }"
        >
          <!-- Color dot -->
          <span
            class="mt-1 w-2 h-2 rounded-full shrink-0"
            :style="{ background: toast.color }"
          />
          <!-- Content -->
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium" :style="{ color: 'var(--c-fg)' }">{{ toast.title }}</p>
            <p class="text-xs mt-0.5" :style="{ color: 'var(--c-muted)' }">{{ toast.description }}</p>
          </div>
          <!-- Close button -->
          <button
            class="shrink-0 w-6 h-6 flex items-center justify-center rounded hover:opacity-70 transition-opacity"
            :style="{ color: 'var(--c-muted)' }"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
              <line x1="3" y1="3" x2="11" y2="11" />
              <line x1="11" y1="3" x2="3" y2="11" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Section 2: Toast Position -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Toast Position</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Configure where toast notifications appear on screen.</p>

      <div
        class="relative rounded-lg w-72 h-44"
        :style="{
          border: '1px solid var(--c-border)',
          background: 'var(--c-surface)',
        }"
      >
        <!-- Screen label -->
        <span
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] uppercase tracking-widest"
          :style="{ color: 'var(--c-muted)' }"
        >
          viewport
        </span>

        <!-- Position indicators -->
        <div
          v-for="pos in positions"
          :key="pos.label"
          class="absolute flex flex-col items-center gap-1"
          :style="{
            top: pos.top,
            right: pos.right,
            bottom: pos.bottom,
            left: pos.left,
          }"
        >
          <span
            class="w-2.5 h-2.5 rounded-sm"
            :style="{
              background: pos.label === 'top-right' ? 'var(--c-accent)' : 'var(--c-muted)',
              opacity: pos.label === 'top-right' ? 1 : 0.5,
            }"
          />
          <span
            class="text-[9px] whitespace-nowrap"
            :style="{ color: pos.label === 'top-right' ? 'var(--c-accent)' : 'var(--c-muted)' }"
          >
            {{ pos.label }}{{ pos.label === 'top-right' ? ' (default)' : '' }}
          </span>
        </div>
      </div>
    </section>

    <!-- Section 3: ScrollArea -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">ScrollArea</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Custom scrollable container with a styled thin scrollbar.</p>

      <div
        class="scroll-area rounded-lg max-w-sm h-[200px] overflow-y-auto"
        :style="{
          border: '1px solid var(--c-border)',
          background: 'var(--c-card)',
        }"
      >
        <div
          v-for="item in scrollItems"
          :key="item.id"
          class="flex items-center gap-3 px-4 py-2.5 transition-colors"
          :style="{
            borderBottom: '1px solid var(--c-border)',
          }"
        >
          <span
            class="w-6 h-6 rounded flex items-center justify-center text-[10px] font-mono shrink-0"
            :style="{ background: 'var(--c-surface)', color: 'var(--c-muted)' }"
          >
            {{ String(item.id).padStart(2, '0') }}
          </span>
          <span class="text-sm" :style="{ color: 'var(--c-fg)' }">{{ item.label }}</span>
        </div>
      </div>
    </section>
    <SdkUsage :components="sdkComponents" />
  </div>
</template>

<style scoped>
/* Custom thin scrollbar for ScrollArea */
.scroll-area::-webkit-scrollbar {
  width: 6px;
}

.scroll-area::-webkit-scrollbar-track {
  background: var(--c-surface);
  border-radius: 3px;
}

.scroll-area::-webkit-scrollbar-thumb {
  background: var(--c-border);
  border-radius: 3px;
}

.scroll-area::-webkit-scrollbar-thumb:hover {
  background: var(--c-muted);
}

/* Firefox */
.scroll-area {
  scrollbar-width: thin;
  scrollbar-color: var(--c-border) var(--c-surface);
}
</style>
