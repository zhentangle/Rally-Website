import { useLocation, Link } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'
import { ArrowLeft, Smartphone } from 'lucide-react'

const CONTENT_LABELS: Record<string, string> = {
  poll: 'Poll',
  media: 'Post',
  squad: 'Squad',
  profile: 'Profile',
}

export default function DeepLinkPage() {
  const { pathname } = useLocation()
  const { isDark } = useTheme()

  const segments = pathname.split('/').filter(Boolean)
  const type = segments[0] ?? ''
  const id = segments[1] ?? ''
  const label = CONTENT_LABELS[type] ?? 'Content'

  const appUrl = type && id ? `rally://${type}/${id}` : null

  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <img
        src={isDark ? '/logo-dark.png' : '/logo.png'}
        alt="Rally"
        className="h-16 w-16 rounded-2xl mx-auto mb-6"
      />
      <h1 className="text-2xl font-bold text-foreground mb-2">
        View this {label} on Rally
      </h1>
      <p className="text-muted-foreground mb-8">
        This {label.toLowerCase()} is on Rally, the social app for gamers.
        Download the app to view it.
      </p>

      {appUrl && (
        <a
          href={appUrl}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-opacity mb-4 w-full justify-center"
        >
          <Smartphone size={18} />
          Open in Rally
        </a>
      )}

      <p className="text-sm text-muted-foreground mb-8">
        Coming soon to iOS and Android.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} />
        Back to rally.ink
      </Link>
    </div>
  )
}
