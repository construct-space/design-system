<script setup lang="ts">
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Foundation</p>
      <h1 class="text-3xl font-bold">Typography</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">Rubik + system monospace.</p>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Type Scale</p>
    <div class="space-y-4 mb-8 p-6 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
      <div><span class="text-3xl font-bold">Heading 1</span> <span class="text-[10px] font-mono ml-2" :style="{ color: 'var(--c-muted)' }">3xl / bold</span></div>
      <div><span class="text-2xl font-bold">Heading 2</span> <span class="text-[10px] font-mono ml-2" :style="{ color: 'var(--c-muted)' }">2xl / bold</span></div>
      <div><span class="text-lg font-semibold">Heading 3</span> <span class="text-[10px] font-mono ml-2" :style="{ color: 'var(--c-muted)' }">lg / semibold</span></div>
      <div><span class="text-sm">Body text — the default size for content.</span> <span class="text-[10px] font-mono ml-2" :style="{ color: 'var(--c-muted)' }">sm</span></div>
      <div><span class="text-xs" :style="{ color: 'var(--c-muted)' }">Small / caption text</span> <span class="text-[10px] font-mono ml-2" :style="{ color: 'var(--c-muted)' }">xs</span></div>
      <div><span class="text-[10px] uppercase tracking-widest" :style="{ color: 'var(--c-muted)' }">Label / overline</span> <span class="text-[10px] font-mono ml-2" :style="{ color: 'var(--c-muted)' }">10px / uppercase</span></div>
      <div><code class="text-sm font-mono px-1.5 py-0.5 rounded" :style="{ background: 'var(--c-input)' }">inline code</code> <span class="text-[10px] font-mono ml-2" :style="{ color: 'var(--c-muted)' }">mono / sm</span></div>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Text Colors</p>
    <div class="space-y-2 mb-8">
      <p class="text-sm">Default foreground text</p>
      <p class="text-sm" :style="{ color: 'var(--c-muted)' }">Muted secondary text</p>
      <p class="text-sm" :style="{ color: 'var(--c-accent)' }">Accent-colored text</p>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Weights</p>
    <div class="space-y-2">
      <p class="text-sm font-light">Light (300)</p>
      <p class="text-sm font-normal">Regular (400)</p>
      <p class="text-sm font-medium">Medium (500)</p>
      <p class="text-sm font-semibold">Semibold (600)</p>
      <p class="text-sm font-bold">Bold (700)</p>
    </div>
  </div>
</template>
