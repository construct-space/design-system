<script setup lang="ts">
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Patterns</p>
      <h1 class="text-3xl font-bold">Settings Page</h1>
    </div>
    <div class="space-y-6">
      <div class="p-6 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <h3 class="text-sm font-semibold mb-1">Profile</h3>
        <p class="text-xs mb-4" :style="{ color: 'var(--c-muted)' }">Manage your account information.</p>
        <div class="space-y-4">
          <div><label class="block text-xs font-medium mb-1">Display Name</label><input type="text" value="Flakerim" class="w-full max-w-sm px-3 py-2 rounded-lg text-sm border-none outline-none" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }"></div>
          <div><label class="block text-xs font-medium mb-1">Email</label><input type="email" value="flakerim@construct.space" class="w-full max-w-sm px-3 py-2 rounded-lg text-sm border-none outline-none" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }"></div>
        </div>
      </div>
      <div class="p-6 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <h3 class="text-sm font-semibold mb-1">Appearance</h3>
        <p class="text-xs mb-4" :style="{ color: 'var(--c-muted)' }">Customize the look and feel.</p>
        <div class="flex items-center justify-between">
          <div><p class="text-sm">Dark mode</p><p class="text-xs" :style="{ color: 'var(--c-muted)' }">Use dark theme by default</p></div>
          <div class="w-10 h-6 rounded-full relative cursor-pointer" :style="{ background: 'var(--c-accent)' }"><div class="absolute size-4 bg-white rounded-full top-1 right-1"></div></div>
        </div>
      </div>
      <div class="p-6 rounded-lg border border-red-500/30" :style="{ background: 'var(--c-card)' }">
        <h3 class="text-sm font-semibold text-red-500 mb-1">Danger Zone</h3>
        <p class="text-xs mb-4" :style="{ color: 'var(--c-muted)' }">Irreversible actions.</p>
        <button class="px-4 py-2 rounded-lg text-sm font-medium text-white bg-red-500">Delete Account</button>
      </div>
    </div>
  </div>
</template>
