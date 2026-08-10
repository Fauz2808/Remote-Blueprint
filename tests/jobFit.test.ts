import { describe, expect, it } from 'vitest'
import { scoreJobFit } from '../src/starter'

const strongJob = {
  skillFit: 1,
  proof: 1,
  brief: 1,
  budget: 1,
  paymentVerified: true,
  clientHistory: 1,
  competition: 1,
  clientActive: true,
  connects: 6,
  redFlags: [],
}

describe('scoreJobFit', () => {
  it('memberi APPLY untuk fit kuat dan aman', () => {
    const result = scoreJobFit(strongJob)
    expect(result.score).toBe(100)
    expect(result.decision).toBe('APPLY')
    expect(result.risk).toBe('Rendah')
  })

  it('memberi SKIP untuk fit lemah', () => {
    expect(scoreJobFit({ ...strongJob, skillFit: 0.25, proof: 0, brief: 0.25, budget: 0.25, competition: 0 }).decision).toBe('SKIP')
  })

  it('red flag keamanan mengubah skor tinggi menjadi AVOID/REPORT', () => {
    const result = scoreJobFit({ ...strongJob, redFlags: ['outside-payment'] })
    expect(result.score).toBe(100)
    expect(result.decision).toBe('AVOID/REPORT')
    expect(result.reasons[0]).toContain('pembayaran di luar Upwork')
  })
})
