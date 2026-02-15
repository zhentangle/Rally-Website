import { Link } from 'react-router-dom'
import { Vote, TrendingUp, Users, Trophy, Mail } from 'lucide-react'

const FEATURES = [
  {
    icon: Vote,
    title: 'Prediction Polls',
    description: 'Vote on real-world outcomes and see how your predictions stack up against the community.',
  },
  {
    icon: TrendingUp,
    title: 'Earn XP & Level Up',
    description: 'Gain experience for accurate predictions, build streaks, and climb the leaderboard.',
  },
  {
    icon: Users,
    title: 'Social Hub',
    description: 'Join debates, find your Soulmate match, play trivia, and connect in Community Rooms.',
  },
  {
    icon: Trophy,
    title: 'Achievements & Flairs',
    description: 'Unlock badges and flairs as you hit milestones. Show off your prediction prowess.',
  },
]

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
          Currently in Beta
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-primary leading-tight mb-4">
          Your Voice. Your Predictions.
          <br />
          Your Community.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Rally is the social prediction app where you vote on what happens next,
          earn XP for getting it right, and connect with a community of engaged thinkers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            App Store
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-medium hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M3.18 23.76c-.36-.17-.58-.47-.58-.88V1.12c0-.41.22-.71.58-.88l11.83 11.76L3.18 23.76zm1.44-1.46L15.9 11.99 4.62 1.7v20.6zm13.52-9.08l-2.34-1.32L13.14 12l2.66 2.1 2.34-1.32c.66-.37.66-.99 0-1.36v-.2zm-3.22-1.82L6.4 6.3l8.06 6.36-1.54-1.26z"/></svg>
            Google Play
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Want early access?{' '}
          <a href="mailto:support@rally.ink" className="text-accent hover:underline font-medium">
            Get in touch
          </a>
        </p>
      </section>

      {/* App Screenshots */}
      <section className="bg-primary py-16 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-white mb-10">
            See Rally in action
          </h2>
          <div className="flex justify-center gap-6 flex-wrap">
            <img
              src="/screenshot-feed.png"
              alt="Rally home feed with polls and hot topics"
              className="w-56 rounded-2xl shadow-2xl border border-white/10"
            />
            <img
              src="/screenshot-fairground.png"
              alt="Rally Fairground social hub with Trivia, Debates, and more"
              className="w-56 rounded-2xl shadow-2xl border border-white/10 hidden sm:block"
            />
            <img
              src="/screenshot-profile.png"
              alt="Rally profile with flairs, achievements, and influence score"
              className="w-56 rounded-2xl shadow-2xl border border-white/10 hidden md:block"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-primary mb-10">
            What makes Rally different
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-border"
              >
                <feature.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-primary mb-3">
          We'd love to hear from you
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Have questions, feedback, or want to learn more about Rally? Reach out to us or check our FAQ and support pages.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:support@rally.ink"
            className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Email Us
          </a>
          <Link
            to="/faq"
            className="px-6 py-2.5 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
          >
            View FAQ
          </Link>
        </div>
      </section>
    </div>
  )
}
