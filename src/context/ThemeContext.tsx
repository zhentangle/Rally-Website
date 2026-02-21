import { createContext, useContext, useEffect, useState, useCallback, type ReactNode } from 'react'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextValue {
  theme: Theme
  isDark: boolean
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function showThemeSplash(targetDark: boolean, onReady: () => void) {
  const bg = targetDark ? '#000000' : '#ffffff'
  const logoSrc = targetDark ? '/logo-dark.png' : '/logo.png'
  const sheenColor = targetDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.1)'

  const overlay = document.createElement('div')
  overlay.style.cssText = `
    position:fixed;inset:0;z-index:99999;
    display:flex;align-items:center;justify-content:center;
    background:${bg};opacity:0;transition:opacity 0.18s ease;
  `

  const wrapper = document.createElement('div')
  wrapper.style.cssText = 'position:relative;overflow:hidden;border-radius:24px;'

  const img = document.createElement('img')
  img.src = logoSrc
  img.alt = 'Rally'
  img.width = 120
  img.height = 120
  img.style.display = 'block'

  const sheen = document.createElement('div')
  sheen.style.cssText = `
    position:absolute;inset:0;
    background:linear-gradient(105deg,transparent 40%,${sheenColor} 50%,transparent 60%);
    animation:splash-sheen 1.4s ease-in-out 0.2s infinite;
  `

  wrapper.append(img, sheen)
  overlay.appendChild(wrapper)
  document.body.appendChild(overlay)

  // Fade in
  requestAnimationFrame(() => {
    overlay.style.opacity = '1'
  })

  // Once opaque, apply the theme change and then fade out
  setTimeout(() => {
    onReady()
    setTimeout(() => {
      overlay.style.opacity = '0'
      setTimeout(() => overlay.remove(), 200)
    }, 350)
  }, 200)
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('rally-theme') as Theme) || 'system'
    }
    return 'system'
  })

  const systemDark = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)').matches
    : false

  const [systemIsDark, setSystemIsDark] = useState(systemDark)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const isDark = theme === 'dark' || (theme === 'system' && systemIsDark)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  const setTheme = (t: Theme) => {
    setThemeState(t)
    localStorage.setItem('rally-theme', t)
  }

  const toggleTheme = useCallback(() => {
    const targetDark = !isDark
    showThemeSplash(targetDark, () => {
      setTheme(targetDark ? 'dark' : 'light')
    })
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
