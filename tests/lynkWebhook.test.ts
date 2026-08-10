import { describe, expect, it } from 'vitest'
import {
  buildLynkSignature,
  parseLynkPayment,
  type LynkWebhookPayload,
} from '../api/_lib/lynk'

const payload: LynkWebhookPayload = {
  event: 'payment.received',
  data: {
    message_action: 'SUCCESS',
    message_code: '0',
    message_id: 'msg-1',
    message_data: {
      createdAt: '2026-08-10T12:00:00',
      customer: { email: ' USER@EXAMPLE.COM ', name: 'User' },
      items: [{ uuid: 'core-uuid', title: 'Remote Blueprint Core', price: 149000, qty: 1 }],
      refId: 'ref-1',
      totals: { grandTotal: 145000 },
    },
  },
}

describe('Lynk webhook contract', () => {
  it('builds signature in documented field order', () => {
    expect(buildLynkSignature('145000', 'ref-1', 'msg-1', 'merchant-secret'))
      .toBe('1702881155524066411c52820ed56afd8b61785775aedbc2168f1b5759180066')
  })

  it('accepts successful Core payment and normalizes email', () => {
    expect(parseLynkPayment(payload, new Map([['core-uuid', 'core']]))).toEqual({
      email: 'user@example.com',
      name: 'User',
      refId: 'ref-1',
      messageId: 'msg-1',
      productUuid: 'core-uuid',
      tier: 'core',
      listedPrice: 149000,
      grandTotal: 145000,
      purchasedAt: '2026-08-10T12:00:00',
    })
  })

  it('rejects non-success events', () => {
    const failed = structuredClone(payload)
    failed.data.message_action = 'FAILED'
    expect(() => parseLynkPayment(failed, new Map([['core-uuid', 'core']]))).toThrow('Payment is not successful')
  })

  it('rejects unknown products', () => {
    expect(() => parseLynkPayment(payload, new Map())).toThrow('Unknown Lynk product')
  })
})
