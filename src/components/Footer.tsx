import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()
  const [disclaimersOpen, setDisclaimersOpen] = useState(false)

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

        {/* Third-party trademark disclaimers */}
        <div className="mt-6 pt-4 border-t border-border">
          <p className="text-[10px] leading-relaxed text-muted-foreground/60 mb-2">
            Rally was created under Riot Games' "Legal Jibber Jabber" policy using assets owned by Riot Games. Riot Games does not endorse or sponsor this project.
          </p>
          <button
            onClick={() => setDisclaimersOpen(!disclaimersOpen)}
            className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground/60 hover:text-muted-foreground underline transition-colors"
          >
            {disclaimersOpen ? 'Hide' : 'View'} additional trademark disclaimers
            <ChevronDown size={12} className={`transition-transform ${disclaimersOpen ? 'rotate-180' : ''}`} />
          </button>
          {disclaimersOpen && (
            <div className="mt-2 space-y-2">
              <p className="text-[10px] leading-relaxed text-muted-foreground/60">
                Rally isn't endorsed by Epic Games and doesn't reflect the views or opinions of Epic Games or anyone officially involved in producing or managing Epic Games properties. Epic Games, Fortnite, and all associated properties are trademarks or registered trademarks of Epic Games, Inc.
              </p>
              <p className="text-[10px] leading-relaxed text-muted-foreground/60">
                Rally isn't endorsed by Valve Corporation and doesn't reflect the views or opinions of Valve or anyone officially involved in producing or managing Valve properties. Steam, Counter-Strike, and all associated properties are trademarks or registered trademarks of Valve Corporation.
              </p>
              <p className="text-[10px] leading-relaxed text-muted-foreground/60">
                Rally isn't endorsed by Sony Interactive Entertainment and doesn't reflect the views or opinions of Sony or anyone officially involved in producing or managing PlayStation properties. PlayStation and all associated properties are trademarks or registered trademarks of Sony Interactive Entertainment Inc.
              </p>
              <p className="text-[10px] leading-relaxed text-muted-foreground/60">
                Rally isn't endorsed by Microsoft Corporation and doesn't reflect the views or opinions of Microsoft or anyone officially involved in producing or managing Microsoft properties. Xbox, Minecraft, Starfield, Fallout, and all associated properties are trademarks or registered trademarks of Microsoft Corporation.
              </p>
              <p className="text-[10px] leading-relaxed text-muted-foreground/60">
                Rally isn't endorsed by Bungie, Inc. and doesn't reflect the views or opinions of Bungie or anyone officially involved in producing or managing Bungie properties. Destiny and all associated properties are trademarks or registered trademarks of Bungie, Inc.
              </p>
              <p className="text-[10px] leading-relaxed text-muted-foreground/60">
                Rally isn't endorsed by Digital Extremes Ltd. and doesn't reflect the views or opinions of Digital Extremes or anyone officially involved in producing or managing Digital Extremes properties. Warframe and all associated properties are trademarks or registered trademarks of Digital Extremes Ltd.
              </p>
              <p className="text-[10px] leading-relaxed text-muted-foreground/60">
                Rally isn't endorsed by Hello Games Ltd. and doesn't reflect the views or opinions of Hello Games or anyone officially involved in producing or managing Hello Games properties. No Man's Sky and all associated properties are trademarks or registered trademarks of Hello Games Ltd.
              </p>
              <p className="text-[10px] leading-relaxed text-muted-foreground/60">
                All game names, logos, and trademarks are the property of their respective owners. Rally is an independent platform and is not affiliated with, sponsored by, or endorsed by any game publisher or developer listed above. If you are a rights holder and have concerns about the use of your intellectual property, please refer to our <Link to="/terms" className="underline hover:text-muted-foreground transition-colors">Terms of Service</Link> and <Link to="/privacy" className="underline hover:text-muted-foreground transition-colors">Privacy Policy</Link>, or contact us at <a href="mailto:support@rally.ink" className="underline hover:text-muted-foreground transition-colors">support@rally.ink</a> and we will promptly address your request.
              </p>
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
