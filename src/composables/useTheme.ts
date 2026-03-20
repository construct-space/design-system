import { ref } from 'vue'
import { themes, applyTheme, type Theme } from '../themes'

const currentTheme = ref<Theme>(themes[2]) // vs-dark

export function useTheme() {
  function setTheme(t: Theme) {
    currentTheme.value = t
    applyTheme(t)
  }

  return { themes, currentTheme, setTheme, applyTheme }
}
