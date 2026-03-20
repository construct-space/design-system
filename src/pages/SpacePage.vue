<script setup lang="ts">
const spaces = [
  { id: 'code', name: 'Code', icon: '&#60;/&#62;', color: '#34C759', desc: 'Editor, terminal, git' },
  { id: 'design', name: 'Design', icon: '&#9998;', color: '#FF2D55', desc: 'PixiJS canvas editor' },
  { id: 'ai', name: 'AI', icon: '&#10024;', color: '#BF5AF2', desc: 'AI assistant & models' },
  { id: 'chat', name: 'Chat', icon: '&#128172;', color: '#30D158', desc: 'Team messaging' },
  { id: 'git', name: 'Git', icon: '&#9095;', color: '#FF3B30', desc: 'Branches, commits, PRs' },
  { id: 'terminal', name: 'Terminal', icon: '&#62;_', color: '#8E8E93', desc: 'Shell emulator' },
  { id: 'kanban', name: 'Tasks', icon: '&#9745;', color: '#FF9500', desc: 'Boards & lists' },
  { id: 'notes', name: 'Notes', icon: '&#9998;', color: '#FFD60A', desc: 'Sticky notes' },
  { id: 'docs', name: 'Docs', icon: '&#128196;', color: '#64D2FF', desc: 'Documentation' },
  { id: 'calendar', name: 'Calendar', icon: '&#128197;', color: '#5856D6', desc: 'Events & scheduling' },
]

const manifestFields = [
  { key: 'id', type: 'string', desc: 'Unique space identifier' },
  { key: 'name', type: 'string', desc: 'Display name' },
  { key: 'version', type: 'semver', desc: 'Space version' },
  { key: 'icon', type: 'string', desc: 'Lucide icon class (i-lucide-*)' },
  { key: 'scope', type: '"company" | "project" | "both"', desc: 'Where the space is available' },
  { key: 'navigation', type: 'object', desc: 'Sidebar entry: label, icon, route, order' },
  { key: 'pages', type: 'SpacePage[]', desc: 'Sub-pages with toolbar definitions' },
  { key: 'theme', type: 'object', desc: 'Color and background for the space identity' },
  { key: 'toolbar', type: 'ToolbarItem[]', desc: 'Space-level toolbar actions' },
]

const codePages = [
  { path: '/', label: 'Overview', icon: 'layout-dashboard', default: true },
  { path: '/editor', label: 'Editor', icon: 'file-code', default: false },
  { path: '/responsive', label: 'Responsive', icon: 'smartphone', default: false },
  { path: '/terminal', label: 'Terminal', icon: 'terminal', default: false },
]
</script>

<template>
  <div>
    <div class="mb-10">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">Patterns</p>
      <h1 class="text-3xl font-bold">Space</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">A space is a self-contained module that plugs into the Construct shell. Each space owns its pages, toolbar actions, theme color, and navigation entry.</p>
    </div>

    <!-- Anatomy -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Anatomy</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">How a space fits into the Construct shell.</p>

      <div class="flex gap-0 rounded-lg border overflow-hidden" :style="{ borderColor: 'var(--c-border)', height: '400px' }">
        <!-- Icon sidebar -->
        <div class="w-[52px] shrink-0 flex flex-col items-center py-3 gap-1 border-r" :style="{ background: 'var(--c-surface)', borderColor: 'var(--c-border)' }">
          <div class="size-8 flex items-center justify-center mb-1" :style="{ color: 'var(--c-accent)' }">
            <svg width="18" height="18" viewBox="0 0 533 533" fill="currentColor"><path d="M266.5 410.156C230.912 410.156 199.106 402.203 171.081 386.297C143.056 370.39 121.036 348.519 105.022 320.684C89.0072 292.848 81 261.256 81 225.909C81 190.12 89.0072 158.308 105.022 130.472C121.036 102.636 143.056 80.7655 171.081 64.8593C199.106 48.9531 230.912 41 266.5 41C302.087 41 333.671 48.9531 361.252 64.8593C389.277 80.7655 411.297 102.636 427.311 130.472C443.326 158.308 451.555 190.12 452 225.909C452 261.256 443.77 292.848 427.311 320.684C411.297 348.519 389.277 370.39 361.252 386.297C333.671 402.203 302.087 410.156 266.5 410.156ZM266.5 363.763C292.301 363.763 315.433 357.798 335.896 345.868C356.359 333.939 372.373 317.591 383.939 296.824C395.505 276.058 401.288 252.42 401.288 225.909C401.288 199.399 395.505 175.761 383.939 154.994C372.373 133.786 356.359 117.217 335.896 105.287C315.433 93.3579 292.301 87.393 266.5 87.393C240.699 87.393 217.567 93.3579 197.104 105.287C176.641 117.217 160.405 133.786 148.394 154.994C136.828 175.761 131.045 199.399 131.045 225.909C131.045 252.42 136.828 276.058 148.394 296.824C160.405 317.591 176.641 333.939 197.104 345.868C217.567 357.798 240.699 363.763 266.5 363.763Z"/><path d="M378.22 451.578C393.077 451.578 405.121 460.85 405.121 472.289C405.121 483.727 393.077 493 378.22 493H160.945C146.089 493 134.044 483.727 134.044 472.289C134.044 460.85 146.089 451.578 160.945 451.578H378.22Z"/></svg>
          </div>
          <div class="w-6 border-t" :style="{ borderColor: 'var(--c-border)' }"></div>
          <!-- Back arrow -->
          <div class="size-8 flex items-center justify-center rounded-md" :style="{ color: 'var(--c-muted)' }">
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 12H5m0 0l7 7m-7-7l7-7"/></svg>
          </div>
          <!-- Active space -->
          <div class="size-8 flex items-center justify-center rounded-md" :style="{ background: 'color-mix(in srgb, #34C759 15%, transparent)', color: '#34C759' }">
            <svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
          </div>
          <div class="w-6 border-t" :style="{ borderColor: 'var(--c-border)' }"></div>
          <!-- Sub-page icons -->
          <div class="size-8 flex items-center justify-center rounded-md" :style="{ background: 'color-mix(in srgb, var(--c-accent) 15%, transparent)', color: 'var(--c-accent)' }">
            <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          </div>
          <div class="size-8 flex items-center justify-center rounded-md" :style="{ color: 'var(--c-muted)' }">
            <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"/><path d="M14 2v6h6"/></svg>
          </div>
          <div class="size-8 flex items-center justify-center rounded-md" :style="{ color: 'var(--c-muted)' }">
            <svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          </div>
          <div class="flex-1"></div>
          <div class="size-7 rounded-full flex items-center justify-center text-[9px] font-bold" :style="{ background: 'var(--c-accent)', color: 'var(--c-accent-fg)' }">FR</div>
        </div>

        <!-- Main area -->
        <div class="flex-1 flex flex-col" :style="{ background: 'var(--c-bg)' }">
          <!-- Toolbar teleport zone -->
          <div class="flex items-center gap-2 px-4 py-2 border-b" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-surface)' }">
            <div class="size-6 rounded-md flex items-center justify-center" :style="{ background: 'color-mix(in srgb, #34C759 15%, transparent)' }">
              <svg class="size-3" style="color:#34C759" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
            </div>
            <span class="text-xs font-medium">Code</span>
            <span class="text-[10px]" :style="{ color: 'var(--c-muted)' }">/ Overview</span>
            <div class="flex-1"></div>
            <div class="flex gap-1">
              <div v-for="btn in ['file-plus', 'play', 'search']" :key="btn" class="size-6 flex items-center justify-center rounded-md" :style="{ color: 'var(--c-muted)' }">
                <svg class="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
              </div>
            </div>
          </div>

          <!-- Page content area -->
          <div class="flex-1 flex items-center justify-center">
            <div class="text-center">
              <p class="text-xs font-mono" :style="{ color: 'var(--c-muted)' }">&#60;SpaceContent /&#62;</p>
              <p class="text-[10px] mt-1" :style="{ color: 'var(--c-muted)' }">Each page renders its own views here</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Labels -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4">
        <div class="p-3 rounded-lg border" :style="{ borderColor: 'var(--c-border)' }">
          <p class="text-xs font-semibold">Sidebar</p>
          <p class="text-[10px]" :style="{ color: 'var(--c-muted)' }">Space teleports its icon + order into the shell sidebar via <code class="font-mono">navigation</code></p>
        </div>
        <div class="p-3 rounded-lg border" :style="{ borderColor: 'var(--c-border)' }">
          <p class="text-xs font-semibold">Toolbar</p>
          <p class="text-[10px]" :style="{ color: 'var(--c-muted)' }">Each page defines its own toolbar buttons, teleported into the shell toolbar zone</p>
        </div>
        <div class="p-3 rounded-lg border" :style="{ borderColor: 'var(--c-border)' }">
          <p class="text-xs font-semibold">Pages</p>
          <p class="text-[10px]" :style="{ color: 'var(--c-muted)' }">Sub-pages show as icons on the sidebar's second panel (3D rotated). Each owns its views and toolbar</p>
        </div>
        <div class="p-3 rounded-lg border" :style="{ borderColor: 'var(--c-border)' }">
          <p class="text-xs font-semibold">Theme</p>
          <p class="text-[10px]" :style="{ color: 'var(--c-muted)' }">Each space has a signature color used for its icon, active state, and accents</p>
        </div>
      </div>
    </section>

    <!-- space.manifest.json -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">space.manifest.json</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Every space declares itself with a manifest. The shell reads it to register navigation, pages, and toolbar actions.</p>

      <div class="rounded-lg border overflow-hidden" :style="{ borderColor: 'var(--c-border)' }">
        <table class="w-full text-sm">
          <thead>
            <tr :style="{ background: 'var(--c-surface)' }">
              <th class="text-left px-4 py-2 text-xs font-medium" :style="{ color: 'var(--c-muted)' }">Field</th>
              <th class="text-left px-4 py-2 text-xs font-medium" :style="{ color: 'var(--c-muted)' }">Type</th>
              <th class="text-left px-4 py-2 text-xs font-medium" :style="{ color: 'var(--c-muted)' }">Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="f in manifestFields" :key="f.key" class="border-t" :style="{ borderColor: 'var(--c-border)' }">
              <td class="px-4 py-2 font-mono text-xs" :style="{ color: 'var(--c-accent)' }">{{ f.key }}</td>
              <td class="px-4 py-2 font-mono text-xs" :style="{ color: 'var(--c-muted)' }">{{ f.type }}</td>
              <td class="px-4 py-2 text-xs">{{ f.desc }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Page definition -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Pages as Sub-spaces</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Each space declares pages in its manifest. A page is a route + toolbar definition. Example from Code space:</p>

      <div class="space-y-2">
        <div v-for="(p, i) in codePages" :key="p.path"
          class="flex items-center gap-3 p-3 rounded-lg border"
          :style="{ borderColor: i === 0 ? '#34C759' : 'var(--c-border)', background: i === 0 ? 'color-mix(in srgb, #34C759 5%, var(--c-card))' : 'var(--c-card)' }">
          <div class="size-8 rounded-md flex items-center justify-center shrink-0 text-xs" :style="{ background: 'color-mix(in srgb, #34C759 12%, transparent)', color: '#34C759' }">
            {{ p.label[0] }}
          </div>
          <div class="flex-1">
            <p class="text-sm font-medium">{{ p.label }}</p>
            <p class="text-[10px] font-mono" :style="{ color: 'var(--c-muted)' }">{{ p.path || '/' }}</p>
          </div>
          <span v-if="p.default" class="text-[10px] font-medium px-2 py-0.5 rounded-full" :style="{ background: 'color-mix(in srgb, #34C759 15%, transparent)', color: '#34C759' }">default</span>
        </div>
      </div>
    </section>

    <!-- Teleporting -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Teleporting</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Spaces don't render the shell. They teleport content into it.</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-5 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
          <p class="text-[10px] uppercase tracking-widest mb-2" :style="{ color: 'var(--c-muted)' }">Sidebar Icon</p>
          <p class="text-xs mb-3" :style="{ color: 'var(--c-muted)' }">The <code class="font-mono">navigation</code> object in the manifest tells the shell what icon to show, where to route, and the sort order.</p>
          <div class="p-3 rounded-md font-mono text-[11px] leading-relaxed" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
            <span :style="{ color: 'var(--c-muted)' }">"navigation"</span>: {<br>
            &nbsp;&nbsp;<span :style="{ color: 'var(--c-muted)' }">"icon"</span>: <span :style="{ color: 'var(--c-accent)' }">"i-lucide-code"</span>,<br>
            &nbsp;&nbsp;<span :style="{ color: 'var(--c-muted)' }">"order"</span>: <span :style="{ color: 'var(--c-accent)' }">10</span><br>
            }
          </div>
        </div>
        <div class="p-5 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
          <p class="text-[10px] uppercase tracking-widest mb-2" :style="{ color: 'var(--c-muted)' }">Toolbar Actions</p>
          <p class="text-xs mb-3" :style="{ color: 'var(--c-muted)' }">Each page declares toolbar buttons. The shell renders them in the toolbar zone when that page is active.</p>
          <div class="p-3 rounded-md font-mono text-[11px] leading-relaxed" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
            <span :style="{ color: 'var(--c-muted)' }">"toolbar"</span>: [{<br>
            &nbsp;&nbsp;<span :style="{ color: 'var(--c-muted)' }">"icon"</span>: <span :style="{ color: 'var(--c-accent)' }">"i-lucide-play"</span>,<br>
            &nbsp;&nbsp;<span :style="{ color: 'var(--c-muted)' }">"action"</span>: <span :style="{ color: 'var(--c-accent)' }">"run"</span><br>
            }]
          </div>
        </div>
      </div>
    </section>

    <!-- File structure -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Space File Structure</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Each space is its own package with a standard layout.</p>

      <div class="p-5 rounded-lg border font-mono text-xs leading-loose" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
        <p>space-code/</p>
        <p class="pl-4"><span :style="{ color: 'var(--c-accent)' }">space.manifest.json</span> <span :style="{ color: 'var(--c-muted)' }">← identity, pages, toolbar, theme</span></p>
        <p class="pl-4"><span :style="{ color: 'var(--c-accent)' }">space.config.ts</span> <span :style="{ color: 'var(--c-muted)' }">← typed config + SpaceConfig interface</span></p>
        <p class="pl-4">pages/ <span :style="{ color: 'var(--c-muted)' }">← route components (one per page)</span></p>
        <p class="pl-4">views/ <span :style="{ color: 'var(--c-muted)' }">← reusable view components</span></p>
        <p class="pl-4">components/ <span :style="{ color: 'var(--c-muted)' }">← space-specific UI</span></p>
        <p class="pl-4">composables/ <span :style="{ color: 'var(--c-muted)' }">← shared logic</span></p>
        <p class="pl-4">stores/ <span :style="{ color: 'var(--c-muted)' }">← state management</span></p>
        <p class="pl-4">tests/ <span :style="{ color: 'var(--c-muted)' }">← space tests</span></p>
      </div>
    </section>

    <!-- All spaces -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Built-in Spaces</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">{{ spaces.length }} spaces ship with Construct.</p>

      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        <div v-for="s in spaces" :key="s.id" class="p-4 rounded-lg border text-center" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
          <div class="size-10 rounded-lg mx-auto flex items-center justify-center text-sm font-bold mb-2" :style="{ background: `color-mix(in srgb, ${s.color} 15%, transparent)`, color: s.color }">
            {{ s.name[0] }}
          </div>
          <p class="text-sm font-medium">{{ s.name }}</p>
          <p class="text-[10px]" :style="{ color: 'var(--c-muted)' }">{{ s.desc }}</p>
        </div>
      </div>
    </section>
  </div>
</template>
