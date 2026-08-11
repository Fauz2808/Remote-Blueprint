import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { faqItems, landingSections, paidProduct, starterModules } from '../src/data/landing'

describe('public landing information architecture', () => {
  it('covers the approved landing journey in order', () => {
    expect(landingSections).toEqual([
      'problems', 'journey', 'starter', 'outputs', 'paid-product',
      'curriculum', 'labs', 'audience', 'trust', 'pricing', 'faq',
    ])
  })

  it('keeps Starter as one free product with three modules', () => {
    expect(starterModules.map(({ name }) => name)).toEqual([
      'Quick Guide', 'Readiness Scanner', 'Job Fit Checker',
    ])
  })

  it('uses the existing paid-product identity and honest scope', () => {
    expect(paidProduct.name).toBe('Remote Blueprint — Upwork Survival System')
    expect(paidProduct.stats).toEqual(['5 fase', '17 lesson', '28 action'])
    expect(paidProduct.name).not.toContain('Core')
  })

  it('answers key objections without fabricated guarantees', () => {
    expect(faqItems.length).toBeGreaterThanOrEqual(8)
    expect(JSON.stringify(faqItems)).not.toMatch(/jaminan (klien|pendapatan)/i)
  })

  it('keeps the retired Core name out of public surfaces', () => {
    const publicCopy = ['src/Landing.tsx', 'src/Starter.tsx', 'src/Legal.tsx']
      .map((path) => readFileSync(path, 'utf8'))
      .join('\n')
    expect(publicCopy).not.toMatch(/\bCore\b/)
  })
})
