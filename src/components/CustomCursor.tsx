import { useEffect, useRef } from 'react'
import { useTheme } from '@/context/ThemeContext'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const { isDark } = useTheme()

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isMagnify = target.closest('[data-cursor-magnify]')
      if (isMagnify) {
        cursor.classList.add('cursor-magnify')
        cursor.classList.remove('cursor-rotated')
        return
      }
      cursor.classList.remove('cursor-magnify')
      const isComponent = target.closest(
        'a, button, [role="button"], input, select, textarea, summary, .glass-card, [data-cursor-hover]'
      )
      if (isComponent) {
        cursor.classList.add('cursor-rotated')
      }
    }

    const onMouseOut = (e: MouseEvent) => {
      const target = e.relatedTarget as HTMLElement | null
      if (!target) {
        cursor.classList.remove('cursor-rotated')
        cursor.classList.remove('cursor-magnify')
        return
      }
      const isMagnify = target.closest('[data-cursor-magnify]')
      if (!isMagnify) {
        cursor.classList.remove('cursor-magnify')
      }
      const isComponent = target.closest(
        'a, button, [role="button"], input, select, textarea, summary, .glass-card, [data-cursor-hover]'
      )
      if (!isComponent) {
        cursor.classList.remove('cursor-rotated')
      }
    }

    const onMouseLeave = () => {
      cursor.style.opacity = '0'
    }

    const onMouseEnter = () => {
      cursor.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [])

  const stroke = isDark ? '#ffffff' : '#000000'

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{ opacity: 0 }}
    >
      {/* Crosshair cursor (default) */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-svg cursor-crosshair-svg"
      >
        <circle cx="14" cy="14" r="10" fill="none" stroke={stroke} strokeWidth="2" />
        <line x1="14" y1="2" x2="14" y2="7" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="21" x2="14" y2="26" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="14" x2="7" y2="14" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <line x1="21" y1="14" x2="26" y2="14" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
      {/* Magnifying glass cursor (marquee hover) */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-magnify-svg"
      >
        <circle cx="12" cy="12" r="8" fill="none" stroke={stroke} strokeWidth="2" />
        <line x1="17.5" y1="17.5" x2="25" y2="25" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
        <line x1="9" y1="12" x2="15" y2="12" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="9" x2="12" y2="15" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  )
}
