import { describe, expect, it } from 'vitest'
import { createLeadPayload, normalizeLeadEmail } from '../src/lib/leads'

describe('free tool result gate', () => {
  it('normalizes valid email and rejects invalid email', () => {
    expect(normalizeLeadEmail(' USER@Example.com ')).toBe('user@example.com')
    expect(() => normalizeLeadEmail('bukan-email')).toThrow('Email tidak valid')
  })

  it('keeps result delivery separate from newsletter consent', () => {
    expect(createLeadPayload('user@example.com', 'readiness', false)).toEqual({
      email: 'user@example.com',
      tool: 'readiness',
      newsletterConsent: false,
    })
    expect(createLeadPayload('user@example.com', 'job-fit', true).newsletterConsent).toBe(true)
  })
})
