import { describe, expect, it } from 'vitest'
import { articles, coreSurfaceCount, phases } from '../src/content/published/content'
import { resolvePublicRoute } from '../src/routes'

describe('platform content contract', () => {
  it('ships five phases and two substantive articles per phase', () => {
    expect(phases).toHaveLength(5)
    expect(articles).toHaveLength(10)
    for (const phase of phases) {
      expect(articles.filter((article) => article.phase === phase.slug)).toHaveLength(2)
    }
  })

  it('ships all 18 approved core surfaces', () => {
    expect(coreSurfaceCount).toBe(18)
  })

  it('keeps article metadata publishable and reviewable', () => {
    expect(new Set(articles.map(({ slug }) => slug)).size).toBe(articles.length)
    for (const article of articles) {
      expect(article.summary.split(/\s+/).length).toBeGreaterThanOrEqual(12)
      expect(article.sections.length).toBeGreaterThanOrEqual(4)
      expect(article.sources.length).toBeGreaterThan(0)
      expect(article.reviewedAt).toMatch(/^2026-08-11$/)
      expect(JSON.stringify(article)).not.toMatch(/placeholder|lorem ipsum|segera hadir/i)
    }
  })
})

describe('public route resolver', () => {
  it.each([
    ['/mulai', 'start'],
    ['/fase/kenali-arah', 'phase'],
    ['/artikel', 'library'],
    ['/artikel/memilih-model-kerja-remote', 'article'],
    ['/jalur/upwork', 'pathway'],
    ['/produk/upwork-survival-system', 'product'],
  ])('resolves %s as %s', (path, kind) => {
    expect(resolvePublicRoute(path).kind).toBe(kind)
  })

  it('returns not-found for an unknown public slug', () => {
    expect(resolvePublicRoute('/artikel/tidak-ada').kind).toBe('not-found')
  })
})
