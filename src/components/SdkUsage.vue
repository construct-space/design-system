<script setup lang="ts">
export interface SdkComponent {
  name: string
  import: string
  usage: string
  source?: 'sdk' | 'ui'
}

defineProps<{
  components: SdkComponent[]
}>()
</script>

<template>
  <section class="mt-12 pt-8 border-t" :style="{ borderColor: 'var(--c-border)' }">
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">SDK Usage</p>
    <div class="space-y-4">
      <div v-for="c in components" :key="c.name">
        <p class="text-xs font-semibold mb-2">{{ c.name }}</p>
        <div class="p-3 rounded-lg font-mono text-[11px] leading-relaxed" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
          <p><span :style="{ color: 'var(--c-accent)' }">import</span> { {{ c.import }} } <span :style="{ color: 'var(--c-accent)' }">from</span> <span :style="{ color: 'var(--c-muted)' }">'@construct-space/{{ c.source || 'ui' }}'</span></p>
        </div>
        <div class="mt-2 p-3 rounded-lg font-mono text-[11px] leading-relaxed whitespace-pre" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">{{ c.usage }}</div>
      </div>
    </div>
  </section>
</template>
