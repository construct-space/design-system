<script setup lang="ts">
const components = [
  { name: 'Accordion', props: 'items, type, defaultValue', page: 'Controls' },
  { name: 'Avatar', props: 'src, alt, fallback, size', page: 'Sidebar' },
  { name: 'Badge', props: 'color, variant, size, label', page: 'Feedback' },
  { name: 'Button', props: 'icon, variant, color, size, loading, disabled', page: 'Buttons' },
  { name: 'Card', props: 'title, description, variant', page: 'Cards' },
  { name: 'Checkbox', props: 'modelValue, label, disabled', page: 'Text Fields' },
  { name: 'ConfirmationModal', props: 'modelValue, title, message, confirmColor', page: 'Overlays' },
  { name: 'ContextMenu', props: 'items', page: 'Overlays' },
  { name: 'DashboardPanel', props: 'grow, width, collapsible, resizable', page: 'Dashboard' },
  { name: 'Dropdown', props: 'items', page: 'Toolbar' },
  { name: 'DropdownMenu', props: 'items, content', page: 'Toolbar' },
  { name: 'FormField', props: 'label, name, error, required, layout', page: 'Text Fields' },
  { name: 'Icon', props: 'name', page: '—' },
  { name: 'Input', props: 'modelValue, type, placeholder, size, icon', page: 'Text Fields' },
  { name: 'Modal', props: 'open, title, description, fullscreen', page: 'Overlays' },
  { name: 'Pagination', props: 'modelValue, total, pageCount', page: 'Navigation' },
  { name: 'PanelSection', props: 'label, collapsible', page: 'Settings' },
  { name: 'Popover', props: 'open, content', page: 'Overlays' },
  { name: 'PropRow', props: 'label, cols', page: 'Settings' },
  { name: 'ScrollArea', props: '—', page: 'Toast & Scroll' },
  { name: 'Select', props: 'modelValue, options, placeholder, size', page: 'Controls' },
  { name: 'SelectMenu', props: 'modelValue, options, searchable, size', page: 'Controls' },
  { name: 'Slideover', props: 'open, title, side', page: 'Overlays' },
  { name: 'Slider', props: 'modelValue, min, max, step, size', page: 'Controls' },
  { name: 'Switch', props: 'modelValue, label, disabled, size', page: 'Controls' },
  { name: 'Tabs', props: 'modelValue, items', page: 'Navigation' },
  { name: 'Textarea', props: 'modelValue, placeholder, rows, autoresize', page: 'Text Fields' },
  { name: 'Toast', props: '—', page: 'Toast & Scroll' },
  { name: 'Tooltip', props: 'text, content', page: 'Sidebar' },
]

const composables = [
  { name: 'useToast', desc: 'Show toast notifications', usage: 'toast.success("Saved")' },
  { name: 'useToolbar', desc: 'Set page toolbar items & breadcrumbs', usage: 'setPageItems([...])' },
  { name: 'useSidebar', desc: 'Control sidebar panel state', usage: 'enterSpace() / exitSpace()' },
  { name: 'useAppTheme', desc: 'Theme switching', usage: 'setTheme("vs-dark")' },
  { name: 'useSpaces', desc: 'List and query installed spaces', usage: 'getSpace("code")' },
  { name: 'useSpaceShortcuts', desc: 'Register keyboard shortcuts', usage: 'useSpaceShortcuts([...])' },
  { name: 'useAuth', desc: 'Current user & auth state', usage: 'authStore.user' },
  { name: 'useApi', desc: 'HTTP client with auth', usage: 'get("/api/data")' },
  { name: 'useStorage', desc: 'Persistent key-value store', usage: 'set("key", value)' },
  { name: 'useContextService', desc: 'Operator connection, AI chat, tools', usage: 'chatStream(req, onChunk)' },
  { name: 'useProjectContext', desc: 'Current project path and state', usage: 'projectPath.value' },
  { name: 'useSpaceContext', desc: 'Cross-space context (code, git, tasks...)', usage: 'codeContext.value' },
  { name: 'usePermissions', desc: 'RBAC permission checks', usage: 'can("project", "edit")' },
  { name: 'useNotifications', desc: 'Real-time notifications via WebSocket', usage: 'notifications.value' },
]

const stores = [
  { name: 'useAuthStore', desc: 'User auth, login, logout' },
  { name: 'useProjectStore', desc: 'Projects, open/create/update' },
  { name: 'usePreferencesStore', desc: 'User preferences, theme, editor settings' },
  { name: 'useSettingsStore', desc: 'App-wide settings by group' },
  { name: 'usePinnedStore', desc: 'Pinned items (spaces, projects, tasks)' },
  { name: 'usePanelsStore', desc: 'Panel layouts and state per space' },
  { name: 'useNotificationsStore', desc: 'Notification list and unread count' },
]
</script>

<template>
  <div>
    <div class="mb-10">
      <p class="text-[10px] uppercase tracking-widest mb-1" :style="{ color: 'var(--c-accent)' }">SDK</p>
      <h1 class="text-3xl font-bold">@construct-space/sdk</h1>
      <p class="text-sm mt-1" :style="{ color: 'var(--c-muted)' }">TypeScript types and declarations for building Construct spaces. Runtime is injected by the host app.</p>
    </div>

    <!-- Install -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Install</h2>
      <div class="p-4 rounded-lg font-mono text-sm" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
        <span :style="{ color: 'var(--c-muted)' }">$</span> bun add @construct-space/sdk
      </div>
      <p class="text-xs mt-2" :style="{ color: 'var(--c-muted)' }">The SDK is type-only at build time. Runtime implementations are provided by <code class="font-mono">window.__CONSTRUCT__['@construct/sdk']</code> when running inside Construct.</p>
    </section>

    <!-- Usage -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Usage</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Import components and composables directly from the SDK.</p>
      <div class="space-y-3">
        <div class="p-4 rounded-lg font-mono text-xs leading-relaxed" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
          <p :style="{ color: 'var(--c-muted)' }">// Components</p>
          <p><span :style="{ color: 'var(--c-accent)' }">import</span> { Button, Modal, Input, Badge } <span :style="{ color: 'var(--c-accent)' }">from</span> <span :style="{ color: 'var(--c-muted)' }">'@construct-space/sdk'</span></p>
        </div>
        <div class="p-4 rounded-lg font-mono text-xs leading-relaxed" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
          <p :style="{ color: 'var(--c-muted)' }">// Composables</p>
          <p><span :style="{ color: 'var(--c-accent)' }">import</span> { useToast, useToolbar, useSpaces } <span :style="{ color: 'var(--c-accent)' }">from</span> <span :style="{ color: 'var(--c-muted)' }">'@construct-space/sdk'</span></p>
        </div>
        <div class="p-4 rounded-lg font-mono text-xs leading-relaxed" :style="{ background: 'var(--c-input)', color: 'var(--c-fg)' }">
          <p :style="{ color: 'var(--c-muted)' }">// Types only</p>
          <p><span :style="{ color: 'var(--c-accent)' }">import</span> <span :style="{ color: 'var(--c-accent)' }">type</span> { SpaceInfo, ToolbarItem, PinnedItem } <span :style="{ color: 'var(--c-accent)' }">from</span> <span :style="{ color: 'var(--c-muted)' }">'@construct-space/sdk'</span></p>
        </div>
      </div>
    </section>

    <!-- Components table -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Components</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">{{ components.length }} UI components available via the SDK. All accept typed props.</p>
      <div class="rounded-lg border overflow-hidden" :style="{ borderColor: 'var(--c-border)' }">
        <table class="w-full text-sm">
          <thead>
            <tr :style="{ background: 'var(--c-surface)' }">
              <th class="text-left px-4 py-2 text-xs font-medium" :style="{ color: 'var(--c-muted)' }">Component</th>
              <th class="text-left px-4 py-2 text-xs font-medium" :style="{ color: 'var(--c-muted)' }">Key Props</th>
              <th class="text-left px-4 py-2 text-xs font-medium" :style="{ color: 'var(--c-muted)' }">DS Page</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in components" :key="c.name" class="border-t" :style="{ borderColor: 'var(--c-border)' }">
              <td class="px-4 py-2 font-mono text-xs" :style="{ color: 'var(--c-accent)' }">{{ c.name }}</td>
              <td class="px-4 py-2 font-mono text-[11px]" :style="{ color: 'var(--c-muted)' }">{{ c.props }}</td>
              <td class="px-4 py-2 text-xs">{{ c.page }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Composables table -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Composables</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Reactive hooks for state, services, and shell integration.</p>
      <div class="space-y-2">
        <div v-for="c in composables" :key="c.name" class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
          <div class="flex items-baseline gap-3 mb-1">
            <code class="text-xs font-mono font-bold" :style="{ color: 'var(--c-accent)' }">{{ c.name }}()</code>
            <span class="text-xs" :style="{ color: 'var(--c-muted)' }">{{ c.desc }}</span>
          </div>
          <code class="text-[11px] font-mono" :style="{ color: 'var(--c-muted)' }">{{ c.usage }}</code>
        </div>
      </div>
    </section>

    <!-- Stores -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Stores</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">Pinia stores provided by the host. Access via the SDK.</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div v-for="s in stores" :key="s.name" class="p-3 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
          <code class="text-xs font-mono font-bold" :style="{ color: 'var(--c-accent)' }">{{ s.name }}()</code>
          <p class="text-[11px] mt-0.5" :style="{ color: 'var(--c-muted)' }">{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <!-- Exports -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">Entry Points</h2>
      <div class="space-y-2">
        <div v-for="ep in [
          { path: '@construct-space/sdk', desc: 'Components, composables, stores, types, utils' },
          { path: '@construct-space/sdk/types', desc: 'Pure type imports (auth, context, project, design...)' },
          { path: '@construct-space/sdk/schemas', desc: 'Zod validation schemas' },
          { path: '@construct-space/sdk/testing', desc: 'Test utilities and mocks' },
        ]" :key="ep.path" class="flex items-baseline gap-3 p-3 rounded-lg border" :style="{ borderColor: 'var(--c-border)' }">
          <code class="text-xs font-mono shrink-0" :style="{ color: 'var(--c-accent)' }">{{ ep.path }}</code>
          <span class="text-xs" :style="{ color: 'var(--c-muted)' }">{{ ep.desc }}</span>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-1">How It Works</h2>
      <p class="text-sm mb-4" :style="{ color: 'var(--c-muted)' }">The SDK is a contract between spaces and the Construct host.</p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
          <p class="text-xs font-semibold mb-1">Build Time</p>
          <p class="text-[11px]" :style="{ color: 'var(--c-muted)' }">SDK provides TypeScript types. Your editor gets autocomplete, prop validation, and type checking.</p>
        </div>
        <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
          <p class="text-xs font-semibold mb-1">Runtime</p>
          <p class="text-[11px]" :style="{ color: 'var(--c-muted)' }">Construct host injects real Vue components and composables via <code class="font-mono">window.__CONSTRUCT__</code>. No bundling needed.</p>
        </div>
        <div class="p-4 rounded-lg border" :style="{ borderColor: 'var(--c-border)', background: 'var(--c-card)' }">
          <p class="text-xs font-semibold mb-1">Version</p>
          <p class="text-[11px]" :style="{ color: 'var(--c-muted)' }">SDK version tracks Construct releases. <code class="font-mono">minConstructVersion</code> in your manifest ensures compatibility.</p>
        </div>
      </div>
    </section>
  </div>
</template>
