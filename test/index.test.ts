import { describe, it, expect } from 'bun:test'
import { one } from '../src'

describe('should', () => {
  it('export 1', () => {
    expect(one).toBe(1)
  })
})
