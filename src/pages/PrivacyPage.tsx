export const PRIVACY_POLICY_VERSION = '1.3.0'
export const PRIVACY_POLICY_EFFECTIVE_DATE = '2026-02-15'

const TOC = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'information-we-collect', label: '2. Information We Collect' },
  { id: 'how-we-use', label: '3. How We Use Your Information' },
  { id: 'information-sharing', label: '4. Information Sharing' },
  { id: 'your-rights', label: '5. Your Rights' },
  { id: 'data-retention', label: '6. Data Retention' },
  { id: 'data-security', label: '7. Data Security' },
  { id: 'international-transfers', label: '8. International Data Transfers' },
  { id: 'age-restriction', label: '9. Age Restriction' },
  { id: 'third-party-trademarks', label: '10. Third-Party Trademarks' },
  { id: 'changes', label: '11. Changes to This Policy' },
  { id: 'contact', label: '12. Contact Us' },
]

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground text-center mb-8">
        Version {PRIVACY_POLICY_VERSION} | Effective: {PRIVACY_POLICY_EFFECTIVE_DATE}
      </p>

      <p className="text-xs text-muted-foreground mb-1 italic">
        Compliant with GDPR (EU/EEA), CCPA/CPRA (California), PIPEDA (Canada), Quebec Law 25, and COPPA (Children's Protection).
      </p>

      {/* Table of Contents */}
      <nav className="bg-muted/50 border border-border rounded-lg p-5 mb-10">
        <h2 className="text-sm font-semibold text-primary mb-3">Table of Contents</h2>
        <ol className="list-decimal list-inside space-y-1.5">
          {TOC.map((item) => (
            <li key={item.id} className="text-sm">
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

      {/* 1. Introduction */}
      <section id="introduction" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">1. Introduction</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Rally ("we," "our," or "us") is committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, disclose, and safeguard
          your information when you use our mobile application and services
          (collectively, the "Service").
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          By using Rally, you agree to the collection and use of information in
          accordance with this policy. If you do not agree, please do not use our Service.
        </p>
      </section>

      {/* 2. Information We Collect */}
      <section id="information-we-collect" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">2. Information We Collect</h2>

        {/* 2.1 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">2.1 Account Information</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">When you create an account, we collect:</p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Email address or phone number (for authentication)</li>
            <li>Username and display name</li>
            <li>Profile photo (optional)</li>
          </ul>
        </div>

        {/* 2.2 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">2.2 Identity Verification Data</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            If you choose to become a Verified user, our third-party provider
            (Stripe Identity) processes:
          </p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Government-issued ID document images</li>
            <li>Selfie for document matching (if enabled)</li>
          </ul>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 my-2">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Important: We do NOT store your ID images or biometric data.
              Stripe processes verification and returns only a pass/fail status
              and derived demographic attributes (age range, residency).
            </p>
          </div>
        </div>

        {/* 2.3 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">2.3 Location Data</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">We collect location information to:</p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Verify residency for geographically-targeted polls</li>
            <li>Provide location-relevant content</li>
            <li>Prevent fraud and ensure one-person-one-vote integrity</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            You may disable location services, but this will limit access to
            location-restricted features.
          </p>
        </div>

        {/* 2.4 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">2.4 Device Information</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">For anti-fraud and security purposes, we collect:</p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Device type and operating system</li>
            <li>App version</li>
            <li>Device identifiers (generated by our app, not hardware IDs)</li>
            <li>Risk assessment scores (not raw sensor data)</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            We use device fingerprinting solely for fraud prevention. We store
            derived risk scores, not raw fingerprint data, in compliance with
            data minimization principles.
          </p>
        </div>

        {/* 2.5 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">2.5 Messaging Data</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            When you use direct messaging or chat features, we store the
            content of your messages to deliver them to the intended
            recipients. Rally administrators may review messages, including
            direct messages, for safety, moderation, and enforcement of our
            Terms of Service. When you report a conversation, a snapshot of
            the chat history is stored for administrative review.
          </p>
        </div>

        {/* 2.6 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">2.6 Usage Data</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">We automatically collect:</p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Polls viewed, created, and voted on</li>
            <li>Interaction patterns (for bot detection)</li>
            <li>Session information and timestamps</li>
          </ul>
        </div>

        {/* 2.7 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">2.7 Voting Data</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            Rally offers an optional "Secret Ballot" feature that you can
            enable in Settings or during registration. When enabled:
          </p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Your votes are cryptographically separated from your identity</li>
            <li>Poll authors can see that you voted, but not what you chose</li>
            <li>We cannot reveal your individual voting patterns</li>
          </ul>
          <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 my-2">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Additionally, poll authors can enable Secret Ballot for specific
              polls, making all votes on that poll anonymous regardless of
              individual user settings.
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            When Secret Ballot is disabled (the default), poll authors can
            see your vote choices. Researchers always receive only aggregated,
            anonymized results regardless of your Secret Ballot setting.
          </p>
        </div>

        {/* 2.8 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">2.8 Political Content Preferences</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            Political content on Rally is strictly opt-in. We collect your
            content preferences to determine whether to show political polls:
          </p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>You must explicitly add "Politics" to your interests to see political content</li>
            <li>Political content is regionalized to your country (e.g., US users see US politics only)</li>
            <li>We never push political content to users who haven't opted in</li>
            <li>You can remove politics from your interests at any time to stop seeing political content</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            This preference is stored locally in your profile and synced with
            our servers to filter your personalized feed.
          </p>
        </div>
      </section>

      {/* 3. How We Use Your Information */}
      <section id="how-we-use" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">3. How We Use Your Information</h2>

        {/* 3.1 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">3.1 Service Operation</h3>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Authenticate and maintain your account</li>
            <li>Display relevant polls and content</li>
            <li>Process in-app purchases and subscriptions</li>
            <li>Provide customer support</li>
            <li>Review messages and content for safety, moderation, and Terms enforcement</li>
          </ul>
        </div>

        {/* 3.2 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">3.2 Verification and Integrity</h3>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Verify you are a real human (anti-bot measures)</li>
            <li>Confirm residency for geographically-targeted research</li>
            <li>Ensure one-person-one-vote integrity</li>
          </ul>
        </div>

        {/* 3.3 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">3.3 Research and Analytics</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            With your consent, we may invite you to participate in paid research
            opportunities. Your participation is always optional.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            We provide aggregated, anonymized poll results to researchers,
            businesses, and government entities. Individual responses are
            never shared.
          </p>
        </div>
      </section>

      {/* 4. Information Sharing */}
      <section id="information-sharing" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">4. Information Sharing</h2>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 my-2">
          <p className="text-sm leading-relaxed text-muted-foreground">
            We do NOT sell your personal information.
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">We may share information with:</p>

        {/* 4.1 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">4.1 Service Providers</h3>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Stripe (payment processing, identity verification)</li>
            <li>Supabase (database and authentication)</li>
            <li>Cloud hosting providers</li>
          </ul>
        </div>

        {/* 4.2 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">4.2 Research Partners</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            When you participate in research, partners receive only aggregated,
            anonymized data meeting minimum sample thresholds (typically n &gt; 50).
          </p>
        </div>

        {/* 4.3 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">4.3 Legal Requirements</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            We may disclose information if required by law, court order, or to
            protect our rights, safety, or property.
          </p>
        </div>
      </section>

      {/* 5. Your Rights */}
      <section id="your-rights" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">5. Your Rights</h2>

        {/* 5.1 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">5.1 All Users</h3>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Access: Request a copy of your data</li>
            <li>Correction: Update inaccurate information</li>
            <li>Deletion: Delete your account in Settings, which permanently removes your personal data</li>
            <li>Portability: Export your data in a standard format</li>
          </ul>
        </div>

        {/* 5.2 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">5.2 European Economic Area &amp; UK (GDPR)</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">If you are in the EU/EEA or United Kingdom, you also have the right to:</p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Object to processing based on legitimate interests</li>
            <li>Restrict processing in certain circumstances</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with your supervisory authority</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            Legal basis for processing: Consent (Art. 6(1)(a)), Contract
            performance (Art. 6(1)(b)), Legitimate interests (Art. 6(1)(f)).
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            UK residents: Your rights under UK GDPR mirror EU GDPR. You may
            lodge complaints with the Information Commissioner's Office (ICO).
          </p>
        </div>

        {/* 5.3 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">5.3 California Residents (CCPA/CPRA)</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">California residents have the right to:</p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Know what personal information we collect</li>
            <li>Delete your personal information</li>
            <li>Opt-out of the sale of personal information (we do not sell)</li>
            <li>Limit use of sensitive personal information</li>
            <li>Non-discrimination for exercising your rights</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            Sensitive Personal Information: We collect precise geolocation
            (with consent) for service functionality. You can limit this use
            in Settings.
          </p>
        </div>

        {/* 5.4 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">5.4 Canadian Residents (PIPEDA)</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">Under PIPEDA, you have the right to:</p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Access your personal information</li>
            <li>Challenge the accuracy of your information</li>
            <li>Know how your information is used</li>
            <li>Withdraw consent (subject to legal restrictions)</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            For Quebec residents: We comply with Law 25 requirements including
            privacy impact assessments for sensitive processing.
          </p>
        </div>

        {/* 5.5 */}
        <div className="ml-2 mt-4">
          <h3 className="text-base font-semibold text-foreground mb-2">5.5 Quebec Residents (Law 25)</h3>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">In addition to PIPEDA rights, Quebec residents have:</p>
          <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
            <li>Right to data portability in a structured format</li>
            <li>Right to be informed of automated decision-making</li>
            <li>Right to request deletion in compliance with Law 25 timelines</li>
          </ul>
          <p className="text-sm leading-relaxed text-muted-foreground mb-2">
            We have conducted privacy impact assessments for processing that
            may present privacy risks. Contact support@rally.ink for details.
          </p>
        </div>
      </section>

      {/* 6. Data Retention */}
      <section id="data-retention" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">6. Data Retention</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">We retain your information as follows:</p>
        <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
          <li>Account data: Until you delete your account</li>
          <li>Voting data: Indefinitely (anonymized, never linked to identity)</li>
          <li>Verification status: Duration of account</li>
          <li>Device fingerprints: 2 years from last activity</li>
          <li>Consent records: 7 years (regulatory requirement)</li>
        </ul>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          After account deletion, we may retain anonymized data for research
          and aggregated analytics that cannot be linked back to you.
        </p>
      </section>

      {/* 7. Data Security */}
      <section id="data-security" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">7. Data Security</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">We implement industry-standard security measures:</p>
        <ul className="list-disc list-inside ml-2 space-y-1 text-sm text-muted-foreground mb-2">
          <li>Encryption in transit (TLS 1.3) and at rest (AES-256)</li>
          <li>Optional separation of identity and voting data (opt-in secret ballot)</li>
          <li>Role-based access controls</li>
          <li>Regular security audits</li>
          <li>Incident response procedures</li>
        </ul>
      </section>

      {/* 8. International Data Transfers */}
      <section id="international-transfers" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">8. International Data Transfers</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Your data may be processed in countries outside your residence.
          For transfers from the EU/EEA, we use Standard Contractual Clauses
          (SCCs) approved by the European Commission.
        </p>
      </section>

      {/* 9. Age Restriction */}
      <section id="age-restriction" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">9. Age Restriction</h2>
        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 my-2">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Rally is intended for users aged 18 and older only. We do not
            knowingly collect information from anyone under 18. If we discover
            we have collected information from a person under 18, we will
            delete it immediately and terminate the associated account.
          </p>
        </div>
      </section>

      {/* 10. Third-Party Trademarks */}
      <section id="third-party-trademarks" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">10. Third-Party Trademarks</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Game names, logos, and identifiers displayed within the Service
          are the property of their respective owners and are used solely
          for identification purposes under nominative fair use. Rally does
          not claim ownership of any third-party intellectual property.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Rally is an independent platform designed to help players find
          teammates and engage with gaming communities. The display of
          game-related content does not imply any affiliation with or
          endorsement by any game publisher or developer.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          If you are a rights holder with concerns, contact us at{' '}
          <a href="mailto:support@rally.ink" className="text-accent hover:underline">
            support@rally.ink
          </a>.
        </p>
      </section>

      {/* 11. Changes to This Policy */}
      <section id="changes" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">11. Changes to This Policy</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          We may update this Privacy Policy periodically. Material changes will
          be notified through the app and may require renewed consent.
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Continued use after changes constitutes acceptance of the revised policy.
        </p>
      </section>

      {/* 12. Contact Us */}
      <section id="contact" className="mb-10 scroll-mt-24">
        <h2 className="text-xl font-bold text-primary mb-3">12. Contact Us</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">For privacy inquiries or to exercise your rights:</p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          Email:{' '}
          <a href="mailto:support@rally.ink" className="text-accent hover:underline">
            support@rally.ink
          </a>
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          For EU/EEA/UK residents, you may also contact our Data Protection
          representative at:{' '}
          <a href="mailto:support@rally.ink" className="text-accent hover:underline">
            support@rally.ink
          </a>
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground mb-2">
          California residents may submit CCPA requests via email to:{' '}
          <a href="mailto:support@rally.ink" className="text-accent hover:underline">
            support@rally.ink
          </a>
        </p>
      </section>

      {/* Footer */}
      <div className="mt-12 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          Last updated: {PRIVACY_POLICY_EFFECTIVE_DATE}
        </p>
      </div>
    </div>
  )
}
