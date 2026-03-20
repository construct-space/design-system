<script setup lang="ts">
import SdkUsage from '../components/SdkUsage.vue'

const sdkComponents = [
  { name: 'Card', import: 'Card', usage: `<Card title="Stats" description="Monthly overview">\n  <template #body>Card content</template>\n</Card>` },
  { name: 'DashboardPanel', import: 'DashboardPanel', usage: `<DashboardPanel :grow="true" :resizable="true">\n  <template #header>Panel Title</template>\n  <template #body>Content</template>\n</DashboardPanel>` },
]
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Components</p>
      <h1 class="text-3xl font-bold">Cards</h1>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Default</p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
      <div class="p-5 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <h3 class="text-sm font-semibold mb-1">Card Title</h3>
        <p class="text-xs" :style="{ color: 'var(--c-muted)' }">Description text that explains what this card is about.</p>
      </div>
      <div class="p-5 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <h3 class="text-sm font-semibold mb-1">Another Card</h3>
        <p class="text-xs" :style="{ color: 'var(--c-muted)' }">Cards use --c-card for background and --c-border for edges.</p>
      </div>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Accent Border</p>
    <div class="space-y-3 mb-8">
      <div v-for="s in [{label:'Active',color:'var(--c-accent)'},{label:'Success',color:'#22c55e'},{label:'Warning',color:'#f59e0b'},{label:'Error',color:'#ef4444'}]" :key="s.label" class="flex items-center gap-4 p-4 rounded-lg border-l-4" :style="{ borderColor: s.color, background: 'var(--c-card)' }">
        <div class="size-2 rounded-full" :style="{ background: s.color }"></div>
        <div>
          <p class="text-sm font-medium">{{ s.label }}</p>
          <p class="text-xs" :style="{ color: 'var(--c-muted)' }">Left accent border card variant.</p>
        </div>
      </div>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Stat Cards</p>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
      <div v-for="st in [{label:'Users',value:'12,847'},{label:'Revenue',value:'$48.2k'},{label:'Uptime',value:'99.9%'},{label:'Latency',value:'42ms'}]" :key="st.label" class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-muted)' }">{{ st.label }}</p>
        <p class="text-2xl font-bold">{{ st.value }}</p>
      </div>
    </div>
    <SdkUsage :components="sdkComponents" />
  </div>
</template>
