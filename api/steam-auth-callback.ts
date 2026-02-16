import type { VercelRequest, VercelResponse } from '@vercel/node'

const SUPABASE_FUNCTION_URL =
  'https://ztnvljyjyzvwqjrnrmth.supabase.co/functions/v1/steam-auth-callback'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  // Forward all query params (OpenID assertion + state) to Supabase edge function
  const params = new URLSearchParams(req.query as Record<string, string>)
  const url = `${SUPABASE_FUNCTION_URL}?${params}`

  try {
    const response = await fetch(url, { redirect: 'manual' })

    // The edge function returns a 302 redirect to rally:// deep link — forward it
    const location = response.headers.get('location')
    if (location) {
      return res.redirect(302, location)
    }

    const body = await response.text()
    return res.status(response.status).send(body)
  } catch (err: any) {
    console.error('steam-auth-callback proxy error:', err)
    return res.redirect(302, 'rally://steam-callback?error=internal_error')
  }
}
