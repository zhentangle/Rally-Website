import { Link } from 'react-router-dom'
import { Mail, User, BarChart3, Shield, Wrench, MessageSquare, HelpCircle } from 'lucide-react'

const CATEGORIES = [
  {
    icon: User,
    label: 'Account',
    description: 'Username changes, login issues, account deletion, security concerns',
    subject: 'Account Issue',
  },
  {
    icon: BarChart3,
    label: 'Voting & Polls',
    description: 'Prediction resolution, vote disputes, poll creation, XP questions',
    subject: 'Voting & Polls',
  },
  {
    icon: Shield,
    label: 'Privacy',
    description: 'Data requests, Secret Ballot, privacy settings, data deletion',
    subject: 'Privacy Concern',
  },
  {
    icon: Wrench,
    label: 'Technical',
    description: 'App crashes, notifications, uploads, performance issues',
    subject: 'Technical Issue',
  },
  {
    icon: MessageSquare,
    label: 'Feedback',
    description: 'Feature requests, suggestions, general feedback about Rally',
    subject: 'Feedback',
  },
  {
    icon: HelpCircle,
    label: 'Other',
    description: 'Anything else — billing, partnerships, press inquiries',
    subject: 'Support Request',
  },
]

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">Support</h1>
      <p className="text-muted-foreground mb-10">
        Need help? Choose a category below or email us directly.
      </p>

      {/* Email CTA */}
      <div className="bg-muted/50 border border-border rounded-xl p-6 mb-10 text-center">
        <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
        <h2 className="font-semibold text-primary mb-1">Email Us</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Our team typically responds within 24 hours.
        </p>
        <a
          href="mailto:support@rally.ink"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
        >
          support@rally.ink
        </a>
      </div>

      {/* Category Cards */}
      <h2 className="font-semibold text-primary mb-4">What do you need help with?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {CATEGORIES.map((cat) => (
          <a
            key={cat.label}
            href={`mailto:support@rally.ink?subject=${encodeURIComponent(cat.subject)}`}
            className="flex gap-4 p-4 border border-border rounded-lg hover:border-accent/30 hover:bg-muted/30 transition-colors group"
          >
            <cat.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent shrink-0 mt-0.5 transition-colors" />
            <div>
              <h3 className="text-sm font-medium text-foreground">{cat.label}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">{cat.description}</p>
            </div>
          </a>
        ))}
      </div>

      {/* FAQ Link */}
      <div className="text-center pt-6 border-t border-border">
        <p className="text-sm text-muted-foreground mb-3">
          Looking for quick answers? Check our FAQ.
        </p>
        <Link
          to="/faq"
          className="inline-flex px-5 py-2.5 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
        >
          View FAQ
        </Link>
      </div>
    </div>
  )
}
