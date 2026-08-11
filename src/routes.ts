import { articles, phases } from './content/published/content'

export type PublicRoute =
  | { kind: 'start' }
  | { kind: 'phase'; slug: string }
  | { kind: 'library' }
  | { kind: 'article'; slug: string }
  | { kind: 'pathway' }
  | { kind: 'product' }
  | { kind: 'not-found' }

export function resolvePublicRoute(rawPath: string): PublicRoute {
  const path = rawPath.replace(/\/$/, '') || '/'
  if (path === '/mulai') return { kind: 'start' }
  if (path === '/artikel') return { kind: 'library' }
  if (path === '/jalur/upwork') return { kind: 'pathway' }
  if (path === '/produk/upwork-survival-system') return { kind: 'product' }
  const phase = path.match(/^\/fase\/([^/]+)$/)?.[1]
  if (phase && phases.some(({ slug }) => slug === phase)) return { kind: 'phase', slug: phase }
  const article = path.match(/^\/artikel\/([^/]+)$/)?.[1]
  if (article && articles.some(({ slug }) => slug === article)) return { kind: 'article', slug: article }
  return { kind: 'not-found' }
}
