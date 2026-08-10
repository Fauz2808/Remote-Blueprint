import { describe, expect, it } from 'vitest'
import { mergeProgress } from '../src/lib/progress'

describe('progress migration', () => {
  it('keeps completed actions from both local and server state', () => {
    expect(mergeProgress(
      { 'proof::0': true, 'profile::0': false },
      { 'profile::0': true, 'job::0': true },
    )).toEqual({ 'proof::0': true, 'profile::0': true, 'job::0': true })
  })

  it('drops false and malformed values', () => {
    expect(mergeProgress({ a: false, b: true }, { c: false })).toEqual({ b: true })
  })
})
