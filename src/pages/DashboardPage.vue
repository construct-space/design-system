<script setup lang="ts">
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Patterns</p>
      <h1 class="text-3xl font-bold">Dashboard</h1>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
      <div v-for="st in [{label:'Spaces',value:'24',delta:'+3'},{label:'Members',value:'128',delta:'+12'},{label:'Builds',value:'1,847',delta:'+89'},{label:'Uptime',value:'99.9%',delta:''}]" :key="st.label" class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-muted)' }">{{ st.label }}</p>
        <div class="flex items-baseline gap-2">
          <p class="text-2xl font-bold">{{ st.value }}</p>
          <span v-if="st.delta" class="text-[10px] font-medium" style="color:#22c55e">{{ st.delta }}</span>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="p-5 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <p class="text-xs font-semibold mb-3">Recent Activity</p>
        <div class="space-y-3">
          <div v-for="(ev, i) in [{user:'Alice',action:'deployed v0.3.7',time:'2m ago'},{user:'Bob',action:'merged PR #42',time:'1h ago'},{user:'Carol',action:'created space Design',time:'3h ago'}]" :key="i" class="flex items-center justify-between text-sm">
            <div class="flex items-center gap-2">
              <div class="size-6 rounded-full flex items-center justify-center text-[10px] font-bold" :style="{ background: 'var(--c-input)' }">{{ ev.user[0] }}</div>
              <span><span class="font-medium">{{ ev.user }}</span> <span :style="{ color: 'var(--c-muted)' }">{{ ev.action }}</span></span>
            </div>
            <span class="text-[10px] shrink-0" :style="{ color: 'var(--c-muted)' }">{{ ev.time }}</span>
          </div>
        </div>
      </div>
      <div class="p-5 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <p class="text-xs font-semibold mb-3">System Status</p>
        <div class="space-y-3">
          <div v-for="s in [{name:'API',status:'Operational',color:'#22c55e'},{name:'Database',status:'Operational',color:'#22c55e'},{name:'CDN',status:'Degraded',color:'#f59e0b'},{name:'Workers',status:'Operational',color:'#22c55e'}]" :key="s.name" class="flex items-center justify-between text-sm">
            <span>{{ s.name }}</span>
            <span class="flex items-center gap-1.5 text-xs"><span class="size-1.5 rounded-full" :style="{ background: s.color }"></span>{{ s.status }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
