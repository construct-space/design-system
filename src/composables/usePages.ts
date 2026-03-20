import { ref } from 'vue'

export interface Page {
  id: string
  label: string
  group: string
}

const pages: Page[] = [
  // Foundation — tokens, visual language
  { id: 'overview', label: 'Overview', group: 'Foundation' },
  { id: 'colors', label: 'Colors', group: 'Foundation' },
  { id: 'typography', label: 'Typography', group: 'Foundation' },
  { id: 'themes', label: 'Themes', group: 'Foundation' },
  { id: 'logo', label: 'Logo & Brand', group: 'Foundation' },

  // Inputs — form elements
  { id: 'buttons', label: 'Buttons', group: 'Inputs' },
  { id: 'inputs', label: 'Text Fields', group: 'Inputs' },
  { id: 'controls', label: 'Controls', group: 'Inputs' },

  // Display — showing data & feedback
  { id: 'cards', label: 'Cards', group: 'Display' },
  { id: 'data', label: 'Data', group: 'Display' },
  { id: 'feedback', label: 'Feedback', group: 'Display' },
  { id: 'toast', label: 'Toast & Scroll', group: 'Display' },

  // Navigation — moving around
  { id: 'navigation', label: 'Navigation', group: 'Navigation' },
  { id: 'overlays', label: 'Overlays', group: 'Navigation' },

  // SDK — how to use @construct-space/sdk
  { id: 'sdk', label: 'SDK', group: 'SDK' },

  // Patterns — Construct-specific
  { id: 'space', label: 'Space', group: 'Patterns' },
  { id: 'sidebar', label: 'Sidebar', group: 'Patterns' },
  { id: 'toolbar', label: 'Toolbar', group: 'Patterns' },
  { id: 'dashboard', label: 'Dashboard', group: 'Patterns' },
  { id: 'settings', label: 'Settings', group: 'Patterns' },
]

const currentPage = ref<string>('overview')

export function usePages() {
  return { pages, currentPage }
}
