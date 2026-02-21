import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Vote, TrendingUp, Users, Trophy, Mail, Repeat, Shield, Scale, Gamepad2, ArrowRightLeft, Truck, Ban, Fingerprint, AlertTriangle, X, Infinity, Sparkles, Dices, CheckCircle, Swords, Eye, EyeOff, UserPlus, Radio, Zap, Copy } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'
import { useAnimatedPresence } from '@/hooks/useAnimatedPresence'

// Flip to false to remove Riot integration screenshots from the marquee (API compliance)
const SHOW_RIOT = false

const FEATURES = [
  {
    icon: Repeat,
    title: 'Game Trade',
    description: 'P2P marketplace for in-game items — weapons, armor, apparel, plans. Trade with fellow gamers directly.',
    light: '/light-trade.png',
    dark: '/dark-trade.png',
  },
  {
    icon: Shield,
    title: 'Community Couriers',
    description: 'Volunteer middlemen who facilitate trades so both sides stay safe. Apply to become a courier and earn Influence for successful deliveries.',
    light: '/light-notifications.png',
    dark: '/dark-notifications.png',
  },
  {
    icon: Swords,
    title: 'Squad Up',
    description: 'Find teammates instantly. Create a squad call for any game, set your party size, share your gamertag, and fill open slots before the timer runs out.',
    light: '/light-squad-create.png',
    dark: '/dark-squad-create.png',
  },
  {
    icon: Vote,
    title: 'Prediction Polls',
    description: 'Vote on real-world outcomes and see how your predictions stack up against the community.',
    light: '/light-feed.png',
    dark: '/dark-feed.png',
  },
  {
    icon: Infinity,
    title: 'Influence',
    description: 'Your merit score, your level, and your currency — all in one. Earn Influence from trades, predictions, and streaks, then spend it on trade slots and cosmetics.',
    light: '/light-profile.png',
    dark: '/dark-profile.png',
  },
  {
    icon: Sparkles,
    title: 'Flairs & Feed Control',
    description: 'Customize your identity with extensive flair options. Your flairs shape what shows up in your feed so you see content that matters to you.',
    light: '/light-home.png',
    dark: '/dark-home.png',
  },
  {
    icon: Dices,
    title: 'Avatar Market',
    description: 'Roll for procedurally generated avatars, trade them with other players, and find your perfect look through our avatar marketplace.',
    light: '/light-market.png',
    dark: '/dark-market.png',
  },
  {
    icon: Users,
    title: 'Social Hub',
    description: 'Trade in-game items starting with Fallout 76 and more games coming soon. Plus DMs, group chats, polls, and a community feed.',
    light: '/light-squad-feed.png',
    dark: '/dark-squad-feed.png',
  },
]

function HowTradingWorksModal({ mounted, visible, onClose }: { mounted: boolean; visible: boolean; onClose: () => void }) {
  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`relative bg-card text-card-foreground rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-border transition-all duration-200 ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-6 h-6 text-accent" />
            <h2 className="text-lg font-bold text-foreground">How Game Trading Works</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-overlay transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Zero Tolerance */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Ban className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Zero Tolerance for Scamming</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Any attempt to scam another user results in an <strong className="text-foreground">instant and permanent ban</strong>. No warnings, no appeals. We use AI-powered checks alongside human review and maintain an integrated scammers list to keep the marketplace safe.
            </p>
          </div>

          {/* Ban Evasion */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Fingerprint className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Ban Evasion Detection</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Device fingerprints are collected to detect and prevent ban circumvention. New accounts created after a ban will be identified and permanently banned.
            </p>
          </div>

          {/* How it works */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-3">
              <ArrowRightLeft className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">How Trading Works</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>&#8226;</span>List your in-game items for trade or sale</li>
              <li className="flex gap-2"><span>&#8226;</span>Browse other players' listings and send trade proposals</li>
              <li className="flex gap-2"><span>&#8226;</span>Accept, reject, or counter-offer on proposals you receive</li>
              <li className="flex gap-2"><span>&#8226;</span>Both parties confirm when the trade is complete</li>
            </ul>
          </div>

          {/* Couriers & Adjudicators */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Truck className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Community Couriers & Adjudicators</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>&#8226;</span>Couriers are community volunteers who act as trusted middlemen</li>
              <li className="flex gap-2"><span>&#8226;</span>You can optionally request a courier for any trade, including cash trades</li>
              <li className="flex gap-2"><span>&#8226;</span>Couriers only facilitate in-game item transfers — they do NOT handle real money</li>
              <li className="flex gap-2"><span>&#8226;</span>If a dispute arises, a community adjudicator reviews the trade and makes a ruling</li>
              <li className="flex gap-2"><span>&#8226;</span>Apply to become a courier to earn more Influence and build your reputation</li>
            </ul>
          </div>

          {/* Influence Rewards */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Influence</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Influence is your merit score, your level, and your in-app currency — all in one. Everyone involved in a completed trade (buyer, seller, and courier) earns Influence. Your level scales with it, and you can spend it to unlock more trade slots and purchase in-app cosmetics.
            </p>
          </div>

          {/* Merit-based */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Merit-Based Trading</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Trading access is merit-based. Complete trades successfully to grow your reputation. Your gamertag is checked against known scammer databases on sign-up — flagged names are instantly and permanently banned.
            </p>
          </div>

          {/* Cash disclaimer */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Cash Transactions — No Platform Support</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Rally does NOT process, hold, or handle cash payments of any kind.</strong> All monetary transactions occur entirely outside the platform. Rally is not responsible for payment disputes, chargebacks, or non-payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function GetInTouchModal({ mounted, visible, onClose }: { mounted: boolean; visible: boolean; onClose: () => void }) {
  const [platform, setPlatform] = useState<'apple' | 'android' | null>(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function handleClose() {
    onClose()
    setTimeout(() => {
      setPlatform(null)
      setEmail('')
      setSubmitted(false)
      setLoading(false)
      setError('')
    }, 250)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (!platform) {
      setError('Please select your platform.')
      return
    }

    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/early-access', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), platform }),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }
      setSubmitted(true)
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose} />
      <div className={`relative bg-card text-card-foreground rounded-2xl max-w-md w-full shadow-2xl border border-border transition-all duration-200 ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
        {/* Header */}
        <div className="border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-accent" />
            <h2 className="text-lg font-bold text-foreground">Early Access</h2>
          </div>
          <button onClick={handleClose} className="p-1 rounded-lg hover:bg-overlay transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-4">
              <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">You're on the list!</h3>
              <p className="text-sm text-muted-foreground mb-6">
                We'll reach out to <strong className="text-foreground">{email}</strong> with early access details for the {platform === 'apple' ? 'Apple App Store' : 'Google Play Store'}.
              </p>
              <button
                onClick={handleClose}
                className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Select your platform
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => { setPlatform('apple'); setError('') }}
                    className={`glass-card flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      platform === 'apple'
                        ? 'border-accent bg-accent/10'
                        : 'border-border hover:border-muted-foreground/30'
                    }`}
                  >
                    <svg viewBox="0 0 814 1000" className={`w-8 h-8 ${platform === 'apple' ? 'fill-accent' : 'fill-muted-foreground'}`}>
                      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57.8-155.5-127.4c-58.3-81.2-105.9-207.6-105.9-328.3 0-193.1 125.5-295.6 249.2-295.6 65.7 0 120.4 43.2 161.5 43.2 39.2 0 100.4-45.8 174.5-45.8 28.2 0 129.6 2.6 196.3 99.9zM554.1 159.4c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8.7 15.6 1.3 18.1 2.6.5 6.4.6 10.2.6 45.9 0 104.4-30.5 139.5-70.6z" />
                    </svg>
                    <span className={`text-sm font-medium ${platform === 'apple' ? 'text-accent' : 'text-muted-foreground'}`}>
                      Apple
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => { setPlatform('android'); setError('') }}
                    className={`glass-card flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                      platform === 'android'
                        ? 'border-accent bg-accent/10'
                        : 'border-border hover:border-muted-foreground/30'
                    }`}
                  >
                    <svg viewBox="0 0 24 24" className={`w-8 h-8 ${platform === 'android' ? 'fill-accent' : 'fill-muted-foreground'}`}>
                      <path d="M17.523 15.34a1.003 1.003 0 0 0 0-2.006 1.003 1.003 0 0 0 0 2.006m-11.046 0a1.003 1.003 0 0 0 0-2.006 1.003 1.003 0 0 0 0 2.006m11.405-6.02 2.006-3.459a.416.416 0 1 0-.721-.416l-2.033 3.506A12.24 12.24 0 0 0 12 7.984a12.24 12.24 0 0 0-5.134 1.067L4.833 5.545a.416.416 0 0 0-.721.416l2.006 3.458C2.695 11.196.436 14.86 0 19.08h24c-.436-4.22-2.695-7.884-6.118-9.76" />
                    </svg>
                    <span className={`text-sm font-medium ${platform === 'android' ? 'text-accent' : 'text-muted-foreground'}`}>
                      Android
                    </span>
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="store-email" className="block text-sm font-medium text-foreground mb-1.5">
                  {platform === 'apple'
                    ? 'Apple ID email'
                    : platform === 'android'
                    ? 'Google Play email'
                    : 'Store email'}
                </label>
                <p className="text-xs text-muted-foreground mb-2">
                  {platform
                    ? `Enter the email linked to your ${platform === 'apple' ? 'Apple ID' : 'Google Play account'}. You won't be able to access the alpha without it.`
                    : 'Select a platform above, then enter your store email.'}
                </p>
                <input
                  id="store-email"
                  type="email"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError('') }}
                  placeholder={
                    platform === 'apple'
                      ? 'your@apple-id-email.com'
                      : platform === 'android'
                      ? 'your@gmail.com'
                      : 'Select a platform first'
                  }
                  disabled={!platform}
                  className="w-full px-4 py-2.5 rounded-lg bg-surface border border-border text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                />
              </div>

              {error && (
                <p className="text-sm text-foreground flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!platform || !email.trim() || loading}
              >
                {loading ? 'Submitting...' : 'Request Early Access'}
              </button>

              <p className="text-xs text-center text-muted-foreground">
                We'll send you an invite through {platform === 'apple' ? 'TestFlight' : platform === 'android' ? 'Google Play' : 'your platform'}'s testing program.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

function GamertagPrivacyModal({ mounted, visible, onClose }: { mounted: boolean; visible: boolean; onClose: () => void }) {
  const { isDark } = useTheme()

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`relative bg-card text-card-foreground rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-border transition-all duration-200 ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <EyeOff className="w-6 h-6 text-accent" />
            <h2 className="text-lg font-bold text-foreground">How Gamertag Privacy Works</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-overlay transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Overview */}
          <div className="rounded-xl p-4 bg-accent/10 border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <EyeOff className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-accent">One Toggle, Full Privacy</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Enable gamertag privacy in your settings and your gamertags are <strong className="text-foreground">hidden everywhere across the app</strong> — your profile, trade listings, and all public views show <strong className="text-foreground">******</strong> instead.
            </p>
          </div>

          {/* How it still works */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Privacy Without Friction</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>&#8226;</span>Squad leaders receive your gamertag via notification when you join their squad</li>
              <li className="flex gap-2"><span>&#8226;</span>Trade partners get your gamertag through PM or your assigned courier</li>
              <li className="flex gap-2"><span>&#8226;</span>Your gamertag stays visible to people you follow</li>
              <li className="flex gap-2"><span>&#8226;</span>Tap to copy gamertags directly from notifications and PMs — no manual typing needed</li>
              <li className="flex gap-2"><span>&#8226;</span>Your gamertag is never exposed publicly — only shared with the people who need it</li>
            </ul>
          </div>

          {/* Screenshots showing ****** in action */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">What Others See</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              When privacy is enabled, your gamertags appear as <strong className="text-foreground">******</strong> across all public screens.
            </p>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
              <div className="shrink-0 w-48">
                <p className="text-xs text-muted-foreground text-center mb-2">Settings</p>
                <img
                  src={isDark ? '/dark-privacy-settings.png' : '/light-privacy-settings.png'}
                  alt="Settings with Show platform tags toggle"
                  className="w-full rounded-xl border border-border snap-start"
                />
              </div>
              <div className="shrink-0 w-48">
                <p className="text-xs text-muted-foreground text-center mb-2">Profile</p>
                <img
                  src={isDark ? '/dark-privacy-profile.png' : '/light-privacy-profile.png'}
                  alt="Profile with hidden gamertags"
                  className="w-full rounded-xl border border-border snap-start"
                />
              </div>
              <div className="shrink-0 w-48">
                <p className="text-xs text-muted-foreground text-center mb-2">Game Trade</p>
                <img
                  src={isDark ? '/dark-privacy-trade.png' : '/light-privacy-trade.png'}
                  alt="Trade listings with hidden gamertags"
                  className="w-full rounded-xl border border-border snap-start"
                />
              </div>
              <div className="shrink-0 w-48">
                <p className="text-xs text-muted-foreground text-center mb-2">Squad Up</p>
                <img
                  src={isDark ? '/dark-privacy-squad.png' : '/light-privacy-squad.png'}
                  alt="Squad Up with hidden gamertags"
                  className="w-full rounded-xl border border-border snap-start"
                />
              </div>
              <div className="shrink-0 w-48">
                <p className="text-xs text-muted-foreground text-center mb-2">Tap to Copy</p>
                <img
                  src={isDark ? '/dark-privacy-copy.png' : '/light-privacy-copy.png'}
                  alt="Tap to copy gamertag notification"
                  className="w-full rounded-xl border border-border snap-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SquadUpModal({ mounted, visible, onClose }: { mounted: boolean; visible: boolean; onClose: () => void }) {
  const { isDark } = useTheme()

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-200 ${visible ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`relative bg-card text-card-foreground rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-border transition-all duration-200 ${visible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <Swords className="w-6 h-6 text-accent" />
            <h2 className="text-lg font-bold text-foreground">How Squad Up Works</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-overlay transition-colors">
            <X className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Overview */}
          <div className="rounded-xl p-4 bg-accent/10 border border-accent/20">
            <div className="flex items-center gap-2 mb-2">
              <Swords className="w-5 h-5 text-accent" />
              <h3 className="font-semibold text-accent">Real-Time LFG</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Post your game, invite friends or find randoms, and fill your squad in real time. Gamertags auto-shared, slots update live — no more "drop your GT in chat" hassle.
            </p>
          </div>

          {/* Creation Flow */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Gamepad2 className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Creation Flow</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>&#8226;</span>Pick a game from the catalog, then choose mode (ranked, casual, etc.) and platform (PS / Xbox / PC)</li>
              <li className="flex gap-2"><span>&#8226;</span>Your gamertag auto-fills from saved tags — no retyping every time</li>
              <li className="flex gap-2"><span>&#8226;</span>Add an optional note like "Looking for chill teammates…"</li>
              <li className="flex gap-2"><span>&#8226;</span>Set an expiry window — 15 minutes up to 4 hours</li>
              <li className="flex gap-2"><span>&#8226;</span>Invite followers via a multi-select modal before posting</li>
              <li className="flex gap-2"><span>&#8226;</span>Live preview shows your slot, invited users, and open dashed slots</li>
            </ul>
          </div>

          {/* Broadcasting & Discovery */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Radio className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Broadcasting & Discovery</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>&#8226;</span>Home tab banner — persistent top banner showing your active squads with real-time member count</li>
              <li className="flex gap-2"><span>&#8226;</span>Search tab — dedicated "Squads" tab with full-text search, active squads ranked first</li>
              <li className="flex gap-2"><span>&#8226;</span>Feed — squad posts appear as cards in the main feed alongside polls and trades</li>
            </ul>
          </div>

          {/* Joining */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-3">
              <UserPlus className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Joining a Squad</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>&#8226;</span>Direct join — tap the squad card and join with your gamertag</li>
              <li className="flex gap-2"><span>&#8226;</span>Invite join — receive an in-app notification + push notification with Accept / Decline buttons</li>
              <li className="flex gap-2"><span>&#8226;</span>Accept auto-fills your gamertag (smart-matched by platform and game), or manual entry as fallback</li>
            </ul>
          </div>

          {/* Real-Time */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Real-Time Sync</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>&#8226;</span>Live member sync — members joining or leaving update instantly across all devices</li>
              <li className="flex gap-2"><span>&#8226;</span>Notifications for every join/leave sent to the creator and all members</li>
              <li className="flex gap-2"><span>&#8226;</span>Squad auto-closes when full and reopens if someone leaves</li>
            </ul>
          </div>

          {/* Gamertag Display */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Copy className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">Gamertag Display</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><span>&#8226;</span>Members' gamertags shown in the expanded overlay — tap to copy to clipboard</li>
              <li className="flex gap-2"><span>&#8226;</span>Respects gamertag privacy settings (masked if user opted out)</li>
              <li className="flex gap-2"><span>&#8226;</span>League of Legends squads fetch and display Riot ranked stats (tier, LP, win rate)</li>
            </ul>
          </div>

          {/* Screenshots */}
          <div className="rounded-xl p-4 bg-overlay border border-border">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-foreground" />
              <h3 className="font-semibold text-foreground">See It in Action</h3>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x snap-mandatory">
              <div className="shrink-0 w-48">
                <p className="text-xs text-muted-foreground text-center mb-2">Create</p>
                <img
                  src={isDark ? '/dark-squad-create.png' : '/light-squad-create.png'}
                  alt="Create a Squad Up call"
                  className="w-full rounded-xl border border-border snap-start"
                />
              </div>
              <div className="shrink-0 w-48">
                <p className="text-xs text-muted-foreground text-center mb-2">Feed</p>
                <img
                  src={isDark ? '/dark-squad-feed.png' : '/light-squad-feed.png'}
                  alt="Squad Up feed with open slots"
                  className="w-full rounded-xl border border-border snap-start"
                />
              </div>
              <div className="shrink-0 w-48">
                <p className="text-xs text-muted-foreground text-center mb-2">Home Banner</p>
                <img
                  src={isDark ? '/dark-home.png' : '/light-home.png'}
                  alt="Home tab with active squad banner"
                  className="w-full rounded-xl border border-border snap-start"
                />
              </div>
              <div className="shrink-0 w-48">
                <p className="text-xs text-muted-foreground text-center mb-2">Tap to Copy</p>
                <img
                  src={isDark ? '/dark-squad-copy.png' : '/light-squad-copy.png'}
                  alt="Tap to copy gamertag from profile"
                  className="w-full rounded-xl border border-border snap-start"
                />
              </div>
              <div className="shrink-0 w-48">
                <p className="text-xs text-muted-foreground text-center mb-2">Privacy</p>
                <img
                  src={isDark ? '/dark-privacy-squad.png' : '/light-privacy-squad.png'}
                  alt="Squad Up with gamertag privacy"
                  className="w-full rounded-xl border border-border snap-start"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ALL_SCREENSHOTS = [
  { light: '/light-squad-feed.png', dark: '/dark-squad-feed.png', alt: 'Rally Squad Up feed with open party slots' },
  { light: '/light-home.png', dark: '/dark-home.png', alt: 'Rally home with active squads and hot topics' },
  { light: '/light-riot-squad.png', dark: '/dark-riot-squad.png', alt: 'League of Legends Squad Up with ranked stats and polls', riot: true },
  { light: '/light-profile.png', dark: '/dark-profile.png', alt: 'Rally profile with gamertag privacy, influence score, and level', riot: true },
  { light: '/light-squad-create.png', dark: '/dark-squad-create.png', alt: 'Create a Squad Up call with game selection and gamertag' },
  { light: '/light-riot-stats.png', dark: '/dark-riot-stats.png', alt: 'League of Legends player stats with top champions and match history', riot: true },
  { light: '/light-feed.png', dark: '/dark-feed.png', alt: 'Rally home feed with polls and hot topics' },
  { light: '/light-trade.png', dark: '/dark-trade.png', alt: 'Rally Game Trade marketplace with gamertag privacy' },
  { light: '/light-notifications.png', dark: '/dark-notifications.png', alt: 'Rally notifications with trade completions and courier requests' },
  { light: '/light-login.png', dark: '/dark-login.png', alt: 'Rally login screen with Apple, Google, and Steam sign-in options' },
]

const SCREENSHOTS = SHOW_RIOT ? ALL_SCREENSHOTS : ALL_SCREENSHOTS.filter(s => !s.riot)

export default function LandingPage() {
  const tradingModal = useAnimatedPresence(200)
  const privacyModal = useAnimatedPresence(200)
  const squadUpModal = useAnimatedPresence(200)
  const getInTouchModal = useAnimatedPresence(200)
  const lightbox = useAnimatedPresence(300)
  const [lightboxData, setLightboxData] = useState<{ src: string; title: string } | null>(null)
  const { isDark } = useTheme()

  // Magnifier state
  const [magnifier, setMagnifier] = useState<{
    active: boolean
    imgSrc: string
    imgRect: DOMRect
    mouseX: number
    mouseY: number
  } | null>(null)
  const magnifierRef = useRef(magnifier)
  magnifierRef.current = magnifier

  const MAGNIFIER_SIZE = 180
  const ZOOM = 2.5

  const handleMarqueeMouseDown = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    // Disable magnifier on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return
    e.preventDefault()
    const img = e.currentTarget
    const rect = img.getBoundingClientRect()
    setMagnifier({
      active: true,
      imgSrc: img.src,
      imgRect: rect,
      mouseX: e.clientX,
      mouseY: e.clientY,
    })
  }, [])

  useEffect(() => {
    if (!magnifier?.active) return

    const onMouseMove = (e: MouseEvent) => {
      setMagnifier((prev) => prev ? { ...prev, mouseX: e.clientX, mouseY: e.clientY } : null)
    }
    const onMouseUp = () => {
      setMagnifier(null)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }
  }, [magnifier?.active])

  const openLightbox = useCallback((src: string, title: string) => {
    setLightboxData({ src, title })
    lightbox.open()
  }, [lightbox])

  const closeLightbox = useCallback(() => {
    lightbox.close()
    setTimeout(() => setLightboxData(null), 350)
  }, [lightbox])

  useEffect(() => {
    if (!lightbox.mounted) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightbox.mounted, closeLightbox])

  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
          Closed Alpha
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4">
          Play. Trade. Compete.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Rally is the social media app built for gamers. Trade without getting scammed? Squad up within seconds? Level up and meet new people who play just like you!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-[40px]"
            />
          </a>
          <a
            href="https://play.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <img
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
              alt="Get it on Google Play"
              className="h-[60px] -my-[10px]"
            />
          </a>
        </div>

        <p className="text-sm text-muted-foreground">
          Want early access?{' '}
          <button onClick={getInTouchModal.open} className="text-accent hover:underline font-medium">
            Get in touch
          </button>
        </p>
      </section>

      {/* App Screenshots — infinite marquee */}
      <section className="bg-surface-alt py-16 overflow-hidden relative">
        <h2 className="text-2xl font-bold text-center text-foreground mb-10">
          See Rally in action
        </h2>
        <div
          className={`flex w-max animate-marquee ${magnifier?.active ? '[animation-play-state:paused]' : 'hover:[animation-play-state:paused]'}`}
        >
          {[...SCREENSHOTS, ...SCREENSHOTS].map((screenshot, i) => (
            <img
              key={`${screenshot.alt}-${i}`}
              src={isDark ? screenshot.dark : screenshot.light}
              alt={screenshot.alt}
              draggable={false}
              onMouseDown={handleMarqueeMouseDown}
              data-cursor-magnify
              className="w-48 sm:w-56 rounded-2xl shadow-2xl border border-border shrink-0 mx-3 select-none"
            />
          ))}
        </div>

        {/* Magnifier lens */}
        {magnifier?.active && (
          <div
            className="fixed z-50 rounded-full border-2 border-white/60 shadow-2xl pointer-events-none"
            style={{
              width: MAGNIFIER_SIZE,
              height: MAGNIFIER_SIZE,
              left: magnifier.mouseX - MAGNIFIER_SIZE / 2,
              top: magnifier.mouseY - MAGNIFIER_SIZE / 2,
              backgroundImage: `url(${magnifier.imgSrc})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${magnifier.imgRect.width * ZOOM}px ${magnifier.imgRect.height * ZOOM}px`,
              backgroundPosition: `${-((magnifier.mouseX - magnifier.imgRect.left) * ZOOM - MAGNIFIER_SIZE / 2)}px ${-((magnifier.mouseY - magnifier.imgRect.top) * ZOOM - MAGNIFIER_SIZE / 2)}px`,
            }}
          />
        )}
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <img src={isDark ? '/logo-dark.png' : '/logo.png'} alt="Rally" className="w-10 h-10 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-3">
              built for Gamers, by Gamers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A social hub, trading market, LFG — all in one app.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((feature) => (
              <button
                key={feature.title}
                type="button"
                onClick={() => openLightbox(isDark ? feature.dark : feature.light, feature.title)}
                className="glass-card p-5 bg-card rounded-xl border border-border text-left"
              >
                <feature.icon className="feature-icon w-7 h-7 text-foreground mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
              </button>
            ))}
          </div>

          {/* Anti-Scam + CTA row */}
          <div className="mt-8 rounded-2xl bg-card border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-base font-bold mb-2 flex items-center gap-2 text-foreground">
                <Shield className="w-5 h-5 text-foreground" />
                Advanced Anti-Scam Protection
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Integrated blacklist cross-referenced on every sign-up. Device fingerprinting
                and IP tracking catch ban evasion automatically. AI screening + human adjudicators
                identify bad actors fast — zero tolerance, permanent bans.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-overlay text-xs text-muted-foreground border border-border">
                  <Fingerprint className="w-3 h-3" /> Device Fingerprinting
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-overlay text-xs text-muted-foreground border border-border">
                  <Ban className="w-3 h-3" /> Integrated Blacklist
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-overlay text-xs text-muted-foreground border border-border">
                  <Scale className="w-3 h-3" /> AI + Human Review
                </span>
              </div>
            </div>
            <div className="shrink-0 self-center">
              <button
                onClick={tradingModal.open}
                className="px-5 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                How it works
              </button>
            </div>
          </div>

          {/* Gamertag Privacy */}
          <div className="mt-4 rounded-2xl bg-card border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-base font-bold mb-2 flex items-center gap-2 text-foreground">
                <EyeOff className="w-5 h-5 text-accent" />
                Gamertag Privacy
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Hide your gamertag from your public profile — it stays hidden everywhere across the app.
                Trading and Squad Up still work seamlessly: squad leaders receive your gamertag via
                notification when you join, and trade partners get it through PM or your assigned courier.
                Full privacy, zero friction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-overlay text-xs text-muted-foreground border border-border">
                  <EyeOff className="w-3 h-3" /> One-Toggle Privacy
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-overlay text-xs text-muted-foreground border border-border">
                  <Eye className="w-3 h-3" /> Visible to Those You Follow
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-overlay text-xs text-muted-foreground border border-border">
                  <EyeOff className="w-3 h-3" /> Hidden Everywhere
                </span>
              </div>
            </div>
            <div className="shrink-0 self-center">
              <button
                onClick={privacyModal.open}
                className="px-5 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                How it works
              </button>
            </div>
          </div>

          {/* Squad Up */}
          <div className="mt-4 rounded-2xl bg-card border border-border p-6 sm:p-8 flex flex-col sm:flex-row items-start gap-6">
            <div className="flex-1">
              <h3 className="text-base font-bold mb-2 flex items-center gap-2 text-foreground">
                <Swords className="w-5 h-5 text-accent" />
                Squad Up
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                Post your game, invite friends or find randoms, and fill your squad in real time.
                Gamertags auto-shared, slots update live — no more scrambling for party invites.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-overlay text-xs text-muted-foreground border border-border">
                  <Zap className="w-3 h-3" /> Real-Time Sync
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-overlay text-xs text-muted-foreground border border-border">
                  <Copy className="w-3 h-3" /> Seamless Sharing
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-overlay text-xs text-muted-foreground border border-border">
                  <Gamepad2 className="w-3 h-3" /> Multi-Platform
                </span>
              </div>
            </div>
            <div className="shrink-0 self-center">
              <button
                onClick={squadUpModal.open}
                className="px-5 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                How it works
              </button>
            </div>
          </div>
        </div>
      </section>

      <HowTradingWorksModal mounted={tradingModal.mounted} visible={tradingModal.visible} onClose={tradingModal.close} />
      <GamertagPrivacyModal mounted={privacyModal.mounted} visible={privacyModal.visible} onClose={privacyModal.close} />
      <SquadUpModal mounted={squadUpModal.mounted} visible={squadUpModal.visible} onClose={squadUpModal.close} />
      <GetInTouchModal mounted={getInTouchModal.mounted} visible={getInTouchModal.visible} onClose={getInTouchModal.close} />

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <Mail className="w-10 h-10 text-accent mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-3">
          We'd love to hear from you
        </h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Have questions, feedback, or want to learn more about Rally? Reach out to us or check our FAQ and support pages.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={getInTouchModal.open}
            className="px-6 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Early Access
          </button>
          <Link
            to="/faq"
            className="px-6 py-2.5 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-colors"
          >
            View FAQ
          </Link>
        </div>
      </section>

      {/* Feature screenshot lightbox */}
      {lightbox.mounted && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
            lightbox.visible ? 'bg-black/80 backdrop-blur-sm' : 'bg-black/0 backdrop-blur-0'
          }`}
          onClick={closeLightbox}
        >
          <div
            className={`relative max-w-sm w-full mx-4 transition-all duration-300 ${
              lightbox.visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-7 h-7" />
            </button>
            <p className="text-white text-sm font-medium text-center mb-3">{lightboxData?.title}</p>
            <img
              src={lightboxData?.src}
              alt={lightboxData?.title}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  )
}
