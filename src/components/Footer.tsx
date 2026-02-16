import { Link } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-3">
              <img src={isDark ? '/logo-dark.png' : '/logo.png'} alt="Rally" className="h-7 w-7 rounded-lg" />
              <span className="font-semibold text-primary">Rally</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The social app built for gamers.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3">Resources</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
              <Link to="/support" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Support</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-3">Legal</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link>
            </nav>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Rally. All rights reserved.
          </p>
          <a
            href="mailto:support@rally.ink"
            className="text-xs text-muted-foreground hover:text-accent transition-colors"
          >
            support@rally.ink
          </a>
        </div>
      </div>
    </footer>
  )
}
