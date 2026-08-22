import { ref } from 'vue'

const THEME_KEY = 'whoami_theme'

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY)
  if (saved === 'light' || saved === 'dark') {
    return saved
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const theme = ref(getInitialTheme())

function applyTheme(val) {
  const root = document.documentElement
  if (val === 'dark') {
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
  }
  localStorage.setItem(THEME_KEY, val)
}

// Apply initially
applyTheme(theme.value)

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(theme.value)
  }

  function setTheme(val) {
    if (val === 'light' || val === 'dark') {
      theme.value = val
      applyTheme(val)
    }
  }

  return {
    theme,
    toggleTheme,
    setTheme
  }
}
