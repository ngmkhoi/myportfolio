import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll reveal animations using Intersection Observer.
 * Respects prefers-reduced-motion for accessibility.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin
 * @returns {{ ref, isVisible }}
 */
export function useScrollReveal({ threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = {}) {
  const ref = useRef(null)
  // Lazy initializer: read media query once at mount to avoid setState inside effect
  const [isVisible, setIsVisible] = useState(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    // If already visible (reduced motion), no need to set up the observer
    if (isVisible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin }
    )

    const el = ref.current
    if (el) observer.observe(el)

    return () => {
      if (el) observer.unobserve(el)
    }
  }, [isVisible, threshold, rootMargin])

  return { ref, isVisible }
}
