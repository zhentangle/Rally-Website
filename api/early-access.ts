import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email, platform } = req.body as { email?: string; platform?: string }

  if (!email || !platform) {
    return res.status(400).json({ error: 'Email and platform are required.' })
  }

  if (!['apple', 'android'].includes(platform)) {
    return res.status(400).json({ error: 'Invalid platform.' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email address.' })
  }

  const storeName = platform === 'apple' ? 'Apple App Store (TestFlight)' : 'Google Play Store'
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    console.error('DISCORD_WEBHOOK_URL not set')
    return res.status(500).json({ error: 'Server configuration error.' })
  }

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        embeds: [{
          title: '🎮 New Early Access Request',
          color: 0x6366f1,
          fields: [
            { name: 'Platform', value: storeName, inline: true },
            { name: 'Email', value: email, inline: true },
          ],
          timestamp: new Date().toISOString(),
        }],
      }),
    })

    if (!response.ok) {
      console.error('Discord webhook error:', response.status)
      return res.status(500).json({ error: 'Failed to send request. Please try again.' })
    }

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Webhook error:', err)
    return res.status(500).json({ error: 'Failed to send request. Please try again.' })
  }
}
