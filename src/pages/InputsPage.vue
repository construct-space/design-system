<script setup lang="ts">
import SdkUsage from '../components/SdkUsage.vue'

const sdkComponents = [
  { name: 'Input', import: 'Input', usage: `<Input v-model="name" placeholder="Name" icon="i-lucide-user" />\n<Input type="password" size="sm" variant="soft" />` },
  { name: 'Textarea', import: 'Textarea', usage: `<Textarea v-model="bio" placeholder="Write..." rows="4" autoresize />` },
  { name: 'Checkbox', import: 'Checkbox', usage: `<Checkbox v-model="agreed" label="I agree to terms" />` },
  { name: 'FormField', import: 'FormField', usage: `<FormField label="Email" name="email" error="Required">\n  <Input v-model="email" />\n</FormField>` },
]
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Components</p>
      <h1 class="text-3xl font-bold">Inputs</h1>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Text Inputs</p>
    <div class="space-y-3 mb-8 max-w-md">
      <input type="text" placeholder="Default" class="w-full px-3 py-2 rounded-lg text-sm border-none outline-none" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
      <input type="password" placeholder="Password" class="w-full px-3 py-2 rounded-lg text-sm border-none outline-none" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
      <input type="text" placeholder="Search..." class="w-full px-3 py-2 rounded-lg text-sm border-none outline-none" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
      <input type="text" value="Error state" class="w-full px-3 py-2 rounded-lg text-sm outline-none border-2" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)', borderColor: '#ef4444' }">
      <input type="text" placeholder="Disabled" disabled class="w-full px-3 py-2 rounded-lg text-sm border-none outline-none opacity-40" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Textarea</p>
    <textarea placeholder="Write something..." rows="3" class="w-full max-w-md px-3 py-2 rounded-lg text-sm border-none outline-none resize-y mb-8" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }"></textarea>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Controls</p>
    <div class="space-y-3 mb-8">
      <label class="flex items-center gap-2 text-sm cursor-pointer"><input type="checkbox" checked class="accent-[var(--c-accent)]"> Checkbox enabled</label>
      <label class="flex items-center gap-2 text-sm cursor-pointer"><input type="checkbox" class="accent-[var(--c-accent)]"> Checkbox unchecked</label>
      <label class="flex items-center gap-2 text-sm cursor-pointer"><input type="radio" name="r" checked class="accent-[var(--c-accent)]"> Radio A</label>
      <label class="flex items-center gap-2 text-sm cursor-pointer"><input type="radio" name="r" class="accent-[var(--c-accent)]"> Radio B</label>
    </div>
    <p class="text-[10px] uppercase tracking-widest mb-3" :style="{ color: 'var(--c-muted)' }">Form Pattern</p>
    <div class="max-w-md p-6 rounded-lg border space-y-4" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
      <div>
        <label class="block text-xs font-medium mb-1">Name</label>
        <input type="text" placeholder="Your name" class="w-full px-3 py-2 rounded-lg text-sm border-none outline-none" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
      </div>
      <div>
        <label class="block text-xs font-medium mb-1">Email</label>
        <input type="email" placeholder="you@example.com" class="w-full px-3 py-2 rounded-lg text-sm border-none outline-none" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
        <p class="text-[10px] mt-1" :style="{ color: 'var(--c-muted)' }">We'll never share your email.</p>
      </div>
      <div class="flex gap-3 pt-2">
        <button class="px-4 py-2 rounded-lg text-sm font-medium" :style="{ background: 'var(--c-accent)', color: 'var(--c-accent-fg)' }">Submit</button>
        <button class="px-4 py-2 rounded-lg text-sm font-medium" :style="{ color: 'var(--c-muted)' }">Cancel</button>
      </div>
    </div>
    <SdkUsage :components="sdkComponents" />
  </div>
</template>
