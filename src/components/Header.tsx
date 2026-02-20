import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTheme } from '@/context/ThemeContext'

const NAV_LINKS = [
  { to: '/about', label: 'About' },
  { to: '/faq', label: 'FAQ' },
  { to: '/support', label: 'Support' },
]

const LEGAL_LINKS = [
  { to: '/privacy', label: 'Privacy' },
  { to: '/terms', label: 'Terms' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [legalOpen, setLegalOpen] = useState(false)
  const [mobileLegalOpen, setMobileLegalOpen] = useState(false)
  const legalRef = useRef<HTMLDivElement>(null)
  const { pathname } = useLocation()
  const { isDark, toggleTheme } = useTheme()

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (legalRef.current && !legalRef.current.contains(e.target as Node)) {
        setLegalOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <img src={isDark ? '/logo-dark.png' : '/logo.png'} alt="Rally" className="h-8 w-8 rounded-lg" />
          <span className="font-semibold text-lg text-primary">Rally</span>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                'text-sm font-medium transition-colors hover:text-accent',
                pathname === link.to ? 'text-accent' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="relative" ref={legalRef}>
            <button
              onClick={() => setLegalOpen(!legalOpen)}
              className={cn(
                'flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent',
                LEGAL_LINKS.some((l) => pathname === l.to) ? 'text-accent' : 'text-muted-foreground'
              )}
            >
              Legal
              <ChevronDown size={14} className={cn('transition-transform', legalOpen && 'rotate-180')} />
            </button>
            <div className={cn(
              'absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 rounded-lg border border-border bg-background shadow-lg py-1 transition-all duration-150 origin-top',
              legalOpen
                ? 'opacity-100 scale-100 pointer-events-auto'
                : 'opacity-0 scale-95 pointer-events-none'
            )}>
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setLegalOpen(false)}
                  className={cn(
                    'block px-4 py-2 text-sm font-medium transition-colors hover:bg-muted',
                    pathname === link.to ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-overlay transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-overlay transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div className={cn(
        'md:hidden absolute left-0 right-0 top-full border-t bg-background overflow-hidden transition-all duration-200 shadow-lg',
        menuOpen ? 'max-h-96 opacity-100 border-border' : 'max-h-0 opacity-0 border-transparent'
      )}>
        <nav className="flex flex-col px-4 py-3 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  'py-2 px-3 rounded-lg text-sm font-medium transition-colors',
                  pathname === link.to
                    ? 'bg-muted text-accent'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setMobileLegalOpen(!mobileLegalOpen)}
              className={cn(
                'flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium transition-colors',
                LEGAL_LINKS.some((l) => pathname === l.to)
                  ? 'bg-muted text-accent'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              Legal
              <ChevronDown size={14} className={cn('transition-transform', mobileLegalOpen && 'rotate-180')} />
            </button>
            <div className={cn(
              'flex flex-col gap-1 overflow-hidden transition-all duration-150',
              mobileLegalOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
            )}>
              {LEGAL_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => { setMenuOpen(false); setMobileLegalOpen(false) }}
                  className={cn(
                    'py-2 px-3 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.to
                      ? 'bg-muted text-accent'
                      : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
    </header>
  )
}
