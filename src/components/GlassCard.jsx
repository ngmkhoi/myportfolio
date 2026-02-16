/**
 * Reusable glassmorphism card with optional hover glow effect.
 */
export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`glass-card ${hover ? 'glass-card-hover' : ''} p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
