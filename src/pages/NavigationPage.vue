<script setup lang="ts">
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Components</p>
      <h1 class="text-3xl font-bold">Navigation</h1>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Tabs — Underline</p>
    <div class="flex gap-4 border-b mb-8" :style="{ borderColor: 'var(--c-border)' }">
      <button v-for="(tab, i) in ['Overview','Activity','Settings']" :key="tab" class="pb-2 text-sm border-b-2 -mb-px" :style="{ borderColor: i === 0 ? 'var(--c-accent)' : 'transparent', color: i === 0 ? 'var(--c-accent)' : 'var(--c-muted)' }">{{ tab }}</button>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Tabs — Pill</p>
    <div class="inline-flex gap-1 p-1 rounded-lg mb-8" :style="{ background: 'var(--c-input)' }">
      <button v-for="(tab, i) in ['All','Active','Archived']" :key="tab" class="px-3 py-1.5 rounded-md text-sm" :style="{ background: i === 0 ? 'var(--c-accent)' : 'transparent', color: i === 0 ? 'var(--c-accent-fg)' : 'var(--c-muted)' }">{{ tab }}</button>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Breadcrumbs</p>
    <div class="flex items-center gap-2 text-sm mb-8">
      <span :style="{ color: 'var(--c-muted)' }">Home</span>
      <span :style="{ color: 'var(--c-muted)' }">/</span>
      <span :style="{ color: 'var(--c-muted)' }">Projects</span>
      <span :style="{ color: 'var(--c-muted)' }">/</span>
      <span>Construct</span>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Pagination</p>
    <div class="flex items-center gap-1">
      <button class="px-3 py-1.5 rounded-md text-sm" :style="{ color: 'var(--c-muted)' }">Prev</button>
      <button v-for="n in 5" :key="n" class="size-8 rounded-md text-sm flex items-center justify-center" :style="{ background: n === 2 ? 'var(--c-accent)' : 'transparent', color: n === 2 ? 'var(--c-accent-fg)' : 'var(--c-muted)' }">{{ n }}</button>
      <button class="px-3 py-1.5 rounded-md text-sm">Next</button>
    </div>
  </div>
</template>
