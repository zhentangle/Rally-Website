export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-foreground mb-3">About Rally</h1>
      <p className="text-muted-foreground mb-10">
        The story behind the app.
      </p>

      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Rally is built by a solo developer with a single goal — bring gamers together.
        </p>
        <p>
          No corporate backing, no investors, no board of directors. Just someone who grew up in gaming
          communities and wanted to build the app those communities deserve. A place where you can trade
          in-game items without getting scammed, find teammates without the friction, and actually connect
          with people who play the same games you do.
        </p>
        <p>
          Every feature exists because the community needs it. Game Trade was built because existing
          marketplaces are riddled with scammers and zero accountability. Squad Up was built because
          finding a group shouldn't require joining five different Discord servers. Gamertag privacy was
          built because your identity should be yours to control.
        </p>
        <p>
          This is a community project first and foremost. Rally grows with its players, and every decision
          is made with the community in mind. If any rights holder feels their work is being used in a way
          they're not comfortable with, please reach out and send a C&D. We will always respect your
          copyright.
        </p>
        <p>
          At the end of the day, it's a dream come true to create a super app for gamers that seamlessly
          integrates with platform APIs and connects gamers across the world.
        </p>
        <p className="text-foreground font-medium mt-4">
          Thanks,<br />John
        </p>
      </div>
    </div>
  )
}
