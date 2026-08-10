import { describe, expect, it } from 'vitest'
import { scoreReadiness } from '../src/starter'

describe('scoreReadiness', () => {
  it('membatasi skor dan mengklasifikasikan empat tingkat kesiapan', () => {
    expect(scoreReadiness(Array(12).fill(0)).score).toBe(0)
    expect(scoreReadiness(Array(12).fill(3)).score).toBe(100)
    expect(scoreReadiness(Array(12).fill(0)).status).toBe('Belum siap')
    expect(scoreReadiness(Array(12).fill(1)).status).toBe('Siap membangun profil')
    expect(scoreReadiness(Array(12).fill(2)).status).toBe('Siap mencari job')
    expect(scoreReadiness(Array(12).fill(3)).status).toBe('Siap apply')
  })

  it('menghasilkan tepat tiga gap dan next action prioritas', () => {
    const result = scoreReadiness([3, 3, 3, 0, 0, 1, 2, 2, 3, 3, 3, 3])
    expect(result.gaps).toHaveLength(3)
    expect(result.actions).toHaveLength(3)
    expect(result.gaps[0]).toContain('Proof')
  })
})
