import { createHash, timingSafeEqual } from 'node:crypto'

export type LynkWebhookPayload = {
  event: string
  data: {
    message_action: string
    message_code: string
    message_id: string
    message_data: {
      createdAt: string
      customer: { email: string; name?: string }
      items: Array<{ uuid: string; title: string; price: number; qty: number }>
      refId: string
      totals: { grandTotal: number }
    }
  }
}

export function buildLynkSignature(amount: string, refId: string, messageId: string, merchantKey: string) {
  return createHash('sha256').update(amount + refId + messageId + merchantKey).digest('hex')
}

export function signatureMatches(received: string, calculated: string) {
  const left = Buffer.from(received, 'hex')
  const right = Buffer.from(calculated, 'hex')
  return left.length === right.length && left.length === 32 && timingSafeEqual(left, right)
}

export function parseLynkPayment(payload: LynkWebhookPayload, products: Map<string, string>) {
  if (payload.event !== 'payment.received' || payload.data.message_action !== 'SUCCESS' || payload.data.message_code !== '0') {
    throw new Error('Payment is not successful')
  }
  const data = payload.data.message_data
  const item = data.items.find(({ uuid }) => products.has(uuid))
  if (!item) throw new Error('Unknown Lynk product')
  const email = data.customer.email.trim().toLowerCase()
  if (!/^\S+@\S+\.\S+$/.test(email)) throw new Error('Invalid customer email')

  return {
    email,
    name: data.customer.name?.trim() || null,
    refId: data.refId,
    messageId: payload.data.message_id,
    productUuid: item.uuid,
    tier: products.get(item.uuid)!,
    listedPrice: item.price,
    grandTotal: data.totals.grandTotal,
    purchasedAt: data.createdAt,
  }
}
