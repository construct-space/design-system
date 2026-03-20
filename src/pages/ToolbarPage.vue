<script setup lang="ts">
import { ref } from 'vue'

const toolbarRotated = ref(false)

const toolButtons = {
  tools: [
    { title: 'Pointer', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/>' },
    { title: 'Move', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/>' },
    { title: 'Hand', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"/>' },
  ],
  draw: [
    { title: 'Pen', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>' },
    { title: 'Text', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16"/>' },
    { title: 'Shape', path: '<rect x="3" y="3" width="18" height="18" rx="2"/>' },
  ],
  history: [
    { title: 'Undo', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 10h10a5 5 0 015 5v2M3 10l4-4m-4 4l4 4"/>' },
    { title: 'Redo', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 10H11a5 5 0 00-5 5v2m15-7l-4-4m4 4l-4 4"/>' },
  ],
}

const spaceActions = [
  { title: 'Terminal', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>' },
  { title: 'Git', path: '<circle cx="12" cy="12" r="3"/><path stroke-linecap="round" d="M12 3v6m0 6v6"/>' },
  { title: 'Settings', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/>' },
]

const dropdownItems = [
  { label: 'Edit', danger: false, path: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>' },
  { label: 'Duplicate', danger: false, path: '<path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>' },
  { label: 'Archive', danger: false, path: '<path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>' },
  { label: 'Delete', danger: true, path: '<path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>' },
]
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Patterns</p>
      <h1 class="text-3xl font-bold">Toolbar</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">3D rotating toolbar with breadcrumb, teleported actions, and page transitions.</p>
    </div>

    <!-- 3D Rotation -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">3D Rotating Toolbar</h2>
      <p class="text-sm mb-2" :style="{ color: 'var(--c-muted)' }">When navigating between pages, the toolbar rotates on the X-axis to reveal the next page's breadcrumb and actions. Click to toggle.</p>
      <button
        class="px-3 py-1.5 rounded-lg text-xs font-medium mb-4 border"
        :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)', color: 'var(--c-fg)' }"
        @click="toolbarRotated = !toolbarRotated"
      >{{ toolbarRotated ? 'Back to Overview' : 'Navigate to Editor →' }}</button>

      <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <div class="relative h-10" style="perspective: 1000px">
          <div class="w-full h-10 relative transition-transform duration-500 ease-out" :style="{ transformStyle: 'preserve-3d', transform: `rotateX(${toolbarRotated ? -90 : 0}deg)` }">
            <!-- Front: Overview -->
            <div class="absolute inset-0 w-full h-10 px-4 flex items-center gap-2 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }" style="backface-visibility: hidden; transform: translateZ(20px)">
              <span class="text-xs" :style="{ color: 'var(--c-muted)' }">Code</span>
              <svg class="size-3" :style="{ color: 'var(--c-muted)' }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              <span class="text-xs font-medium">Overview</span>
              <div class="flex-1"></div>
              <div class="w-px h-4" :style="{ background: 'var(--c-border)' }"></div>
              <div class="flex gap-1">
                <div v-for="a in ['file-plus','play','search']" :key="a" class="size-7 flex items-center justify-center rounded-md" :style="{ color: 'var(--c-muted)' }">
                  <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                </div>
              </div>
            </div>
            <!-- Bottom: Editor -->
            <div class="absolute inset-0 w-full h-10 px-4 flex items-center gap-2 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }" style="backface-visibility: hidden; transform: rotateX(90deg) translateZ(20px)">
              <span class="text-xs" :style="{ color: 'var(--c-muted)' }">Code</span>
              <svg class="size-3" :style="{ color: 'var(--c-muted)' }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
              <span class="text-xs font-medium">Editor</span>
              <div class="flex-1"></div>
              <div class="w-px h-4" :style="{ background: 'var(--c-border)' }"></div>
              <div class="flex gap-1">
                <div v-for="a in ['play','wand','search','columns']" :key="a" class="size-7 flex items-center justify-center rounded-md" :style="{ color: 'var(--c-muted)' }">
                  <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3 p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <div class="space-y-2 text-xs" :style="{ color: 'var(--c-muted)' }">
          <p><strong :style="{ color: 'var(--c-fg)' }">Axis:</strong> rotateX(-90deg) — flips downward on page change</p>
          <p><strong :style="{ color: 'var(--c-fg)' }">Front face:</strong> current page breadcrumb + toolbar items</p>
          <p><strong :style="{ color: 'var(--c-fg)' }">Bottom face:</strong> next page breadcrumb + its toolbar items</p>
          <p><strong :style="{ color: 'var(--c-fg)' }">Teleport slots:</strong> #toolbar-left, #toolbar-center, #toolbar-right — pages inject actions via Vue Teleport</p>
          <p><strong :style="{ color: 'var(--c-fg)' }">Breadcrumb:</strong> auto-generated from route — shows space name, sub-path segments</p>
        </div>
      </div>
    </section>

    <!-- Basic Toolbar -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Basic Toolbar</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Horizontal bar with icon buttons and dividers.</p>
      <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <div class="flex items-center gap-1 px-2 py-1.5 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }">
          <button v-for="(btn, i) in toolButtons.tools" :key="btn.title"
            class="size-8 inline-flex items-center justify-center rounded-md cursor-pointer transition-all"
            :style="{
              color: i === 0 ? 'var(--c-accent)' : 'var(--c-muted)',
              background: i === 0 ? 'color-mix(in srgb, var(--c-accent) 15%, transparent)' : 'transparent',
            }"
            :title="btn.title">
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="btn.path"></svg>
          </button>
          <div class="w-px h-5 mx-1" :style="{ background: 'var(--c-border)' }"></div>
          <button v-for="btn in toolButtons.draw" :key="btn.title"
            class="size-8 inline-flex items-center justify-center rounded-md cursor-pointer transition-all"
            :style="{ color: 'var(--c-muted)' }"
            :title="btn.title">
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="btn.path"></svg>
          </button>
          <div class="w-px h-5 mx-1" :style="{ background: 'var(--c-border)' }"></div>
          <button v-for="btn in toolButtons.history" :key="btn.title"
            class="size-8 inline-flex items-center justify-center rounded-md cursor-pointer transition-all"
            :style="{ color: 'var(--c-muted)' }"
            :title="btn.title">
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="btn.path"></svg>
          </button>
          <div class="flex-1"></div>
          <button class="size-8 inline-flex items-center justify-center rounded-md cursor-pointer" :style="{ color: 'var(--c-muted)' }" title="Zoom Out">
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7"/></svg>
          </button>
          <span class="text-xs font-mono px-2" :style="{ color: 'var(--c-muted)' }">100%</span>
          <button class="size-8 inline-flex items-center justify-center rounded-md cursor-pointer" :style="{ color: 'var(--c-muted)' }" title="Zoom In">
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Toolbar with Breadcrumb -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Toolbar with Breadcrumb Path</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Combines navigation breadcrumbs with action buttons.</p>
      <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <div class="flex items-center gap-2 px-3 py-2 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }">
          <nav class="flex items-center gap-1.5 text-sm flex-1">
            <span :style="{ color: 'var(--c-muted)' }">construct-operator</span>
            <svg class="size-3" :style="{ color: 'var(--c-muted)' }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            <span :style="{ color: 'var(--c-muted)' }">cmd</span>
            <svg class="size-3" :style="{ color: 'var(--c-muted)' }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            <span class="font-medium">operator</span>
          </nav>
          <div class="w-px h-5" :style="{ background: 'var(--c-border)' }"></div>
          <button class="size-8 inline-flex items-center justify-center rounded-md cursor-pointer" :style="{ color: 'var(--c-muted)' }" title="New File">
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
          </button>
          <button class="size-8 inline-flex items-center justify-center rounded-md cursor-pointer" :style="{ color: 'var(--c-muted)' }" title="Search">
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path stroke-linecap="round" d="m21 21-4.35-4.35"/></svg>
          </button>
          <button class="size-8 inline-flex items-center justify-center rounded-md cursor-pointer" :style="{ color: 'var(--c-muted)' }" title="More">
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Space Toolbar -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Space Toolbar</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Context-specific toolbar showing space info and actions.</p>
      <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <div class="flex items-center gap-3 px-4 py-3 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }">
          <div class="size-8 rounded-lg flex items-center justify-center" :style="{ background: 'color-mix(in srgb, var(--c-accent) 15%, transparent)' }">
            <svg class="size-4" :style="{ color: 'var(--c-accent)' }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium">construct-operator</p>
            <p class="text-xs" :style="{ color: 'var(--c-muted)' }">Code Space</p>
          </div>
          <div class="flex items-center gap-1">
            <span class="text-xs font-medium px-2 py-0.5 rounded-full" style="background:color-mix(in srgb, #22c55e 15%, transparent);color:#22c55e">Connected</span>
            <div class="w-px h-5 mx-1" :style="{ background: 'var(--c-border)' }"></div>
            <button v-for="btn in spaceActions" :key="btn.title"
              class="size-8 inline-flex items-center justify-center rounded-md cursor-pointer transition-all"
              :style="{ color: 'var(--c-muted)' }"
              :title="btn.title">
              <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="btn.path"></svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Dropdown Menu -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Dropdown Menu</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Context menu that opens from toolbar buttons.</p>
      <div class="p-6 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <div class="inline-block">
          <button class="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)', color: 'var(--c-fg)' }">
            Options
            <svg class="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="mt-2 w-40 rounded-lg border p-1" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
            <div v-for="item in dropdownItems" :key="item.label"
              class="flex items-center gap-2 px-3 py-2 rounded-md text-[13px] cursor-pointer transition-colors"
              :style="{ color: item.danger ? '#ef4444' : 'var(--c-fg)' }">
              <svg class="size-4" :style="{ color: item.danger ? '#ef4444' : 'var(--c-muted)' }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" v-html="item.path"></svg>
              {{ item.label }}
            </div>
            <div v-if="dropdownItems.length > 3" class="my-1 border-t" :style="{ borderColor: 'var(--c-border)' }"></div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

