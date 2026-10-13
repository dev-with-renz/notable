import { describe, expect, it, vi } from 'vitest'
import {
  onCLS,
  onFCP,
  onINP,
  onLCP,
  onTTFB,
} from 'web-vitals'
import reportWebVitals from '../../reportWebVitals'

vi.mock('web-vitals', () => ({
  onCLS: vi.fn(),
  onFCP: vi.fn(),
  onINP: vi.fn(),
  onLCP: vi.fn(),
  onTTFB: vi.fn(),
}))

describe('reportWebVitals', () => {
  it('registers the callback for each supported Web Vital', async () => {
    const callback = vi.fn()

    reportWebVitals(callback)

    await vi.waitFor(() => {
      expect(onCLS).toHaveBeenCalledWith(callback)
      expect(onINP).toHaveBeenCalledWith(callback)
      expect(onFCP).toHaveBeenCalledWith(callback)
      expect(onLCP).toHaveBeenCalledWith(callback)
      expect(onTTFB).toHaveBeenCalledWith(callback)
    })
  })
})
