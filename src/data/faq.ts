export type FAQCategory =
  | 'predictions'
  | 'xp_rewards'
  | 'streaks'
  | 'achievements'
  | 'account'
  | 'billing'
  | 'technical'
  | 'safety'
  | 'general'

export interface FAQEntry {
  id: string
  question: string
  answer: string
  category: FAQCategory
}

export const FAQ_CATEGORY_LABELS: Record<FAQCategory, string> = {
  predictions: 'Predictions',
  xp_rewards: 'XP & Rewards',
  streaks: 'Streaks',
  achievements: 'Achievements & Flairs',
  account: 'Account',
  billing: 'Billing & Subscriptions',
  technical: 'Technical',
  safety: 'Safety & Moderation',
  general: 'General & Features',
}

export const FAQ_DATA: FAQEntry[] = [
  // PREDICTIONS
  {
    id: 'prediction_not_resolved',
    question: "Why hasn't my prediction resolved yet?",
    answer: "Predictions resolve within 24 hours after the event occurs. Results are verified from official sources before marking winners. Check the poll to see the event date!",
    category: 'predictions',
  },
  {
    id: 'change_vote',
    question: "Can I change my vote?",
    answer: "Votes can't be changed once submitted — this keeps predictions fair for everyone! Think carefully before voting. The earlier you vote, the more confident you appear!",
    category: 'predictions',
  },
  {
    id: 'prediction_wrong',
    question: "My prediction was marked wrong but I was right!",
    answer: "All results are verified from official sources. If you believe there's an error, contact our support team at support@rally.ink and we'll review your case.",
    category: 'predictions',
  },
  {
    id: 'how_predictions_scored',
    question: "How are predictions scored?",
    answer: "When you vote correctly: +25 XP base, plus streak bonuses up to +50 XP! Early votes show confidence. Your accuracy percentage = correct predictions / total predictions.",
    category: 'predictions',
  },
  {
    id: 'find_predictions',
    question: "Where do I find predictions to vote on?",
    answer: "Look for polls with the Seer badge on the home feed! Seer posts new predictions daily on trending topics — stocks, sports, tech, and more.",
    category: 'predictions',
  },
  {
    id: 'prediction_categories',
    question: "What topics do you make predictions about?",
    answer: "Rally covers: Stocks & Crypto, Sports, Tech, Entertainment, and World Events. New predictions on the most interesting upcoming events are posted daily!",
    category: 'predictions',
  },

  // XP & REWARDS
  {
    id: 'how_xp_works',
    question: "How does XP work?",
    answer: "Your Rally Score grows from engagement: Daily post +100, Votes received +10, Likes +2, Comments +5. Plus prediction bonuses: +25 XP correct, +10-50 streak bonus!",
    category: 'xp_rewards',
  },
  {
    id: 'didnt_get_xp',
    question: "Why didn't I get XP?",
    answer: "XP from predictions is awarded after the event resolves (within 24 hours). Engagement XP (posts, votes, likes) is added immediately. If XP is still missing, contact support.",
    category: 'xp_rewards',
  },
  {
    id: 'level_up',
    question: "How do I level up?",
    answer: "You level up every 1,000 XP! Max level is 500, but your Rally Score keeps growing forever. Keep posting, engaging, and making correct predictions!",
    category: 'xp_rewards',
  },
  {
    id: 'max_level',
    question: "What happens at max level?",
    answer: "At Level 500 (MAX), your level shows 'MAX' but your Rally Score continues to grow infinitely! You're among the elite predictors. Keep climbing that leaderboard!",
    category: 'xp_rewards',
  },
  {
    id: 'daily_bonus',
    question: "How does the daily post bonus work?",
    answer: "Your first post each day earns +100 XP! This resets at midnight. It's the biggest single XP boost — make sure to post something daily!",
    category: 'xp_rewards',
  },
  {
    id: 'hot_take',
    question: "What is the daily Hot Take?",
    answer: "The Hot Take is a featured daily poll that gives you +750 XP just for voting! A new one appears every day — don't miss it, it's the biggest single XP boost available.",
    category: 'xp_rewards',
  },

  // STREAKS
  {
    id: 'how_streaks_work',
    question: "How do streaks work?",
    answer: "Streaks track consecutive correct predictions! Get multiple right in a row to earn bonus XP (+10-50) and unlock Hot Streak flairs. One wrong prediction resets to 0.",
    category: 'streaks',
  },
  {
    id: 'streak_reset',
    question: "Why did my streak reset?",
    answer: "Streaks reset when you get a prediction wrong. Only correct predictions count! Your best streak is saved though — you can always try to beat it.",
    category: 'streaks',
  },
  {
    id: 'streak_bonus',
    question: "What are streak bonuses?",
    answer: "Streak bonuses add extra XP on top of the +25 base: 3 streak = +10 bonus, 5 streak = +25 bonus, 10+ streak = +50 bonus! Plus you unlock Hot Streak flairs.",
    category: 'streaks',
  },

  // ACHIEVEMENTS & FLAIRS
  {
    id: 'how_achievements_work',
    question: "How do achievements work?",
    answer: "Hit prediction milestones to unlock flairs! First Vision (1), Rising Seer (5), Seasoned Sage (10), Master Prophet (25). Plus Hot Streak flairs at 3, 5, and 10!",
    category: 'achievements',
  },
  {
    id: 'equip_flair',
    question: "How do I equip a flair?",
    answer: "Go to your Profile, tap your avatar or the flair section, and select the flair you want to display! Only unlocked flairs can be equipped.",
    category: 'achievements',
  },
  {
    id: 'flair_not_showing',
    question: "Why isn't my flair showing?",
    answer: "Make sure you've equipped the flair from your profile. If you just unlocked it, try refreshing the app. If it's still missing, contact support@rally.ink.",
    category: 'achievements',
  },

  // ACCOUNT
  {
    id: 'change_username',
    question: "How do I change my username?",
    answer: "You can change your username in Settings → Edit Profile. Usernames must be unique and follow our community guidelines.",
    category: 'account',
  },
  {
    id: 'delete_account',
    question: "How do I delete my account?",
    answer: "Account deletion is a permanent action. Go to Settings → Account → Delete Account. This permanently cascade-deletes ALL your data — polls, votes, messages, profile, everything. This action is completely irreversible.",
    category: 'account',
  },
  {
    id: 'account_hacked',
    question: "I think my account was hacked",
    answer: "If you suspect unauthorized access, change your password immediately. Then contact our security team at support@rally.ink with details so we can investigate.",
    category: 'account',
  },
  {
    id: 'account_banned',
    question: "Why was my account banned/suspended?",
    answer: "Account suspensions are handled by our trust & safety team. Email support@rally.ink so they can review your case and explain the reason.",
    category: 'account',
  },
  {
    id: 'cant_login',
    question: "I can't log into my account",
    answer: "Try resetting your password via the 'Forgot Password' link. If you're still having trouble, contact support@rally.ink and we'll help recover your account.",
    category: 'account',
  },
  {
    id: 'delete_account_info',
    question: "What happens when I delete my account?",
    answer: "Deleting your account permanently cascade-deletes ALL your data — polls, votes, messages, profile, everything. This action is completely irreversible and cannot be undone. Go to Settings → Account → Delete Account.",
    category: 'account',
  },

  // BILLING
  {
    id: 'cancel_subscription',
    question: "How do I cancel my subscription?",
    answer: "Rally Verified subscriptions are managed through your device. iOS: Settings → Apple ID → Subscriptions. Android: Play Store → Payments & Subscriptions. You can cancel anytime from there.",
    category: 'billing',
  },
  {
    id: 'refund_request',
    question: "I want a refund",
    answer: "Refund requests are handled through your app store (Apple App Store or Google Play). You can also contact our billing team at support@rally.ink for assistance.",
    category: 'billing',
  },
  {
    id: 'billing_issue',
    question: "I have a billing issue",
    answer: "For billing issues, please contact our support team at support@rally.ink. They have access to payment systems and can help resolve any billing concerns.",
    category: 'billing',
  },
  {
    id: 'gold_benefits',
    question: "What are Rally Verified benefits?",
    answer: "Rally Verified ($4.99/mo) includes: gold verified badge, gilded marble theme, 20 soulmate pulls/day (vs 3 free), doubled initial Podium speaking time, and +2 extra AI avatar generation pulls per day.",
    category: 'billing',
  },
  {
    id: 'manage_subscription',
    question: "How do I manage or cancel my subscription?",
    answer: "Rally Verified subscriptions are managed through your device. iOS: Settings → Apple ID → Subscriptions. Android: Play Store → Payments & Subscriptions. You can cancel anytime from there.",
    category: 'billing',
  },

  // TECHNICAL
  {
    id: 'app_crashing',
    question: "The app keeps crashing",
    answer: "Try: 1) Force close and reopen, 2) Check for app updates, 3) Restart your device. If it continues, report the issue at support@rally.ink.",
    category: 'technical',
  },
  {
    id: 'notifications_not_working',
    question: "I'm not getting notifications",
    answer: "Check: 1) Settings → Notifications are enabled in Rally, 2) Your phone's notification settings allow Rally, 3) Do Not Disturb is off. Try toggling notifications off and on.",
    category: 'technical',
  },
  {
    id: 'image_upload_failed',
    question: "I can't upload images",
    answer: "Image upload issues are usually due to: 1) File too large (max 10MB), 2) Unsupported format (use JPG/PNG), 3) Slow connection. Try a smaller image or different format.",
    category: 'technical',
  },
  {
    id: 'app_slow',
    question: "The app is running slow",
    answer: "Try: 1) Check your internet connection, 2) Close other apps, 3) Clear app cache in Settings, 4) Update to the latest version. Contact support if it persists.",
    category: 'technical',
  },

  // SAFETY & MODERATION
  {
    id: 'report_harassment',
    question: "Someone is harassing me",
    answer: "Your safety is our priority. Block the user from their profile and report them by tapping the three dots (⋯) → Report. Our trust & safety team reviews all reports. You can also email support@rally.ink.",
    category: 'safety',
  },
  {
    id: 'report_user',
    question: "How do I report a user?",
    answer: "To report a user: Go to their profile → tap the three dots (⋯) → Report. You can also report specific posts/comments the same way. Our team reviews all reports.",
    category: 'safety',
  },
  {
    id: 'block_user',
    question: "How do I block someone?",
    answer: "To block someone: Go to their profile → tap the three dots (⋯) → Block. They won't be able to see your content or message you.",
    category: 'safety',
  },
  {
    id: 'content_moderation',
    question: "How does content moderation work?",
    answer: "Rally has heavy content moderation including OCR scanning on images. Racism, violence, and pornography are zero tolerance — content is automatically blocked or removed. Text is filtered in real time for profanity, threats, hate speech, and harassment.",
    category: 'safety',
  },
  {
    id: 'dm_privacy',
    question: "Are my DMs private?",
    answer: "Yes! Rally does not look into your chats unless someone reports the conversation. If a report is filed, our moderation team reviews only the reported conversation to take appropriate action.",
    category: 'safety',
  },

  // GENERAL & FEATURES
  {
    id: 'what_is_rally',
    question: "What is Rally?",
    answer: "Rally is a social prediction app where you vote on future events and earn XP when you're right! Make predictions on stocks, sports, tech, and more. Compete with friends and climb the leaderboard!",
    category: 'general',
  },
  {
    id: 'who_is_seer',
    question: "Who is Seer?",
    answer: "Seer is Rally's AI prediction bot! It researches trending events, creates prediction polls, verifies results, and awards XP. It's there to make predictions fun and help you succeed!",
    category: 'general',
  },
  {
    id: 'contact_support',
    question: "How do I contact support?",
    answer: "You can: 1) Chat with Seer in the app for quick help, 2) Email support@rally.ink, 3) Go to Settings → Help & Support. Seer can also connect you with a human agent if needed.",
    category: 'general',
  },
  {
    id: 'what_is_fairground',
    question: "What is the Fairground?",
    answer: "The Fairground is Rally's social hub! Tap the tarot card icon on the home tab to access: Soulmate matching, Personality Test, Trivia battles, Debate Leagues, Community Rooms, Hockey, and the Seer Rally Cup leaderboard.",
    category: 'general',
  },
  {
    id: 'soulmate_matching',
    question: "How does Soulmate matching work?",
    answer: "Soulmate matches you based on shared poll votes (heaviest weight), personality compatibility, and flairs. Free users get 3 pulls/day, Verified get 20. Match tiers: Soul Twin (15+), High Match (9+), Good Match (3+). Each match auto-creates a DM!",
    category: 'general',
  },
  {
    id: 'soulmate_locked',
    question: "Why can't I use Soulmate?",
    answer: "Soulmate requires Secret Ballot to be OFF because it matches based on your voting history. If you're under 18, Secret Ballot is always on so Soulmate is locked. Adults can toggle Secret Ballot off in Settings → Privacy.",
    category: 'general',
  },
  {
    id: 'personality_test',
    question: "What is the Personality Test?",
    answer: "The Personality Test is a one-time MBTI assessment in the Fairground. Answer 16 questions to discover your type (1 of 16). You permanently unlock a flair for your type. Your personality also factors into Soulmate matching compatibility. This test cannot be retaken!",
    category: 'general',
  },
  {
    id: 'trivia_battles',
    question: "How do Trivia battles work?",
    answer: "Trivia is a 1v1 quiz game in the Fairground! Pick your topics, join the queue, and answer questions against another player. Faster correct answers = more points. Track your ELO rating, wins, accuracy, and best streak on the leaderboard.",
    category: 'general',
  },
  {
    id: 'debate_leagues',
    question: "How do Debate Leagues work?",
    answer: "Debate Leagues are in the Fairground! Join or create leagues, then debate in 5 modes: 1v1, 2v2, King of the Hill, Round Robin, or Model UN. An AI Judge scores on clarity, evidence, rebuttal, and rhetoric.",
    category: 'general',
  },
  {
    id: 'community_rooms',
    question: "How do Community Rooms work?",
    answer: "Servers are live audio chat rooms in the Fairground! Create or join rooms across categories like Chill, Music, Gaming, Sports, Tech, and more. Hosts can kick, mute, or ban users. Rooms also have text chat alongside live audio.",
    category: 'general',
  },
  {
    id: 'podium_crowns',
    question: "How does the Podium work?",
    answer: "The Podium is live audio King of the Hill! The King speaks while challengers queue up. Audience reactions extend the King's reign. You earn 1 crown per 60 seconds of audience reactions. Crowns show on your profile.",
    category: 'general',
  },
  {
    id: 'marriage_system',
    question: "How does the marriage system work?",
    answer: "Found your match in Soulmate? Send a marriage proposal to someone you follow. If they accept, you both unlock the exclusive 'Married' flair on your profiles!",
    category: 'general',
  },
  {
    id: 'sponsored_polls',
    question: "How do sponsored polls work?",
    answer: "Boost your poll's visibility! Free users get one 24-hour free boost per week. Business accounts get 72 hours/week free. Paid tiers range from $1.99 to $29.99 for 1 day to 1 month of boosted visibility.",
    category: 'general',
  },
  {
    id: 'pin_polls',
    question: "How do I pin polls?",
    answer: "Pin up to 3 polls to your feed to track live vote results as they come in in real time. Note: pinned polls stream live data, so they use more battery.",
    category: 'general',
  },
  {
    id: 'blind_poll',
    question: "What is a blind poll?",
    answer: "A blind poll hides results until you vote. This prevents bandwagon voting and encourages independent opinions. Once you cast your vote, you can see the full results!",
    category: 'general',
  },
  {
    id: 'business_account',
    question: "What is a Business Account?",
    answer: "Business accounts unlock an analytics dashboard with demographics (age, gender), poll performance metrics, audience targeting, and 72 hours/week of free poll sponsorship. Apply in Settings — admin approval is required.",
    category: 'general',
  },
  {
    id: 'student_verification',
    question: "How do I verify my student status?",
    answer: "Go to your Flair Passport → Student category. Enter your school email and you'll get a 6-digit verification code. Once verified, you unlock your school's exclusive flair!",
    category: 'general',
  },
  {
    id: 'ai_avatar',
    question: "How do I generate an AI avatar?",
    answer: "Tap your avatar on your profile to access avatar options. Upload a photo or generate one with AI! AI generation has a daily cooldown. Rally Verified members get +2 extra generation pulls per day.",
    category: 'general',
  },
  {
    id: 'secret_ballot_details',
    question: "What does Secret Ballot lock?",
    answer: "Secret Ballot encrypts your votes so no one can see them — but it also locks Soulmate matching (which needs your voting history to find matches). Under-18 users always have Secret Ballot on. Adults can toggle it in Settings → Privacy.",
    category: 'general',
  },
  {
    id: 'voting_deadline',
    question: "How do voting deadlines work?",
    answer: "When creating a poll, set a deadline from 1 hour to 1 week. The poll automatically closes when the deadline hits and no more votes can be cast. Results become final at that point.",
    category: 'general',
  },
]
