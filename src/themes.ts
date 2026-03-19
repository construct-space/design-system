export interface Theme {
  id: string
  name: string
  mode: 'light' | 'dark'
  bg: string
  fg: string
  muted: string
  accent: string
  accentFg: string
}

export const themes: Theme[] = [
  { id: 'auto', name: 'Auto (System)', mode: 'dark', bg: '#0f172a', fg: '#f8fafc', muted: '#64748b', accent: '#34C759', accentFg: '#ffffff' },
  { id: 'vs', name: 'Light', mode: 'light', bg: '#ffffff', fg: '#1e293b', muted: '#64748b', accent: '#34C759', accentFg: '#ffffff' },
  { id: 'vs-dark', name: 'Dark', mode: 'dark', bg: '#1e1e1e', fg: '#d4d4d4', muted: '#6b7280', accent: '#34C759', accentFg: '#ffffff' },
  { id: 'synthwave-84', name: "Synthwave '84", mode: 'dark', bg: '#262335', fg: '#ffffff', muted: '#848bbd', accent: '#ff7edb', accentFg: '#000000' },
  { id: 'dracula', name: 'Dracula', mode: 'dark', bg: '#282a36', fg: '#f8f8f2', muted: '#6272a4', accent: '#bd93f9', accentFg: '#000000' },
  { id: 'one-dark', name: 'One Dark', mode: 'dark', bg: '#282c34', fg: '#abb2bf', muted: '#5c6370', accent: '#61afef', accentFg: '#000000' },
  { id: 'night-owl', name: 'Night Owl', mode: 'dark', bg: '#011627', fg: '#d6deeb', muted: '#637777', accent: '#82aaff', accentFg: '#000000' },
  { id: 'github-dark', name: 'GitHub Dark', mode: 'dark', bg: '#0d1117', fg: '#c9d1d9', muted: '#8b949e', accent: '#58a6ff', accentFg: '#000000' },
  { id: 'monokai', name: 'Monokai', mode: 'dark', bg: '#272822', fg: '#f8f8f2', muted: '#75715e', accent: '#f92672', accentFg: '#ffffff' },
  { id: 'nord', name: 'Nord', mode: 'dark', bg: '#2e3440', fg: '#d8dee9', muted: '#616e88', accent: '#88c0d0', accentFg: '#000000' },
  { id: 'cobalt2', name: 'Cobalt2', mode: 'dark', bg: '#193549', fg: '#ffffff', muted: '#0088ff', accent: '#ffc600', accentFg: '#000000' },
  { id: 'material', name: 'Material', mode: 'dark', bg: '#263238', fg: '#eeffff', muted: '#546e7a', accent: '#89ddff', accentFg: '#000000' },
  { id: 'tokyo-night', name: 'Tokyo Night', mode: 'dark', bg: '#1a1b26', fg: '#c0caf5', muted: '#565f89', accent: '#7aa2f7', accentFg: '#ffffff' },
  { id: 'hc-black', name: 'High Contrast', mode: 'dark', bg: '#000000', fg: '#ffffff', muted: '#808080', accent: '#ffff00', accentFg: '#000000' },
  { id: 'hc-light', name: 'HC Light', mode: 'light', bg: '#ffffff', fg: '#000000', muted: '#808080', accent: '#0000ff', accentFg: '#ffffff' },
]

export function applyTheme(theme: Theme) {
  const s = document.documentElement.style
  const isDark = theme.mode === 'dark'
  const [r, g, b] = hexToRgb(theme.bg)

  s.setProperty('--c-bg', theme.bg)
  s.setProperty('--c-fg', theme.fg)
  s.setProperty('--c-muted', theme.muted)
  s.setProperty('--c-accent', theme.accent)
  s.setProperty('--c-accent-fg', theme.accentFg)
  s.setProperty('--c-border', isDark ? off(r, g, b, 30) : off(r, g, b, -20))
  s.setProperty('--c-surface', isDark ? off(r, g, b, 10) : off(r, g, b, -5))
  s.setProperty('--c-card', isDark ? off(r, g, b, 16) : theme.bg)
  s.setProperty('--c-input', isDark ? off(r, g, b, 24) : off(r, g, b, -12))
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace('#', '')
  return [parseInt(h.substring(0, 2), 16), parseInt(h.substring(2, 4), 16), parseInt(h.substring(4, 6), 16)]
}

function off(r: number, g: number, b: number, n: number): string {
  const c = (v: number) => Math.max(0, Math.min(255, v + n))
  return '#' + [c(r), c(g), c(b)].map(v => v.toString(16).padStart(2, '0')).join('')
}
