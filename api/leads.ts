import { createClient } from '@supabase/supabase-js'
import { createHash } from 'node:crypto'

type Request = { method?: string; body?: unknown; headers: Record<string, string | string[] | undefined>; socket?: { remoteAddress?: string } }
type Response = { status(code: number): Response; json(body: unknown): Response; setHeader(name: string, value: string): void }

type LeadBody = { email?: unknown; tool?: unknown; newsletterConsent?: unknown; website?: unknown }
const tools = new Set(['readiness', 'job-fit'])

export default async function handler(request: Request, response: Response) {
  response.setHeader('Cache-Control', 'no-store')
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' })
  if (request.headers['content-type']?.toString().split(';')[0] !== 'application/json') return response.status(415).json({ error: 'JSON required' })

  const body = (request.body ?? {}) as LeadBody
  if (body.website) return response.status(200).json({ ok: true })
  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
  const tool = typeof body.tool === 'string' ? body.tool : ''
  const newsletterConsent = body.newsletterConsent === true
  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 254 || !tools.has(tool)) return response.status(400).json({ error: 'Invalid lead data' })

  const url = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceKey) return response.status(503).json({ error: 'Lead storage unavailable' })

  try {
    const supabase = createClient(url, serviceKey, { auth: { persistSession: false, autoRefreshToken: false } })
    const now = new Date().toISOString()
    const objectName = `${createHash('sha256').update(`${email}:${tool}`).digest('hex')}.json`
    // ponytail: private object storage is sufficient below 1,000 leads; migrate to a table when segmentation or bulk querying is needed.
    const { error } = await supabase.storage.from('content-leads').upload(objectName, JSON.stringify({
      email,
      tool,
      newsletterConsent,
      consentedAt: newsletterConsent ? now : null,
      updatedAt: now,
    }), { contentType: 'application/json', upsert: true })
    if (error) throw error
    return response.status(200).json({ ok: true })
  } catch (error) {
    console.error('Lead storage failed', error instanceof Error ? error.message : 'unknown error')
    return response.status(500).json({ error: 'Lead storage failed' })
  }
}
