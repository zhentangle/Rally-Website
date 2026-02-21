import { useEffect, useRef } from 'react'
import { useTheme } from '@/context/ThemeContext'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const { isDark } = useTheme()
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor || isTouch) return

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

    const playGunshot = () => {
      const ctx = new AudioContext()
      const t = ctx.currentTime

      // Layer 1: Initial crack — bright, sharp noise burst
      const crack = ctx.createBufferSource()
      const crackBuf = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate)
      const crackData = crackBuf.getChannelData(0)
      for (let i = 0; i < crackData.length; i++) {
        crackData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / crackData.length, 8)
      }
      crack.buffer = crackBuf
      const crackGain = ctx.createGain()
      crackGain.gain.setValueAtTime(0.6, t)
      crackGain.gain.exponentialRampToValueAtTime(0.001, t + 0.04)
      const crackFilter = ctx.createBiquadFilter()
      crackFilter.type = 'highpass'
      crackFilter.frequency.value = 1500
      crack.connect(crackFilter).connect(crackGain).connect(ctx.destination)
      crack.start(t)
      crack.stop(t + 0.05)

      // Layer 2: Bass thump — low oscillator hit
      const bass = ctx.createOscillator()
      bass.type = 'sine'
      bass.frequency.setValueAtTime(150, t)
      bass.frequency.exponentialRampToValueAtTime(30, t + 0.15)
      const bassGain = ctx.createGain()
      bassGain.gain.setValueAtTime(0.5, t)
      bassGain.gain.exponentialRampToValueAtTime(0.001, t + 0.15)
      bass.connect(bassGain).connect(ctx.destination)
      bass.start(t)
      bass.stop(t + 0.15)

      // Layer 3: Tail — filtered noise decay
      const tail = ctx.createBufferSource()
      const tailBuf = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate)
      const tailData = tailBuf.getChannelData(0)
      for (let i = 0; i < tailData.length; i++) {
        tailData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / tailData.length, 2)
      }
      tail.buffer = tailBuf
      const tailFilter = ctx.createBiquadFilter()
      tailFilter.type = 'bandpass'
      tailFilter.frequency.setValueAtTime(800, t)
      tailFilter.frequency.exponentialRampToValueAtTime(200, t + 0.25)
      tailFilter.Q.value = 1
      const tailGain = ctx.createGain()
      tailGain.gain.setValueAtTime(0.2, t)
      tailGain.gain.exponentialRampToValueAtTime(0.001, t + 0.3)
      tail.connect(tailFilter).connect(tailGain).connect(ctx.destination)
      tail.start(t)
      tail.stop(t + 0.3)

      setTimeout(() => ctx.close(), 400)
    }

    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [role="button"], input, select, textarea, summary')) return

      playGunshot()

      // Muzzle flash on crosshair
      cursor.classList.add('cursor-flash')
      setTimeout(() => cursor.classList.remove('cursor-flash'), 100)

      // Screen shake
      document.body.classList.remove('screen-shake')
      void document.body.offsetWidth
      document.body.classList.add('screen-shake')
      setTimeout(() => document.body.classList.remove('screen-shake'), 150)

      // Create bullet hole
      const hole = document.createElement('div')
      hole.className = 'bullet-hole'
      hole.style.left = `${e.clientX}px`
      hole.style.top = `${e.clientY + window.scrollY}px`
      document.body.appendChild(hole)

      setTimeout(() => {
        hole.classList.add('bullet-hole-fade')
      }, 2000)
      setTimeout(() => {
        hole.remove()
      }, 3000)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onMouseOver)
    document.addEventListener('mouseout', onMouseOut)
    document.addEventListener('click', onClick)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      document.removeEventListener('mouseout', onMouseOut)
      document.removeEventListener('click', onClick)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [])

  const stroke = isDark ? '#ffffff' : '#000000'

  if (isTouch) return null

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
