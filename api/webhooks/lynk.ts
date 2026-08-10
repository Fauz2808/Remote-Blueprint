import { createClient } from '@supabase/supabase-js'
import { buildLynkSignature, parseLynkPayment, signatureMatches, type LynkWebhookPayload } from '../_lib/lynk.js'

type Request = { method?: string; body?: unknown; headers: Record<string, string | string[] | undefined> }
type Response = { status(code: number): Response; json(body: unknown): Response }

export default async function handler(request: Request, response: Response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' })
  const merchantKey = process.env.LYNK_MERCHANT_KEY
  const productUuid = process.env.LYNK_CORE_PRODUCT_UUID
  const supabaseUrl = process.env.SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!merchantKey || !productUuid || !supabaseUrl || !serviceKey) return response.status(503).json({ error: 'Webhook not configured' })

  try {
    const payload = request.body as LynkWebhookPayload
    const data = payload?.data?.message_data
    const messageId = payload?.data?.message_id
    const received = String(request.headers['x-lynk-signature'] ?? '')
    if (!data || !messageId) return response.status(400).json({ error: 'Invalid payload' })
    const calculated = buildLynkSignature(String(data.totals.grandTotal), data.refId, messageId, merchantKey)
    if (!signatureMatches(received, calculated)) return response.status(401).json({ error: 'Invalid signature' })

    const payment = parseLynkPayment(payload, new Map([[productUuid, 'core']]))
    const supabase = createClient(supabaseUrl, serviceKey, { auth: { autoRefreshToken: false, persistSession: false } })
    const existing = await supabase.auth.admin.listUsers({ page: 1, perPage: 1000 })
    if (existing.error) throw existing.error
    let user = existing.data.users.find(({ email }) => email?.toLowerCase() === payment.email)
    if (!user) {
      const created = await supabase.auth.admin.createUser({ email: payment.email, email_confirm: true, user_metadata: { name: payment.name } })
      if (created.error) throw created.error
      user = created.data.user
    }
    if (!user) throw new Error('Unable to create customer account')

    const processed = await supabase.rpc('process_lynk_payment', {
      p_email: payment.email,
      p_name: payment.name,
      p_ref_id: payment.refId,
      p_message_id: payment.messageId,
      p_product_uuid: payment.productUuid,
      p_tier: payment.tier,
      p_listed_price: payment.listedPrice,
      p_grand_total: payment.grandTotal,
      p_purchased_at: payment.purchasedAt,
    })
    if (processed.error) throw processed.error
    return response.status(200).json({ received: true })
  } catch (error) {
    console.error('Lynk webhook failed', error instanceof Error ? error.message : 'Unknown error')
    return response.status(400).json({ error: 'Webhook rejected' })
  }
}
