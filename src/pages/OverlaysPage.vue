<script setup lang="ts">
import { ref } from 'vue'

const popoverVisible = ref(true)

const contextMenuItems = [
  { label: 'Edit', danger: false, separator: false, path: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>' },
  { label: 'Duplicate', danger: false, separator: false, path: '<path stroke-linecap="round" stroke-linejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>' },
  { label: 'Archive', danger: false, separator: true, path: '<path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"/>' },
  { label: 'Delete', danger: true, separator: false, path: '<path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>' },
]
</script>

<template>
  <div>
    <div class="mb-8">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Components</p>
      <h1 class="text-3xl font-bold">Overlays</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">Modal, Slideover, Popover, and ContextMenu.</p>
    </div>

    <!-- Modal -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Modal</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Centered dialog with backdrop overlay. Used for confirmations, forms, and focused tasks.</p>
      <div class="grid grid-cols-2 gap-4">
        <!-- Default Modal -->
        <div class="rounded-lg border overflow-hidden" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
          <div class="px-3 py-2 border-b" :style="{ borderColor: 'var(--c-border)' }">
            <span class="text-[10px] uppercase tracking-widest" :style="{ color: 'var(--c-muted)' }">Default</span>
          </div>
          <div class="p-6 flex items-center justify-center" :style="{ background: 'var(--c-surface)', minHeight: '220px' }">
            <!-- Backdrop simulation -->
            <div class="absolute inset-0 rounded-b-lg" style="background: rgba(0,0,0,0.4)"></div>
            <!-- Modal card -->
            <div class="relative w-72 rounded-lg border p-5" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }" style="box-shadow: 0 8px 32px rgba(0,0,0,0.3)">
              <div class="flex items-start justify-between mb-1">
                <h3 class="text-sm font-semibold">Delete Project</h3>
                <button class="size-6 flex items-center justify-center rounded-md" :style="{ color: 'var(--c-muted)' }">
                  <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <p class="text-xs mb-5" :style="{ color: 'var(--c-muted)' }">This action cannot be undone. All files, settings, and data associated with this project will be permanently removed.</p>
              <div class="flex justify-end gap-2">
                <button class="px-3 py-1.5 rounded-lg text-xs font-medium border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)', color: 'var(--c-fg)' }">Cancel</button>
                <button class="px-3 py-1.5 rounded-lg text-xs font-medium" style="background: #ef4444; color: #fff">Delete</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Fullscreen Modal -->
        <div class="rounded-lg border overflow-hidden" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
          <div class="px-3 py-2 border-b" :style="{ borderColor: 'var(--c-border)' }">
            <span class="text-[10px] uppercase tracking-widest" :style="{ color: 'var(--c-muted)' }">Fullscreen</span>
          </div>
          <div class="p-4 flex items-center justify-center" :style="{ background: 'var(--c-surface)', minHeight: '220px' }">
            <!-- Fullscreen modal preview (scaled down) -->
            <div class="relative w-full h-44 rounded-lg border overflow-hidden" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }" style="box-shadow: 0 8px 32px rgba(0,0,0,0.3)">
              <!-- Title bar -->
              <div class="flex items-center justify-between px-4 py-2.5 border-b" :style="{ borderColor: 'var(--c-border)' }">
                <h3 class="text-xs font-semibold">Project Settings</h3>
                <button class="size-5 flex items-center justify-center rounded-md" :style="{ color: 'var(--c-muted)' }">
                  <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
              <!-- Content area -->
              <div class="p-4 space-y-3">
                <div>
                  <label class="text-[10px] font-medium block mb-1" :style="{ color: 'var(--c-muted)' }">Project Name</label>
                  <div class="h-7 rounded-md border px-2 flex items-center text-[10px]" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)' }">construct-operator</div>
                </div>
                <div>
                  <label class="text-[10px] font-medium block mb-1" :style="{ color: 'var(--c-muted)' }">Description</label>
                  <div class="h-7 rounded-md border px-2 flex items-center text-[10px]" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)', color: 'var(--c-muted)' }">Backend operator service...</div>
                </div>
              </div>
              <!-- Footer -->
              <div class="absolute bottom-0 left-0 right-0 flex justify-end gap-2 px-4 py-2 border-t" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
                <button class="px-2 py-1 rounded text-[10px] font-medium border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)', color: 'var(--c-fg)' }">Cancel</button>
                <button class="px-2 py-1 rounded text-[10px] font-medium" :style="{ background: 'var(--c-accent)', color: 'var(--c-accent-fg)' }">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Slideover -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Slideover</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Panel that slides in from the right edge. Used for detail views, forms, and secondary content.</p>
      <div class="rounded-lg border overflow-hidden" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <div class="relative flex" style="min-height: 280px">
          <!-- Main content area (dimmed) -->
          <div class="flex-1 p-6" :style="{ background: 'var(--c-surface)' }" style="opacity: 0.4">
            <div class="space-y-3">
              <div class="h-4 w-48 rounded" :style="{ background: 'var(--c-border)' }"></div>
              <div class="h-3 w-72 rounded" :style="{ background: 'var(--c-border)' }"></div>
              <div class="h-3 w-60 rounded" :style="{ background: 'var(--c-border)' }"></div>
              <div class="h-3 w-40 rounded" :style="{ background: 'var(--c-border)' }"></div>
              <div class="h-20 w-full rounded" :style="{ background: 'var(--c-border)' }"></div>
              <div class="h-3 w-56 rounded" :style="{ background: 'var(--c-border)' }"></div>
            </div>
          </div>
          <!-- Slideover panel -->
          <div class="w-72 border-l flex flex-col" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }" style="box-shadow: -4px 0 24px rgba(0,0,0,0.15)">
            <!-- Title bar -->
            <div class="flex items-center justify-between px-4 py-3 border-b" :style="{ borderColor: 'var(--c-border)' }">
              <h3 class="text-sm font-semibold">Edit Details</h3>
              <button class="size-6 flex items-center justify-center rounded-md" :style="{ color: 'var(--c-muted)' }">
                <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
            <!-- Content -->
            <div class="flex-1 p-4 space-y-4">
              <div>
                <label class="text-[10px] font-medium uppercase tracking-wider block mb-1.5" :style="{ color: 'var(--c-muted)' }">Name</label>
                <div class="h-8 rounded-lg border px-3 flex items-center text-xs" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)' }">My Project</div>
              </div>
              <div>
                <label class="text-[10px] font-medium uppercase tracking-wider block mb-1.5" :style="{ color: 'var(--c-muted)' }">Status</label>
                <div class="h-8 rounded-lg border px-3 flex items-center justify-between text-xs" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)' }">
                  <span>Active</span>
                  <svg class="size-3" :style="{ color: 'var(--c-muted)' }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
              <div>
                <label class="text-[10px] font-medium uppercase tracking-wider block mb-1.5" :style="{ color: 'var(--c-muted)' }">Description</label>
                <div class="h-16 rounded-lg border px-3 py-2 text-xs" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)', color: 'var(--c-muted)' }">Add a description...</div>
              </div>
            </div>
            <!-- Footer -->
            <div class="flex justify-end gap-2 px-4 py-3 border-t" :style="{ borderColor: 'var(--c-border)' }">
              <button class="px-3 py-1.5 rounded-lg text-xs font-medium border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)', color: 'var(--c-fg)' }">Cancel</button>
              <button class="px-3 py-1.5 rounded-lg text-xs font-medium" :style="{ background: 'var(--c-accent)', color: 'var(--c-accent-fg)' }">Save Changes</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Popover -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Popover</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Floating card anchored to a trigger element. Used for quick settings, filters, and secondary actions.</p>
      <div class="p-6 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <div class="inline-block">
          <!-- Trigger button -->
          <button class="px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-2 border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)', color: 'var(--c-fg)' }">
            <svg class="size-4" :style="{ color: 'var(--c-muted)' }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><circle cx="12" cy="12" r="3"/></svg>
            Settings
            <svg class="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <!-- Popover card (static, always visible) -->
          <div class="mt-2 w-56 rounded-lg border p-3" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }" style="box-shadow: 0 4px 16px rgba(0,0,0,0.15)">
            <p class="text-xs font-semibold mb-3">Display Settings</p>
            <div class="space-y-3">
              <!-- Toggle option -->
              <div class="flex items-center justify-between">
                <span class="text-xs" :style="{ color: 'var(--c-muted)' }">Compact mode</span>
                <div class="w-8 h-4.5 rounded-full relative cursor-pointer" :style="{ background: 'var(--c-accent)' }">
                  <div class="size-3.5 rounded-full absolute top-0.5 right-0.5" style="background: #fff"></div>
                </div>
              </div>
              <!-- Toggle option -->
              <div class="flex items-center justify-between">
                <span class="text-xs" :style="{ color: 'var(--c-muted)' }">Show line numbers</span>
                <div class="w-8 h-4.5 rounded-full relative cursor-pointer" :style="{ background: 'var(--c-input)' }">
                  <div class="size-3.5 rounded-full absolute top-0.5 left-0.5" :style="{ background: 'var(--c-muted)' }"></div>
                </div>
              </div>
              <!-- Select option -->
              <div>
                <span class="text-xs block mb-1" :style="{ color: 'var(--c-muted)' }">Font size</span>
                <div class="h-7 rounded-md border px-2 flex items-center justify-between text-xs" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-input)' }">
                  <span>14px</span>
                  <svg class="size-3" :style="{ color: 'var(--c-muted)' }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ContextMenu -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">ContextMenu</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Right-click dropdown menu with grouped actions and separators.</p>
      <div class="p-6 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <div class="inline-flex gap-6 items-start">
          <!-- Trigger area -->
          <div class="w-48 h-32 rounded-lg border-2 border-dashed flex items-center justify-center" :style="{ borderColor: 'var(--c-border)' }">
            <span class="text-xs" :style="{ color: 'var(--c-muted)' }">Right-click area</span>
          </div>
          <!-- Context menu (static, always visible) -->
          <div class="w-44 rounded-lg border p-1" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }" style="box-shadow: 0 4px 16px rgba(0,0,0,0.15)">
            <template v-for="(item, i) in contextMenuItems" :key="item.label">
              <div v-if="item.separator" class="my-1 border-t" :style="{ borderColor: 'var(--c-border)' }"></div>
              <div
                class="flex items-center gap-2 px-3 py-2 rounded-md text-[13px] cursor-pointer transition-colors"
                :style="{ color: item.danger ? '#ef4444' : 'var(--c-fg)' }">
                <svg class="size-4" :style="{ color: item.danger ? '#ef4444' : 'var(--c-muted)' }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" v-html="item.path"></svg>
                {{ item.label }}
                <span v-if="!item.danger" class="ml-auto text-[10px]" :style="{ color: 'var(--c-muted)' }">
                  {{ i === 0 ? '⌘E' : i === 1 ? '⌘D' : '⌘⇧A' }}
                </span>
              </div>
            </template>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
