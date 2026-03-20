<script setup lang="ts">
import { ref } from 'vue'

const rotated = ref(false)

const homePath = '<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>'
const chatPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>'
const codePath = '<path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>'
const docsPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>'
const spacesPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>'
const searchPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>'
const settingsPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/>'
const arrowLeftPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7"/>'
const folderPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/>'
const gridPath = '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'
const termPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>'
const responsivePath = '<path stroke-linecap="round" stroke-linejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>'
const editorPath = '<path stroke-linecap="round" stroke-linejoin="round" d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"/><path d="M14 2v6h6"/>'

const mainIcons = [
  { label: 'Projects', path: folderPath },
]
const pinnedIcons = [
  { label: 'Chat', path: chatPath, color: '#30D158' },
  { label: 'Design', path: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>', color: '#FF2D55' },
]
const spaceSubPages = [
  { label: 'Overview', path: homePath },
  { label: 'Editor', path: editorPath },
  { label: 'Responsive', path: responsivePath },
  { label: 'Terminal', path: termPath },
]
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Patterns</p>
      <h1 class="text-3xl font-bold">Sidebar</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">3D rotating sidebar with two panels. Front panel: main nav. Rotates -90deg to reveal space sub-pages.</p>
    </div>

    <!-- Interactive 3D Sidebar -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">3D Rotating Sidebar</h2>
      <p class="text-sm mb-2" :style="{ color: 'var(--c-muted)' }">Click a space icon to rotate, or use the button below. The sidebar is a CSS 3D cube — front face shows main nav, right face shows sub-pages.</p>
      <button
        class="px-3 py-1.5 rounded-lg text-xs font-medium mb-4 border"
        :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)', color: 'var(--c-fg)' }"
        @click="rotated = !rotated"
      >{{ rotated ? 'Back to main' : 'Enter a space →' }}</button>

      <div class="flex gap-6">
        <!-- The 3D sidebar mock -->
        <div class="w-[72px] shrink-0 border rounded-xl overflow-hidden" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)', height: '440px' }">
          <!-- Logo -->
          <div class="flex items-center justify-center pt-8 pb-2">
            <svg width="28" height="28" viewBox="0 0 533 533" fill="currentColor" :style="{ color: 'var(--c-accent)' }"><path d="M266.5 410.156C230.912 410.156 199.106 402.203 171.081 386.297C143.056 370.39 121.036 348.519 105.022 320.684C89.0072 292.848 81 261.256 81 225.909C81 190.12 89.0072 158.308 105.022 130.472C121.036 102.636 143.056 80.7655 171.081 64.8593C199.106 48.9531 230.912 41 266.5 41C302.087 41 333.671 48.9531 361.252 64.8593C389.277 80.7655 411.297 102.636 427.311 130.472C443.326 158.308 451.555 190.12 452 225.909C452 261.256 443.77 292.848 427.311 320.684C411.297 348.519 389.277 370.39 361.252 386.297C333.671 402.203 302.087 410.156 266.5 410.156ZM266.5 363.763C292.301 363.763 315.433 357.798 335.896 345.868C356.359 333.939 372.373 317.591 383.939 296.824C395.505 276.058 401.288 252.42 401.288 225.909C401.288 199.399 395.505 175.761 383.939 154.994C372.373 133.786 356.359 117.217 335.896 105.287C315.433 93.3579 292.301 87.393 266.5 87.393C240.699 87.393 217.567 93.3579 197.104 105.287C176.641 117.217 160.405 133.786 148.394 154.994C136.828 175.761 131.045 199.399 131.045 225.909C131.045 252.42 136.828 276.058 148.394 296.824C160.405 317.591 176.641 333.939 197.104 345.868C217.567 357.798 240.699 363.763 266.5 363.763Z"/><path d="M378.22 451.578C393.077 451.578 405.121 460.85 405.121 472.289C405.121 483.727 393.077 493 378.22 493H160.945C146.089 493 134.044 483.727 134.044 472.289C134.044 460.85 146.089 451.578 160.945 451.578H378.22Z"/></svg>
          </div>

          <!-- 3D cube container -->
          <div class="flex-1 w-full overflow-hidden px-[10px]" style="perspective: 800px">
            <div class="relative w-full transition-transform duration-500 ease-out" :style="{ transformStyle: 'preserve-3d', transform: `rotateY(${rotated ? -90 : 0}deg)`, height: '300px' }">

              <!-- Front: Main nav -->
              <div class="absolute inset-0 flex flex-col items-center gap-1" style="backface-visibility: hidden; transform: translateZ(26px)">
                <!-- Projects -->
                <div class="size-[42px] flex items-center justify-center rounded-[10px] cursor-pointer" :style="{ color: 'var(--c-muted)' }">
                  <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="folderPath"></svg>
                </div>
                <div class="w-8 h-px my-0.5" :style="{ background: 'var(--c-border)' }"></div>
                <!-- Pinned spaces -->
                <div v-for="pin in pinnedIcons" :key="pin.label"
                  class="size-[42px] flex items-center justify-center rounded-[10px] cursor-pointer transition-all"
                  :style="{ color: 'var(--c-muted)' }"
                  @click="rotated = true">
                  <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="pin.path"></svg>
                </div>
                <div class="flex-1"></div>
                <div class="w-8 h-px my-0.5" :style="{ background: 'var(--c-border)' }"></div>
                <!-- All Spaces -->
                <div class="size-[42px] flex items-center justify-center rounded-[10px]" :style="{ color: 'var(--c-muted)' }">
                  <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="gridPath"></svg>
                </div>
                <!-- Settings -->
                <div class="size-[42px] flex items-center justify-center rounded-[10px]" :style="{ color: 'var(--c-muted)' }">
                  <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="settingsPath"></svg>
                </div>
              </div>

              <!-- Right: Space sub-pages -->
              <div class="absolute inset-0 flex flex-col items-center gap-1" style="backface-visibility: hidden; transform: rotateY(90deg) translateZ(26px)">
                <!-- Back -->
                <div class="size-[42px] flex items-center justify-center rounded-[10px] cursor-pointer" :style="{ color: 'var(--c-muted)' }" @click="rotated = false">
                  <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="arrowLeftPath"></svg>
                </div>
                <!-- Active space icon -->
                <div class="size-[42px] flex items-center justify-center rounded-[10px]" :style="{ background: 'color-mix(in srgb, #34C759 15%, transparent)', color: '#34C759' }">
                  <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="codePath"></svg>
                </div>
                <div class="w-8 h-px my-0.5" :style="{ background: 'var(--c-border)' }"></div>
                <!-- Sub-pages -->
                <div v-for="(sp, i) in spaceSubPages" :key="sp.label"
                  class="size-[42px] flex items-center justify-center rounded-[10px] cursor-pointer"
                  :style="{
                    color: i === 0 ? 'var(--c-accent)' : 'var(--c-muted)',
                    background: i === 0 ? 'color-mix(in srgb, var(--c-accent) 15%, transparent)' : 'transparent',
                  }">
                  <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="sp.path"></svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Avatar (outside cube, always visible) -->
          <div class="flex justify-center pb-4 pt-2">
            <div class="size-9 rounded-full flex items-center justify-center text-xs font-bold ring-2" :style="{ background: 'var(--c-accent)', color: 'var(--c-accent-fg)', ringColor: 'var(--c-border)' }">FR</div>
          </div>
        </div>

        <!-- Description -->
        <div class="flex-1 space-y-4">
          <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
            <h3 class="text-sm font-semibold mb-2">3D Cube Model</h3>
            <div class="space-y-2 text-xs" :style="{ color: 'var(--c-muted)' }">
              <p><strong :style="{ color: 'var(--c-fg)' }">Width:</strong> 72px, dock-style buttons (42x42px, 10px radius)</p>
              <p><strong :style="{ color: 'var(--c-fg)' }">Perspective:</strong> 1000px, preserve-3d, translateZ(20px) per face</p>
              <p><strong :style="{ color: 'var(--c-fg)' }">Front face (0deg):</strong> Projects + pinned spaces + All Spaces + Settings</p>
              <p><strong :style="{ color: 'var(--c-fg)' }">Right face (-90deg):</strong> Back button + active space icon + sub-page icons</p>
              <p><strong :style="{ color: 'var(--c-fg)' }">Transition:</strong> 500ms ease-out rotateY</p>
              <p><strong :style="{ color: 'var(--c-fg)' }">Avatar:</strong> Outside the cube, always visible at bottom</p>
            </div>
          </div>
          <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
            <h3 class="text-sm font-semibold mb-2">Front Panel</h3>
            <div class="space-y-1 text-xs" :style="{ color: 'var(--c-muted)' }">
              <p>Projects (folder icon, primary entry)</p>
              <p>Separator</p>
              <p>Pinned spaces (from user prefs, click to rotate)</p>
              <p>Spacer</p>
              <p>Separator</p>
              <p>All Spaces (grid icon, launchpad)</p>
              <p>Settings</p>
            </div>
          </div>
          <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
            <h3 class="text-sm font-semibold mb-2">Right Panel (Space / Project)</h3>
            <div class="space-y-1 text-xs" :style="{ color: 'var(--c-muted)' }">
              <p>← Back button (returns to front panel)</p>
              <p>Active space icon (highlighted)</p>
              <p>Separator</p>
              <p>Sub-page icons (from manifest pages[])</p>
              <p class="mt-2" :style="{ color: 'var(--c-fg)' }">Also supports project mode: shows project name badge + project-scoped space icons</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Interaction States -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Button States</h2>
      <div class="flex gap-4 mt-3">
        <div v-for="state in [{label:'Inactive',color:'var(--c-muted)',bg:'transparent'},{label:'Hover',color:'var(--c-fg)',bg:'color-mix(in srgb, var(--c-fg) 5%, transparent)'},{label:'Active',color:'var(--c-accent)',bg:'color-mix(in srgb, var(--c-accent) 15%, transparent)'}]" :key="state.label" class="text-center">
          <div class="size-[42px] flex items-center justify-center rounded-[10px] mx-auto" :style="{ color: state.color, background: state.bg }">
            <svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" v-html="homePath"></svg>
          </div>
          <p class="text-[10px] mt-1" :style="{ color: 'var(--c-muted)' }">{{ state.label }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
