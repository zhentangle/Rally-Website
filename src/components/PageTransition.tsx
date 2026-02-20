import { useState, useEffect, useRef, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const [displayedChildren, setDisplayedChildren] = useState(children)
  const [isVisible, setIsVisible] = useState(true)
  const prevPathname = useRef(pathname)

  useEffect(() => {
    if (pathname !== prevPathname.current) {
      prevPathname.current = pathname
      setIsVisible(false)

      const timeout = setTimeout(() => {
        setDisplayedChildren(children)
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsVisible(true)
          })
        })
      }, 150)

      return () => clearTimeout(timeout)
    } else {
      setDisplayedChildren(children)
    }
  }, [pathname, children])

  return (
    <div className={`transition-opacity duration-150 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {displayedChildren}
    </div>
  )
}
