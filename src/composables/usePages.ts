import { ref } from 'vue'

export interface Page {
  id: string
  label: string
  group: string
}

const pages: Page[] = [
  { id: 'overview', label: 'Overview', group: 'Foundation' },
  { id: 'colors', label: 'Colors', group: 'Foundation' },
  { id: 'typography', label: 'Typography', group: 'Foundation' },
  { id: 'themes', label: 'Themes', group: 'Foundation' },
  { id: 'logo', label: 'Logo & Brand', group: 'Foundation' },
  { id: 'buttons', label: 'Buttons', group: 'Components' },
  { id: 'inputs', label: 'Inputs', group: 'Components' },
  { id: 'cards', label: 'Cards', group: 'Components' },
  { id: 'feedback', label: 'Feedback', group: 'Components' },
  { id: 'navigation', label: 'Navigation', group: 'Components' },
  { id: 'data', label: 'Data Display', group: 'Components' },
  { id: 'space', label: 'Space', group: 'Patterns' },
  { id: 'sidebar', label: 'Sidebar', group: 'Patterns' },
  { id: 'toolbar', label: 'Toolbar', group: 'Patterns' },
  { id: 'settings', label: 'Settings Page', group: 'Patterns' },
  { id: 'dashboard', label: 'Dashboard', group: 'Patterns' },
]

const currentPage = ref<string>('overview')

export function usePages() {
  return { pages, currentPage }
}
