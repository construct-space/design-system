<script setup lang="ts">
import { CButton } from '@construct-space/ui'
import SdkUsage from '../components/SdkUsage.vue'

const sdkComponents = [
  { name: 'CButton', import: 'CButton', source: 'ui', usage: `<CButton label="Save" variant="solid" color="primary" />\n<CButton icon="i-lucide-plus" variant="ghost" size="xs" />\n<CButton label="Delete" variant="soft" color="error" loading />` },
]
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">@construct-space/ui</p>
      <h1 class="text-3xl font-bold">Buttons</h1>
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Live Components</p>
    <div class="flex flex-wrap gap-3 mb-6">
      <CButton label="Primary" variant="solid" />
      <CButton label="Secondary" variant="soft" />
      <CButton label="Outline" variant="outline" />
      <CButton label="Ghost" variant="ghost" />
      <CButton label="Danger" variant="solid" color="error" />
      <CButton label="Disabled" variant="solid" disabled />
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-2" :style="{ color: 'var(--c-muted)' }">Sizes</p>
    <div class="flex items-center gap-3 mb-6">
      <CButton label="Extra Small" size="xs" variant="solid" />
      <CButton label="Small" size="sm" variant="solid" />
      <CButton label="Default" variant="solid" />
      <CButton label="Large" size="lg" variant="solid" />
    </div>

    <p class="text-[10px] uppercase tracking-widest mb-2" :style="{ color: 'var(--c-muted)' }">With Icons</p>
    <div class="flex items-center gap-3 mb-6">
      <CButton label="Add" icon="i-lucide-plus" variant="solid" />
      <CButton label="Settings" icon="i-lucide-settings" variant="outline" />
      <CButton icon="i-lucide-search" variant="ghost" size="sm" />
      <CButton label="Loading" variant="solid" loading />
    </div>

    <SdkUsage :components="sdkComponents" />
  </div>
</template>
