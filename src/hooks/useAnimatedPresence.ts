import { useState, useCallback } from 'react'

export function useAnimatedPresence(duration = 200) {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  const open = useCallback(() => {
    setMounted(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setVisible(true)
      })
    })
  }, [])

  const close = useCallback(() => {
    setVisible(false)
    setTimeout(() => setMounted(false), duration)
  }, [duration])

  return { mounted, visible, open, close }
}
