<script setup lang="ts">
defineProps<{
  pages: { id: string; label: string; group: string }[]
  active: string
}>()
defineEmits<{ navigate: [id: string] }>()

const logo = `<svg width="24" height="24" viewBox="0 0 533 533" fill="currentColor"><path d="M266.5 410.156C230.912 410.156 199.106 402.203 171.081 386.297C143.056 370.39 121.036 348.519 105.022 320.684C89.0072 292.848 81 261.256 81 225.909C81 190.12 89.0072 158.308 105.022 130.472C121.036 102.636 143.056 80.7655 171.081 64.8593C199.106 48.9531 230.912 41 266.5 41C302.087 41 333.671 48.9531 361.252 64.8593C389.277 80.7655 411.297 102.636 427.311 130.472C443.326 158.308 451.555 190.12 452 225.909C452 261.256 443.77 292.848 427.311 320.684C411.297 348.519 389.277 370.39 361.252 386.297C333.671 402.203 302.087 410.156 266.5 410.156ZM266.5 363.763C292.301 363.763 315.433 357.798 335.896 345.868C356.359 333.939 372.373 317.591 383.939 296.824C395.505 276.058 401.288 252.42 401.288 225.909C401.288 199.399 395.505 175.761 383.939 154.994C372.373 133.786 356.359 117.217 335.896 105.287C315.433 93.3579 292.301 87.393 266.5 87.393C240.699 87.393 217.567 93.3579 197.104 105.287C176.641 117.217 160.405 133.786 148.394 154.994C136.828 175.761 131.045 199.399 131.045 225.909C131.045 252.42 136.828 276.058 148.394 296.824C160.405 317.591 176.641 333.939 197.104 345.868C217.567 357.798 240.699 363.763 266.5 363.763Z"/><path d="M378.22 451.578C393.077 451.578 405.121 460.85 405.121 472.289C405.121 483.727 393.077 493 378.22 493H160.945C146.089 493 134.044 483.727 134.044 472.289C134.044 460.85 146.089 451.578 160.945 451.578H378.22Z"/></svg>`

const groups = [...new Set(pages.map(p => p.group))]
</script>

<template>
  <nav class="w-56 shrink-0 border-r flex flex-col fixed top-0 left-0 bottom-0 overflow-y-auto"
    :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }">
    <div class="px-5 py-5 flex items-center gap-2">
      <span :style="{ color: 'var(--c-accent)' }" v-html="logo"></span>
      <span class="text-sm font-bold tracking-wider">
        <span :style="{ color: 'var(--c-accent)' }">CONSTRUCT</span><span>:DS</span>
      </span>
    </div>

    <div v-for="group in groups" :key="group" class="px-3 mb-2">
      <div class="px-2 py-1 text-[10px] uppercase tracking-widest" :style="{ color: 'var(--c-muted)' }">{{ group }}</div>
      <button
        v-for="page in pages.filter(p => p.group === group)" :key="page.id"
        class="block w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors"
        :style="{
          color: active === page.id ? 'var(--c-accent)' : 'var(--c-muted)',
          background: active === page.id ? 'color-mix(in srgb, var(--c-accent) 10%, transparent)' : 'transparent',
        }"
        @click="$emit('navigate', page.id)"
      >
        {{ page.label }}
      </button>
    </div>

    <div class="mt-auto px-5 py-4 text-xs" :style="{ color: 'var(--c-muted)' }">v0.5.0</div>
  </nav>
</template>
