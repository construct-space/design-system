<script setup lang="ts">
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Components</p>
      <h1 class="text-3xl font-bold">Feedback</h1>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Badges</p>
    <div class="flex flex-wrap gap-2 mb-8">
      <span class="px-2 py-0.5 rounded-full text-[10px] font-medium" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">Default</span>
      <span class="px-2 py-0.5 rounded-full text-[10px] font-medium" :style="{ background: 'color-mix(in srgb, var(--c-accent) 15%, transparent)', color: 'var(--c-accent)' }">Accent</span>
      <span class="px-2 py-0.5 rounded-full text-[10px] font-medium" :style="{ background: 'color-mix(in srgb, #22c55e 15%, transparent)', color: '#22c55e' }">Success</span>
      <span class="px-2 py-0.5 rounded-full text-[10px] font-medium" :style="{ background: 'color-mix(in srgb, #f59e0b 15%, transparent)', color: '#f59e0b' }">Warning</span>
      <span class="px-2 py-0.5 rounded-full text-[10px] font-medium" :style="{ background: 'color-mix(in srgb, #ef4444 15%, transparent)', color: '#ef4444' }">Danger</span>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Alerts</p>
    <div class="space-y-3 mb-8">
      <div v-for="a in [{label:'Info',color:'var(--c-accent)',msg:'This is an informational message.'},{label:'Success',color:'#22c55e',msg:'Operation completed successfully.'},{label:'Warning',color:'#f59e0b',msg:'Please review before continuing.'},{label:'Error',color:'#ef4444',msg:'Something went wrong. Please try again.'}]" :key="a.label" class="flex gap-3 p-4 rounded-lg border-l-4" :style="{ borderColor: a.color, background: 'var(--c-card)' }">
        <div class="size-2 rounded-full mt-1 shrink-0" :style="{ background: a.color }"></div>
        <div>
          <p class="text-xs font-semibold mb-0.5" :style="{ color: a.color }">{{ a.label }}</p>
          <p class="text-xs" :style="{ color: 'var(--c-muted)' }">{{ a.msg }}</p>
        </div>
      </div>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Progress</p>
    <div class="space-y-3 mb-8 max-w-md">
      <div>
        <div class="flex justify-between text-[10px] mb-1"><span>Upload</span><span :style="{ color: 'var(--c-muted)' }">72%</span></div>
        <div class="h-2 rounded-full" :style="{ background: 'var(--c-input)' }"><div class="h-2 rounded-full" style="width:72%" :style="{ background: 'var(--c-accent)' }"></div></div>
      </div>
      <div>
        <div class="flex justify-between text-[10px] mb-1"><span>Build</span><span :style="{ color: 'var(--c-muted)' }">100%</span></div>
        <div class="h-2 rounded-full" :style="{ background: 'var(--c-input)' }"><div class="h-2 rounded-full" style="width:100%;background:#22c55e"></div></div>
      </div>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Empty State</p>
    <div class="flex flex-col items-center justify-center p-10 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
      <div class="size-12 rounded-full flex items-center justify-center mb-3" :style="{ background: 'var(--c-input)' }">
        <svg class="size-6" :style="{ color: 'var(--c-muted)' }" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 9v3m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      </div>
      <p class="text-sm font-medium mb-1">No results found</p>
      <p class="text-xs mb-4" :style="{ color: 'var(--c-muted)' }">Try adjusting your search or filters.</p>
      <button class="px-4 py-2 rounded-lg text-sm font-medium" :style="{ background: 'var(--c-accent)', color: 'var(--c-accent-fg)' }">Clear filters</button>
    </div>
  </div>
</template>
