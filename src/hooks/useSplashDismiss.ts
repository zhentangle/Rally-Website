import { useEffect } from 'react'

export function useSplashDismiss(minDisplayMs = 600) {
  useEffect(() => {
    const splash = document.getElementById('splash')
    if (!splash) return

    const timer = setTimeout(() => {
      splash.style.opacity = '0'
      splash.style.visibility = 'hidden'
      setTimeout(() => splash.remove(), 400)
    }, minDisplayMs)

    return () => clearTimeout(timer)
  }, [])
}
