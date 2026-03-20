<script setup lang="ts">
import SdkUsage from '../components/SdkUsage.vue'

const sdkComponents = [
  { name: 'Tooltip', import: 'Tooltip', usage: `<Tooltip text="Copy to clipboard">\n  <Button icon="i-lucide-copy" variant="ghost" />\n</Tooltip>` },
  { name: 'Avatar', import: 'Avatar', usage: `<Avatar src="/avatar.jpg" alt="User" size="md" />\n<Avatar fallback="FR" size="sm" />` },
  { name: 'Icon', import: 'Icon', usage: `<Icon name="i-lucide-star" class="size-5 text-yellow-400" />` },
]
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Components</p>
      <h1 class="text-3xl font-bold">Data Display</h1>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Table</p>
    <div class="rounded-lg border overflow-hidden mb-8" :style="{ borderColor: 'var(--c-border)' }">
      <table class="w-full text-sm">
        <thead><tr :style="{ background: 'var(--c-surface)' }"><th class="text-left px-4 py-2 text-xs font-medium" :style="{ color: 'var(--c-muted)' }">Name</th><th class="text-left px-4 py-2 text-xs font-medium" :style="{ color: 'var(--c-muted)' }">Status</th><th class="text-right px-4 py-2 text-xs font-medium" :style="{ color: 'var(--c-muted)' }">Value</th></tr></thead>
        <tbody>
          <tr v-for="row in [{name:'Alpha',status:'Active',color:'#22c55e',val:'$1,200'},{name:'Beta',status:'Pending',color:'#f59e0b',val:'$840'},{name:'Gamma',status:'Error',color:'#ef4444',val:'$2,100'},{name:'Delta',status:'Active',color:'#22c55e',val:'$960'}]" :key="row.name" class="border-t" :style="{ borderColor: 'var(--c-border)' }">
            <td class="px-4 py-3">{{ row.name }}</td>
            <td class="px-4 py-3"><span class="px-2 py-0.5 rounded-full text-[10px] font-medium" :style="{ background: `color-mix(in srgb, ${row.color} 15%, transparent)`, color: row.color }">{{ row.status }}</span></td>
            <td class="px-4 py-3 text-right font-mono">{{ row.val }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Key-Value</p>
    <div class="rounded-lg border divide-y mb-8" :style="{ borderColor: 'var(--c-border)' }">
      <div v-for="kv in [{k:'Version',v:'0.3.7'},{k:'Environment',v:'Production'},{k:'Region',v:'us-east-1'},{k:'Last Deploy',v:'2 hours ago'}]" :key="kv.k" class="flex justify-between px-4 py-3 text-sm" :style="{ borderColor: 'var(--c-border)' }">
        <span :style="{ color: 'var(--c-muted)' }">{{ kv.k }}</span>
        <span class="font-mono">{{ kv.v }}</span>
      </div>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Timeline</p>
    <div class="space-y-0">
      <div v-for="(ev, i) in [{t:'Now',msg:'Deployed to production'},{t:'2h ago',msg:'Build completed'},{t:'3h ago',msg:'PR merged'},{t:'5h ago',msg:'Code review approved'}]" :key="i" class="flex gap-3">
        <div class="flex flex-col items-center">
          <div class="size-2 rounded-full mt-1.5 shrink-0" :style="{ background: i === 0 ? 'var(--c-accent)' : 'var(--c-muted)' }"></div>
          <div v-if="i < 3" class="w-px flex-1 my-1" :style="{ background: 'var(--c-border)' }"></div>
        </div>
        <div class="pb-4">
          <p class="text-sm">{{ ev.msg }}</p>
          <p class="text-[10px]" :style="{ color: 'var(--c-muted)' }">{{ ev.t }}</p>
        </div>
      </div>
    </div>

    <SdkUsage :components="sdkComponents" />
  </div>
</template>
