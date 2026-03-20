<script setup lang="ts">
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Foundation</p>
      <h1 class="text-3xl font-bold">Colors</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">Semantic tokens that adapt to every theme.</p>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Semantic Tokens</p>
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
      <div v-for="token in ['bg','fg','muted','accent','accent-fg','border','surface','card','input']" :key="token" class="p-3 rounded-lg border" :style="{ borderColor: 'var(--c-border)' }">
        <div class="h-12 rounded-md mb-2 border" :style="{ background: `var(--c-${token})`, borderColor: 'var(--c-border)' }"></div>
        <p class="text-xs font-mono font-medium">{{ token }}</p>
        <p class="text-[10px] font-mono" :style="{ color: 'var(--c-muted)' }">--c-{{ token }}</p>
      </div>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Status Colors</p>
    <div class="flex flex-wrap gap-3 mb-8">
      <div v-for="s in [{name:'Success',color:'#22c55e'},{name:'Warning',color:'#f59e0b'},{name:'Error',color:'#ef4444'}]" :key="s.name" class="flex items-center gap-2 p-3 rounded-lg border" :style="{ borderColor: 'var(--c-border)' }">
        <div class="size-8 rounded-md" :style="{ background: s.color }"></div>
        <div>
          <p class="text-xs font-medium">{{ s.name }}</p>
          <p class="text-[10px] font-mono" :style="{ color: 'var(--c-muted)' }">{{ s.color }}</p>
        </div>
      </div>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Space Colors</p>
    <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2">
      <div v-for="sp in [{n:'Architect',c:'#FF2D55'},{n:'Code',c:'#34C759'},{n:'Vibe',c:'#AF52DE'},{n:'Design',c:'#FF9500'},{n:'Git',c:'#FF3B30'},{n:'Terminal',c:'#30D158'},{n:'Tasks',c:'#007AFF'},{n:'Chat',c:'#5856D6'},{n:'AI',c:'#BF5AF2'},{n:'Docs',c:'#64D2FF'},{n:'Notes',c:'#FFD60A'},{n:'Calendar',c:'#FF6482'}]" :key="sp.n" class="text-center">
        <div class="h-8 rounded-md mb-1" :style="{ background: sp.c }"></div>
        <p class="text-[10px]" :style="{ color: 'var(--c-muted)' }">{{ sp.n }}</p>
      </div>
    </div>
  </div>
</template>
