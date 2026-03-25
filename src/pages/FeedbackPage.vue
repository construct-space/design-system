<script setup lang="ts">
import { CBadge, CAlert, CProgress, CEmpty, CButton } from '@construct-space/ui'
import SdkUsage from '../components/SdkUsage.vue'

const sdkComponents = [
  { name: 'CBadge', import: 'CBadge', source: 'ui', usage: `<CBadge label="Active" color="success" variant="soft" />\n<CBadge label="Error" color="error" size="xs" />` },
  { name: 'CAlert', import: 'CAlert', source: 'ui', usage: `<CAlert title="Success" description="Operation completed." color="success" />\n<CAlert title="Error" description="Something went wrong." color="error" closable />` },
  { name: 'CProgress', import: 'CProgress', source: 'ui', usage: `<CProgress :value="72" :max="100" color="primary" />\n<CProgress indeterminate />` },
  { name: 'CEmpty', import: 'CEmpty', source: 'ui', usage: `<CEmpty icon="i-lucide-inbox" title="No results" description="Try adjusting your search." />` },
]
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">@construct-space/ui</p>
      <h1 class="text-3xl font-bold">Feedback</h1>
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Badges</p>
    <div class="flex flex-wrap gap-2 mb-8">
      <CBadge label="Default" />
      <CBadge label="Accent" color="primary" variant="soft" />
      <CBadge label="Success" color="success" variant="soft" />
      <CBadge label="Warning" color="warning" variant="soft" />
      <CBadge label="Error" color="error" variant="soft" />
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Alerts</p>
    <div class="space-y-3 mb-8">
      <CAlert title="Info" description="This is an informational message." color="info" />
      <CAlert title="Success" description="Operation completed successfully." color="success" />
      <CAlert title="Warning" description="Please review before continuing." color="warning" />
      <CAlert title="Error" description="Something went wrong. Please try again." color="error" />
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Progress</p>
    <div class="space-y-3 mb-8 max-w-md">
      <CProgress :value="72" :max="100" label="Upload" />
      <CProgress :value="100" :max="100" label="Build" color="success" />
      <CProgress indeterminate label="Processing..." />
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Empty State</p>
    <div class="max-w-sm">
      <CEmpty icon="i-lucide-search" title="No results found" description="Try adjusting your search or filters." />
    </div>

    <SdkUsage :components="sdkComponents" />
  </div>
</template>
