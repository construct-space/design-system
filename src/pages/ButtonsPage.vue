<script setup lang="ts">
</script>

<template>
  <div>
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
  </div>
</template>
