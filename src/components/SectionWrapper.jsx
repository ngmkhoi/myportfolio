import { useScrollReveal } from '../hooks/useScrollReveal'

/**
 * Reusable section wrapper with consistent spacing, title, and scroll reveal.
 */
export default function SectionWrapper({ id, title, subtitle, children, className = '' }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-28 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        {title && (
          <div className={`text-center mb-16 reveal ${isVisible ? 'revealed' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-3">
              {title}
              <span className="text-[var(--color-accent)]">.</span>
            </h2>
            {subtitle && (
              <p className="text-[var(--color-text-muted)] text-lg max-w-xl mx-auto">
                {subtitle}
              </p>
            )}
            {/* Decorative line */}
            <div className="mt-6 mx-auto w-20 h-1 rounded-full bg-[var(--color-accent)]" />
          </div>
        )}

        {/* Section Content */}
        <div className={`reveal ${isVisible ? 'revealed' : ''}`}>
          {children}
        </div>
      </div>
    </section>
  )
}
