export const TOS_VERSION = '1.6.0'
export const TOS_EFFECTIVE_DATE = '2026-02-15'

const TOC = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'eligibility', label: '2. Eligibility' },
  { id: 'the-service', label: '3. The Service' },
  { id: 'user-conduct', label: '4. User Conduct' },
  { id: 'political-content', label: '5. Political Content' },
  { id: 'subscriptions', label: '6. Subscriptions and Purchases' },
  { id: 'virtual-items', label: '7. Virtual Items & Rally Score' },
  { id: 'game-trade', label: '8. Game Trade (Fairground Trading)' },
  { id: 'research', label: '9. Research Participation' },
  { id: 'intellectual-property', label: '10. Intellectual Property' },
  { id: 'disclaimers', label: '11. Disclaimers' },
  { id: 'liability', label: '12. Limitation of Liability' },
  { id: 'indemnification', label: '13. Indemnification' },
  { id: 'termination', label: '14. Termination' },
  { id: 'third-party', label: '15. Third-Party Services' },
  { id: 'dmca', label: '16. DMCA and Copyright' },
  { id: 'force-majeure', label: '17. Force Majeure' },
  { id: 'dispute-resolution', label: '18. Dispute Resolution' },
  { id: 'general', label: '19. General Provisions' },
  { id: 'contact', label: '20. Contact' },
]

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-8 text-center">
        Version {TOS_VERSION} | Effective: {TOS_EFFECTIVE_DATE}
      </p>

      {/* Table of Contents */}
      <nav className="mb-12 rounded-lg border border-border bg-muted/40 p-6">
        <h2 className="text-lg font-semibold text-primary mb-4">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-1.5 text-sm">
          {TOC.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="text-accent hover:underline"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 1. Acceptance of Terms */}
      <section id="acceptance" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          By accessing or using Rally ("Service"), you agree to be bound by
          these Terms of Service ("Terms"). If you do not agree to these Terms,
          do not use the Service.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          We may modify these Terms at any time and for any reason, at our sole
          discretion. Changes become effective immediately upon posting within the
          app. Your continued use of the Service after any modification constitutes
          your binding acceptance of the revised Terms. It is your responsibility
          to review the Terms periodically. If you do not agree to updated Terms,
          your sole remedy is to stop using the Service and delete your account.
        </p>
      </section>

      {/* 2. Eligibility */}
      <section id="eligibility" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">2. Eligibility</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">2.1 Age Requirements</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              You must be at least 18 years old to use Rally. By creating an
              account, you represent and warrant that you are at least 18 years
              of age. Rally is not intended for anyone under the age of 18.
            </p>
          </div>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">2.2 Account Registration</h3>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>One account per person (enforced via verification)</li>
            <li>You must provide accurate information</li>
            <li>You are responsible for account security</li>
            <li>Sharing accounts is prohibited</li>
          </ul>
        </div>
      </section>

      {/* 3. The Service */}
      <section id="the-service" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">3. The Service</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">3.1 Core Features</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">Rally provides:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Micro-poll creation and participation</li>
            <li>Social feed and community features</li>
            <li>Identity verification for enhanced features</li>
            <li>Research participation opportunities</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">3.2 Service Modifications</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              We reserve the right to modify, suspend, or discontinue any part
              of the Service (including any feature, content, pricing, or
              functionality) at any time, temporarily or permanently, with or
              without notice, for any reason or no reason, at our sole discretion.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            We shall not be liable to you or any third party for any
            modification, suspension, or discontinuation of the Service or
            any part thereof. Features available today may be removed, changed,
            or made available only to paid subscribers in the future.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">3.3 One Human, One Vote</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Rally enforces strict one-person-one-vote integrity through device
            verification, behavioral analysis, and optional identity verification.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Attempts to circumvent these measures (multiple accounts, automation,
            VPN/location spoofing) will result in account termination.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">3.4 Secret Ballot</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Rally offers an optional "Secret Ballot" feature. When you enable
            Secret Ballot in Settings, your voting choices are cryptographically
            separated from your identity. Poll authors can also enable Secret
            Ballot for specific polls, making all votes anonymous.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            When Secret Ballot is enabled, we cannot reveal how you voted.
            When disabled (the default), poll authors can see your vote choices.
          </p>
        </div>
      </section>

      {/* 4. User Conduct */}
      <section id="user-conduct" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">4. User Conduct</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">4.1 Prohibited Activities</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">You agree NOT to:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Create multiple accounts or impersonate others</li>
            <li>Use bots, scripts, or automated means</li>
            <li>Manipulate polls or game the verification system</li>
            <li>Spoof your location using VPN or other means</li>
            <li>Harass, threaten, or abuse other users</li>
            <li>Post illegal, defamatory, or harmful content</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Reverse engineer or exploit the Service</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">4.2 Content Standards</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">Polls and content must NOT contain:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Hate speech or discrimination</li>
            <li>Threats of violence</li>
            <li>Sexual content involving minors</li>
            <li>Doxxing or private information</li>
            <li>Spam or commercial solicitation</li>
            <li>Misinformation designed to manipulate</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">4.3 Monitoring and Moderation</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            To maintain a safe community, Rally administrators may review any
            user-generated content on the Service, including direct messages,
            chat conversations, polls, comments, and profile information, for
            the purposes of safety, moderation, enforcement of these Terms, and
            compliance with applicable law. When a user submits a report, the
            reported conversation may be stored and reviewed by administrators.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">4.4 Enforcement</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            We may suspend or terminate accounts that violate these Terms.
            Severe violations may be reported to law enforcement.
          </p>
        </div>
      </section>

      {/* 5. Political Content */}
      <section id="political-content" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">5. Political Content</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">5.1 Opt-In Only</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Political content on Rally is strictly opt-in. You will NOT see
              political polls unless you explicitly add "Politics" to your
              interests in your profile settings.
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Political content is regionalized (US users see US politics, UK users see UK politics, etc.)</li>
            <li>You can opt out at any time by removing politics from your interests</li>
            <li>We do not push, recommend, or promote political content to non-opted-in users</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">5.2 User-Generated Political Content</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Political polls are created by users, not by Rally. We are a
            neutral platform and do not endorse, verify, or fact-check
            political opinions expressed in user-created polls.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Rally is not responsible for the accuracy, completeness, or
            legality of user-generated political content. Poll results
            reflect user opinions, not verified electoral outcomes.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">5.3 Not Election Interference</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Rally polls are for entertainment and engagement purposes only.
              Rally is NOT affiliated with any government, political party,
              election authority, or official polling organization.
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Poll results are not scientifically sampled and should not be cited as representative surveys</li>
            <li>Rally does not conduct official election polling or voter surveys</li>
            <li>We do not sell political advertising or accept payments for political promotion</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">5.4 Canada Elections Act Notice</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            For Canadian users: Rally does not accept foreign funding for
            election-related content and complies with the Canada Elections
            Act requirements for digital platforms. Political content visible
            to Canadian users is subject to Canadian election law during
            election periods.
          </p>
        </div>
      </section>

      {/* 6. Subscriptions and Purchases */}
      <section id="subscriptions" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">6. Subscriptions and Purchases</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">6.1 Rally Verified Subscription</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Rally Verified is a monthly subscription providing enhanced features
            including identity verification and priority access to paid research.
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Price: As displayed at time of purchase</li>
            <li>Billing: Monthly recurring via App Store / Google Play</li>
            <li>Auto-renewal: Subscription renews automatically unless canceled</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">6.2 Sponsored Polls (Consumables)</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Sponsorship purchases are one-time consumable products that promote
            your poll for a specified duration.
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Non-refundable once activated</li>
            <li>Duration runs continuously from activation</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">6.3 Cancellation and Refunds</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Subscriptions: Cancel anytime through your device's Settings
              (iOS: Settings &rarr; Apple ID &rarr; Subscriptions;
              Android: Play Store &rarr; Subscriptions). Cancellation takes
              effect at end of current billing period.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Refunds: Processed through Apple/Google per their policies. We do
            not directly process refunds for app store purchases.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">6.4 Price Changes</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Prices may change with advance notice. Existing subscribers will
            be notified before their next renewal at the new price.
          </p>
        </div>
      </section>

      {/* 7. Virtual Items & Rally Score */}
      <section id="virtual-items" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">7. Virtual Items & Rally Score</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">7.1 Rally Score</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Rally Score is an in-app point system earned through engagement
            activities such as voting, posting, commenting, and other
            participation on the platform.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Rally Score has no monetary value, cannot be redeemed for cash,
              and cannot be transferred outside the platform. Rally Score is
              not a currency, stored-value product, or financial instrument.
              You may not sell, purchase, or exchange Rally Score for real-world
              money or goods outside the Service.
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Rally Score balances are not your property and may be adjusted, reset, or revoked at any time</li>
            <li>Earning rates and spending costs may change without notice</li>
            <li>Rally Score cannot be inherited, transferred upon death, or included in any estate</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">7.2 Avatars</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Avatars are procedurally generated images created using
            third-party open-source libraries. By using the avatar
            generation feature, you acknowledge:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Avatars are not unique, scarce, or one-of-a-kind — similar or identical avatars may exist</li>
            <li>Avatars are not non-fungible tokens (NFTs), blockchain assets, or digital collectibles</li>
            <li>You receive a limited, revocable, non-exclusive license to display avatars within the Service — not ownership of the underlying artwork or generation algorithm</li>
            <li>Rally may modify, remove, or reset any avatar at any time without compensation</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">7.3 Avatar Slots</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Each user begins with a limited number of avatar storage slots.
            Additional slots may be obtained by spending Rally Score or
            through in-app purchase (IAP).
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Slots obtained via IAP are non-refundable consumable products processed through Apple App Store or Google Play</li>
            <li>Slots obtained via Rally Score are non-reversible once purchased</li>
            <li>Slots are account-locked and cannot be traded, transferred, or gifted to other users</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">7.4 Avatar Trading</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Users may trade avatars with other users using Rally Score as
            the medium of exchange. By participating in avatar trading, you
            agree:
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              All trades are final and irreversible once confirmed. Rally is
              not responsible for trades you regret, nor for the perceived
              value of any avatar before, during, or after a trade.
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Avatar trading is conducted exclusively using earned Rally Score — real money is never involved in trades</li>
            <li>Rally may charge a platform fee (in Rally Score) on trades</li>
            <li>You must have an available avatar slot to receive a traded avatar</li>
            <li>Trading with the intent to manipulate the economy, launder score, or exploit bugs is prohibited and will result in account termination</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">7.5 Economy Controls</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Rally reserves the right, at its sole discretion and without
              prior notice, to:
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Adjust Rally Score earning rates, spending costs, and trading fees</li>
            <li>Modify avatar generation rates, slot limits, and cooldown periods</li>
            <li>Suspend or discontinue avatar trading temporarily or permanently</li>
            <li>Correct, adjust, or reset Rally Score balances and avatar inventories to address bugs, exploits, or economic imbalances</li>
            <li>Impose trading limits or restrictions on individual accounts</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">7.6 Forfeiture</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Upon account termination (whether by you or by us), all Rally
            Score, avatars, avatar slots, and other virtual items are
            permanently forfeited without compensation. No refunds will be
            issued for Rally Score spent, avatars lost, or IAP-purchased
            slots on terminated accounts.
          </p>
        </div>
      </section>

      {/* 8. Game Trade (Fairground Trading) */}
      <section id="game-trade" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">8. Game Trade (Fairground Trading)</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">8.1 Overview</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Game Trade is a community marketplace that enables users to
            list and trade in-game items (e.g., Fallout 76 weapons, armor,
            apparel, plans) with other users. By using Game Trade, you
            acknowledge and agree:
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Rally is a platform facilitating user-to-user trades. Rally does
              NOT own, sell, verify, or guarantee any items listed. Rally is
              NOT a party to any trade agreement between users.
            </p>
          </div>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">8.2 Cash Transactions</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Rally does NOT process, handle, facilitate, or support cash
              transactions of any kind. When users choose to exchange real
              money for in-game items:
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Cash payments occur entirely outside the Rally platform</li>
            <li>Rally does NOT collect, hold, escrow, or transmit money on behalf of users</li>
            <li>Rally does NOT verify payment completion or enforce payment obligations</li>
            <li>Rally is NOT responsible for payment disputes, chargebacks, fraud, or non-payment</li>
            <li>Users are solely responsible for verifying payment receipt before delivering items</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3 mt-3">
            You engage in cash-for-items trades entirely at your own risk.
            Rally strongly recommends using the optional courier system for
            all high-value or cash trades.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">8.3 Community Couriers</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Couriers are volunteer community members, NOT Rally employees,
              contractors, or official representatives. Rally does NOT:
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Employ, pay, train, supervise, or manage couriers</li>
            <li>Conduct background checks or verify courier identities beyond standard user verification</li>
            <li>Guarantee courier performance, honesty, or reliability</li>
            <li>Insure items handled by couriers or compensate for courier-related losses</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3 mt-3">
            Couriers are vetted through the same user verification process as
            all users and earn in-app reputation scores (Rally Score) for
            successful deliveries. However, Rally cannot guarantee that any
            courier will act honestly or fulfill their obligations.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Using a courier is optional for all trades, including cash trades.
            Couriers do NOT handle real money — they only facilitate in-game
            item transfers.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">8.4 Trade Disputes and Arbitration</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Rally provides a voluntary arbitration system for trade disputes.
            Arbitrators (called "Adjudicators") are experienced community
            members, NOT Rally employees or professional arbitrators.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Arbitration decisions are advisory only and not legally binding.
              Rally does NOT enforce arbitration outcomes, reverse trades, or
              compensate users for disputed trades.
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Rally may ban users found to have engaged in scamming or fraud</li>
            <li>Rally may adjust Rally Score balances to address confirmed scams</li>
            <li>Rally cannot retrieve stolen items or undo in-game transfers</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3 mt-3">
            For cash payment disputes, you must resolve the matter directly
            with the other party or through your payment provider (e.g.,
            PayPal dispute resolution, credit card chargeback).
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">8.5 Prohibited Activities</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">In Game Trade, you agree NOT to:</p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>List items you do not own or cannot deliver</li>
            <li>Scam, defraud, or mislead other users about item quality, rarity, or stats</li>
            <li>Accept payment without delivering promised items</li>
            <li>Use Game Trade for money laundering, real-money trading (RMT) in violation of game Terms of Service, or other illegal activity</li>
            <li>Impersonate couriers or adjudicators</li>
            <li>Harass, threaten, or extort other traders</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-3 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Violations may result in immediate account termination, loss of
              all Rally Score and virtual items, and permanent ban from the
              Service. Severe violations may be reported to law enforcement
              and/or the game publisher.
            </p>
          </div>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">8.6 No Warranty or Guarantee</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              RALLY MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING GAME
              TRADE. RALLY DOES NOT GUARANTEE:
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Item authenticity, quality, stats, or rarity</li>
            <li>Successful trade completion</li>
            <li>Courier delivery or performance</li>
            <li>Protection against scams, fraud, or theft</li>
            <li>Compatibility with any game's Terms of Service</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3 mt-3">
            You are solely responsible for verifying item details, assessing
            trader reputation, and protecting yourself against fraud. Rally
            is not liable for any loss, damage, or harm arising from your
            use of Game Trade.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">8.7 Game Publisher Terms</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Many games (including Fallout 76) prohibit or restrict real-money
            trading (RMT) of in-game items in their Terms of Service. You are
            solely responsible for understanding and complying with the game
            publisher's rules.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Rally is not responsible if your game account is banned,
              suspended, or penalized for trading activity that violates the
              game's Terms of Service.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Research Participation */}
      <section id="research" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">9. Research Participation</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">9.1 Eligibility</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Paid research opportunities ("Deep Dives") are available to Verified
            users who meet eligibility criteria (location, engagement history, etc.).
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">9.2 Compensation</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Compensation for research participation will be clearly stated before
            you begin. Payments are processed through the Service.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">9.3 Data Use</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Research responses are aggregated and anonymized before sharing with
            research partners. Individual responses are never shared.
          </p>
        </div>
      </section>

      {/* 10. Intellectual Property */}
      <section id="intellectual-property" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">10. Intellectual Property</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">10.1 Our Property</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Rally, its logo, design, features, code, algorithms, AI models,
            aggregated data, analytics, and all derivative works are the
            exclusive property of Rally and protected by intellectual property
            laws worldwide. You may not copy, modify, reverse engineer,
            decompile, disassemble, or distribute any part of the Service or
            its underlying technology.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">10.2 Your Content</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            You retain ownership of the original content you create (e.g., poll
            questions, comments, media). However, by posting or submitting
            content to the Service, you grant Rally a perpetual, irrevocable,
            worldwide, royalty-free, fully sublicensable, and transferable
            license to use, reproduce, modify, adapt, publish, translate,
            create derivative works from, distribute, display, and otherwise
            exploit your content in any form, media, or technology now known
            or later developed, for any purpose, including but not limited to:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Operating, promoting, and improving the Service</li>
            <li>Creating aggregated and anonymized datasets</li>
            <li>Training, developing, and improving AI and machine learning models</li>
            <li>Research, analytics, and commercial data products</li>
            <li>Marketing, advertising, and promotional materials</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3 mt-3">
            This license survives account deletion or termination. You waive
            any moral rights in your content to the fullest extent permitted
            by law. You represent that you have all rights necessary to grant
            this license and that your content does not infringe any third-party
            rights.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">10.3 Aggregated Data</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            All aggregated, anonymized, or de-identified data derived from
            user activity (including but not limited to poll results, voting
            patterns, engagement metrics, demographic trends, and behavioral
            analytics) is the sole and exclusive property of Rally. We may
            use, license, sell, or otherwise commercialize aggregated data
            without restriction or obligation to you.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">10.4 Feedback</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Any ideas, suggestions, feedback, or improvements you provide
            become the exclusive property of Rally. You irrevocably assign
            all rights in such feedback to us and acknowledge that we may
            use it without compensation, attribution, or obligation of any kind.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">10.5 Usernames and Trademark Reclamation</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Usernames are assigned on a first-come, first-served basis and
            do not confer any ownership, proprietary, or intellectual property
            rights. A username is a functional identifier within the Service,
            not property.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              We reserve the right to reclaim, reassign, suspend, or rename
              any username at any time, for any reason or no reason, at our
              sole discretion, with or without notice. This includes but is
              not limited to:
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Usernames that infringe or are confusingly similar to third-party trademarks, trade names, or brand identities</li>
            <li>Usernames held by inactive accounts</li>
            <li>Usernames that impersonate individuals, organizations, brands, or public figures</li>
            <li>Usernames reserved for legitimate trademark holders upon verified request</li>
            <li>Usernames that violate any law or these Terms</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3 mt-3">
            If a trademark holder submits a valid claim to a username, we may
            transfer the username to the claimant, rename the existing holder's
            account, or take any other action we deem appropriate. We are not
            obligated to compensate, notify in advance, or provide an alternative
            username to the displaced user.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            You agree not to register usernames for the purpose of selling,
            trading, or profiting from them ("username squatting"). We may
            terminate accounts engaged in username squatting without notice.
          </p>
        </div>
      </section>

      {/* 11. Disclaimers */}
      <section id="disclaimers" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">11. Disclaimers</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">11.1 Service Availability</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND,
              EXPRESS OR IMPLIED. WE DO NOT GUARANTEE ACCURACY, COMPLETENESS,
              OR RELIABILITY OF POLL RESULTS OR USER-GENERATED CONTENT.
            </p>
          </div>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">11.2 Platform, Not Publisher</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Rally is a neutral technology platform that enables users to
              create and participate in polls. Rally does NOT:
            </p>
          </div>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Create, edit, or endorse user-generated polls</li>
            <li>Verify the accuracy of poll questions or results</li>
            <li>Take editorial positions on poll topics</li>
            <li>Recommend or curate content based on viewpoint</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3 mt-3">
            Poll results reflect user opinions at a point in time and should
            not be treated as scientific surveys, electoral predictions, or
            statements of fact.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">11.3 AI-Generated Content</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Rally features AI prediction bots (e.g., RallySeer, seer_sports,
            seer_gaming) that create prediction polls automatically. These
            AI-generated polls are:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Clearly labeled as AI-generated</li>
            <li>For entertainment and engagement purposes only</li>
            <li>Not financial, legal, betting, or professional advice</li>
            <li>Subject to the same content standards as user polls</li>
          </ul>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-3 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              AI predictions are not guarantees of future outcomes. Do not make
              financial, betting, or other consequential decisions based on AI
              poll predictions.
            </p>
          </div>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">11.4 No Professional Advice</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Nothing on Rally constitutes professional advice of any kind,
            including but not limited to:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Financial or investment advice</li>
            <li>Legal advice</li>
            <li>Medical advice</li>
            <li>Gambling or betting advice</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3 mt-3">
            Consult qualified professionals before making decisions in these
            areas.
          </p>
        </div>
      </section>

      {/* 12. Limitation of Liability */}
      <section id="liability" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">12. Limitation of Liability</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR
          ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES,
          OR ANY LOSS OF PROFITS OR REVENUES.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Our total liability for any claim shall not exceed the amount you
          paid us in the 12 months preceding the claim, or $100, whichever is greater.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Some jurisdictions do not allow limitation of liability for certain
          damages, so these limitations may not apply to you.
        </p>
      </section>

      {/* 13. Indemnification */}
      <section id="indemnification" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">13. Indemnification</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          You agree to indemnify, defend, and hold harmless Rally, its owners,
          operators, officers, directors, employees, agents, affiliates,
          successors, and assigns from and against any and all claims, demands,
          actions, damages, losses, liabilities, judgments, settlements, costs,
          and expenses (including reasonable attorneys' fees) arising out of or
          relating to:
        </p>
        <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
          <li>Your use or misuse of the Service</li>
          <li>Your content or any content you submit, post, or transmit</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any applicable law or regulation</li>
          <li>Your infringement of any third-party rights (intellectual property, privacy, or otherwise)</li>
          <li>Any dispute between you and another user of the Service</li>
        </ul>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3 mt-3">
          This indemnification obligation survives termination of your account
          and these Terms.
        </p>
      </section>

      {/* 14. Termination */}
      <section id="termination" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">14. Termination</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">14.1 By You</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            You may delete your account at any time through Settings. This will
            permanently remove your profile and personal data, subject to our
            data retention obligations and rights under Section 9 (Intellectual
            Property). Anonymized and aggregated data derived from your activity
            will be retained indefinitely.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">14.2 By Us</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-3">
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may suspend, restrict, or permanently terminate your account and
              access to the Service at any time, for any reason or no reason, at
              our sole discretion, with or without prior notice. Reasons may
              include but are not limited to: violation of these Terms, fraudulent
              or suspicious activity, inactivity, legal or regulatory requirements,
              or any conduct we deem harmful to the Service, other users, or our
              interests.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            We are not required to provide a reason for termination. Terminated
            accounts may not be reinstated. You may not create a new account
            after termination without our express written permission.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">14.3 Effect of Termination</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Upon termination, your right to use the Service ceases immediately.
            All licenses granted to you under these Terms are automatically
            revoked. We may delete your account data at our discretion.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            The following provisions survive termination: Sections 7 (Virtual
            Items & Rally Score), 8 (Game Trade), 10 (Intellectual Property),
            11 (Disclaimers), 12 (Limitation of Liability), 13 (Indemnification),
            18 (Dispute Resolution), and any other provisions that by their
            nature should survive.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">14.4 No Refunds on Termination</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            If your account is terminated by us for violation of these Terms,
            you are not entitled to any refund of subscription fees, purchased
            credits, or other payments. If you terminate your own account,
            refunds are subject to the cancellation policies in Section 6.
          </p>
        </div>
      </section>

      {/* 15. Third-Party Services */}
      <section id="third-party" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">15. Third-Party Services</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          The Service integrates with or relies upon third-party services
          including but not limited to payment processors, identity verification
          providers, cloud hosting, AI model providers, and communication
          platforms. We are not responsible for:
        </p>
        <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
          <li>The availability, accuracy, or performance of third-party services</li>
          <li>Any loss or damage resulting from third-party service outages or failures</li>
          <li>Third-party terms of service, privacy practices, or data handling</li>
          <li>Content or services provided by third parties linked from the Service</li>
        </ul>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3 mt-3">
          Your use of third-party services is governed by their respective terms
          and policies. We make no warranties regarding third-party services.
        </p>
      </section>

      {/* 16. DMCA and Copyright */}
      <section id="dmca" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">16. DMCA and Copyright</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">16.1 Safe Harbor</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Rally acts as an online service provider under the Digital Millennium
            Copyright Act (DMCA). We are not liable for user-generated content
            that may infringe third-party copyrights, provided we comply with
            applicable safe harbor requirements.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">16.2 Takedown Notices</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            If you believe content on Rally infringes your copyright, submit a
            DMCA takedown notice to support@rally.ink with:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>Identification of the copyrighted work</li>
            <li>Identification of the infringing content and its location on the Service</li>
            <li>Your contact information</li>
            <li>A statement of good faith belief that the use is not authorized</li>
            <li>A statement under penalty of perjury that the information is accurate</li>
            <li>Your physical or electronic signature</li>
          </ul>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">16.3 Repeat Infringers</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            We will terminate accounts of users who are repeat copyright
            infringers in appropriate circumstances.
          </p>
        </div>
      </section>

      {/* 17. Force Majeure */}
      <section id="force-majeure" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">17. Force Majeure</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          We shall not be liable for any failure or delay in performing our
          obligations under these Terms due to causes beyond our reasonable
          control, including but not limited to: acts of God, natural disasters,
          pandemic, epidemic, war, terrorism, riots, government actions, power
          failures, internet or telecommunications failures, cyberattacks,
          third-party service provider failures, labor disputes, or any other
          event beyond our reasonable control.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          During such events, our obligations are suspended for the duration
          of the force majeure event, and we may modify or discontinue the
          Service as necessary without liability.
        </p>
      </section>

      {/* 18. Dispute Resolution */}
      <section id="dispute-resolution" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">18. Dispute Resolution</h2>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">18.1 Governing Law</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            These Terms are governed by the laws of the State of Delaware, USA,
            without regard to conflict of law principles.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">18.2 Arbitration</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Any disputes shall be resolved through binding arbitration under
            the rules of the American Arbitration Association. You waive the
            right to participate in class actions.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            EU/EEA/UK residents: This arbitration clause does not affect your
            statutory rights under consumer protection laws. You may bring
            claims in the courts of your country of residence. Nothing in
            these Terms limits your rights under mandatory consumer protection
            laws in your jurisdiction.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">17.3 Small Claims</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Either party may bring claims in small claims court if eligible.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">17.4 Attorneys' Fees</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            In any dispute arising under these Terms, the prevailing party shall
            be entitled to recover reasonable attorneys' fees, costs, and expenses
            from the non-prevailing party. If you bring a claim against us that
            is found to be frivolous or brought in bad faith, you agree to
            reimburse us for all attorneys' fees and costs incurred in defending
            against such claim.
          </p>
        </div>

        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-muted-foreground mb-3">17.5 Injunctive Relief</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-3">
            Notwithstanding the arbitration provision, we may seek injunctive or
            other equitable relief in any court of competent jurisdiction to
            prevent the actual or threatened infringement, misappropriation, or
            violation of our intellectual property rights, data rights, or
            confidential information.
          </p>
        </div>
      </section>

      {/* 19. General Provisions */}
      <section id="general" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">19. General Provisions</h2>
        <ul className="list-disc list-outside ml-5 space-y-1 text-sm leading-relaxed text-muted-foreground">
          <li>
            Entire Agreement: These Terms constitute the entire agreement between
            you and Rally.
          </li>
          <li>
            Severability: If any provision is found invalid, the remainder stays
            in effect.
          </li>
          <li>
            Waiver: Failure to enforce any right is not a waiver of that right.
          </li>
          <li>
            Assignment: You may not assign your rights. We may assign ours.
          </li>
        </ul>
      </section>

      {/* 20. Contact */}
      <section id="contact" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-4">20. Contact</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">For questions about these Terms:</p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-3">
          Email:{' '}
          <a href="mailto:support@rally.ink" className="text-accent hover:underline">
            support@rally.ink
          </a>
        </p>
      </section>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Last updated: {TOS_EFFECTIVE_DATE}
        </p>
      </div>
    </div>
  )
}
