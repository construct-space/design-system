// Construct Design System — shared JS for all pages

// Logo SVG
const LOGO_SVG = `<svg width="32" height="32" viewBox="0 0 533 533" fill="currentColor"><path d="M266.5 410.156C230.912 410.156 199.106 402.203 171.081 386.297C143.056 370.39 121.036 348.519 105.022 320.684C89.0072 292.848 81 261.256 81 225.909C81 190.12 89.0072 158.308 105.022 130.472C121.036 102.636 143.056 80.7655 171.081 64.8593C199.106 48.9531 230.912 41 266.5 41C302.087 41 333.671 48.9531 361.252 64.8593C389.277 80.7655 411.297 102.636 427.311 130.472C443.326 158.308 451.555 190.12 452 225.909C452 261.256 443.77 292.848 427.311 320.684C411.297 348.519 389.277 370.39 361.252 386.297C333.671 402.203 302.087 410.156 266.5 410.156ZM266.5 363.763C292.301 363.763 315.433 357.798 335.896 345.868C356.359 333.939 372.373 317.591 383.939 296.824C395.505 276.058 401.288 252.42 401.288 225.909C401.288 199.399 395.505 175.761 383.939 154.994C372.373 133.786 356.359 117.217 335.896 105.287C315.433 93.3579 292.301 87.393 266.5 87.393C240.699 87.393 217.567 93.3579 197.104 105.287C176.641 117.217 160.405 133.786 148.394 154.994C136.828 175.761 131.045 199.399 131.045 225.909C131.045 252.42 136.828 276.058 148.394 296.824C160.405 317.591 176.641 333.939 197.104 345.868C217.567 357.798 240.699 363.763 266.5 363.763Z"/><path d="M378.22 451.578C393.077 451.578 405.121 460.85 405.121 472.289C405.121 483.727 393.077 493 378.22 493H160.945C146.089 493 134.044 483.727 134.044 472.289C134.044 460.85 146.089 451.578 160.945 451.578H378.22Z"/></svg>`;

// All Construct themes
const THEMES = [
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
];

// Track current theme
let _currentThemeId = null;

function applyTheme(theme) {
  const root = document.documentElement;
  const isDark = theme.mode === 'dark';

  // Set all core CSS variables on documentElement
  root.style.setProperty('--app-background', theme.bg);
  root.style.setProperty('--app-foreground', theme.fg);
  root.style.setProperty('--app-muted', theme.muted);
  root.style.setProperty('--app-accent', theme.accent);
  root.style.setProperty('--app-accent-foreground', theme.accentFg);

  // Derive surface/card/border/input using simple fixed offsets
  const [bgR, bgG, bgB] = hexToRgb(theme.bg);

  if (isDark) {
    // For dark themes: lighten by adding fixed amounts
    root.style.setProperty('--app-border', rgbToHex(
      Math.min(255, bgR + 30), Math.min(255, bgG + 30), Math.min(255, bgB + 30)
    ));
    root.style.setProperty('--app-surface', rgbToHex(
      Math.min(255, bgR + 10), Math.min(255, bgG + 10), Math.min(255, bgB + 10)
    ));
    root.style.setProperty('--app-card', rgbToHex(
      Math.min(255, bgR + 16), Math.min(255, bgG + 16), Math.min(255, bgB + 16)
    ));
    root.style.setProperty('--app-input-bg', rgbToHex(
      Math.min(255, bgR + 24), Math.min(255, bgG + 24), Math.min(255, bgB + 24)
    ));
  } else {
    // For light themes: darken by subtracting fixed amounts
    root.style.setProperty('--app-border', rgbToHex(
      Math.max(0, bgR - 20), Math.max(0, bgG - 20), Math.max(0, bgB - 20)
    ));
    root.style.setProperty('--app-surface', rgbToHex(
      Math.max(0, bgR - 5), Math.max(0, bgG - 5), Math.max(0, bgB - 5)
    ));
    root.style.setProperty('--app-card', theme.bg);
    root.style.setProperty('--app-input-bg', rgbToHex(
      Math.max(0, bgR - 12), Math.max(0, bgG - 12), Math.max(0, bgB - 12)
    ));
  }

  // Toggle body dark class based on theme mode
  if (isDark) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  // Preserve other classes like min-h-screen
  if (!document.body.classList.contains('min-h-screen')) {
    document.body.classList.add('min-h-screen');
  }

  // Track and re-render switcher to show active state
  _currentThemeId = theme.id;
  renderThemeSwitcher();
}

function hexToRgb(hex) {
  const h = hex.replace('#', '');
  return [parseInt(h.substr(0, 2), 16), parseInt(h.substr(2, 2), 16), parseInt(h.substr(4, 2), 16)];
}

function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => Math.round(x).toString(16).padStart(2, '0')).join('');
}

// Sidebar generator
function renderSidebar(activePage) {
  const nav = document.getElementById('ds-sidebar');
  if (!nav) return;

  const pages = [
    { group: 'Foundation', items: [
      { href: 'index.html', label: 'Overview' },
      { href: 'colors.html', label: 'Colors' },
      { href: 'typography.html', label: 'Typography' },
      { href: 'themes.html', label: 'Themes' },
      { href: 'logo.html', label: 'Logo & Brand' },
    ]},
    { group: 'Components', items: [
      { href: 'buttons.html', label: 'Buttons' },
      { href: 'inputs.html', label: 'Inputs' },
      { href: 'cards.html', label: 'Cards' },
      { href: 'feedback.html', label: 'Feedback' },
      { href: 'navigation.html', label: 'Navigation' },
      { href: 'data.html', label: 'Data Display' },
    ]},
    { group: 'Patterns', items: [
      { href: 'sidebar-pattern.html', label: 'Sidebar' },
      { href: 'toolbar-pattern.html', label: 'Toolbar' },
      { href: 'settings-pattern.html', label: 'Settings Page' },
      { href: 'dashboard-pattern.html', label: 'Dashboard' },
    ]},
  ];

  nav.innerHTML = `
    <div class="px-5 py-5 flex items-center gap-2">
      <span style="color:var(--app-accent)">${LOGO_SVG.replace('width="32" height="32"', 'width="24" height="24"')}</span>
      <span class="text-sm font-bold tracking-wider" style="color:var(--app-accent)">CONSTRUCT<span style="color:var(--app-foreground)">:DS</span></span>
    </div>
    ${pages.map(g => `
      <div class="px-3 mb-2">
        <div class="px-2 py-1 text-[10px] uppercase tracking-widest" style="color:var(--app-muted)">${g.group}</div>
        ${g.items.map(i => `<a href="${i.href}" class="block px-2 py-1.5 text-sm rounded-md transition-colors ${activePage === i.href ? '' : 'hover:text-[var(--app-foreground)]'}" style="${activePage === i.href ? `color:var(--app-accent);background:color-mix(in srgb, var(--app-accent) 10%, transparent)` : `color:var(--app-muted)`}">${i.label}</a>`).join('')}
      </div>
    `).join('')}
    <div class="mt-auto px-5 py-4 text-xs" style="color:var(--app-muted)">v0.5.0</div>
  `;
}

// Theme switcher
function renderThemeSwitcher() {
  const el = document.getElementById('ds-theme-switcher');
  if (!el) return;
  el.innerHTML = THEMES.map(t => {
    const isActive = _currentThemeId === t.id;
    const activeRing = isActive ? `outline:2px solid ${t.accent};outline-offset:2px;` : '';
    const activeOpacity = isActive ? '1' : '0.7';
    return `<button onclick="applyTheme(THEMES.find(x=>x.id==='${t.id}'))" class="px-2 py-1 rounded text-[10px] font-medium border transition-colors" style="border-color:${isActive ? t.accent : 'var(--app-border)'};color:var(--app-muted);background:${t.bg};opacity:${activeOpacity};${activeRing}" title="${t.name}">
      <span style="color:${t.accent}">${t.name}</span>
    </button>`;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  // Apply default theme (vs-dark, index 2) on page load
  applyTheme(THEMES[2]);
});
