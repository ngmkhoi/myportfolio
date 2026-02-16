import { useTranslation } from 'react-i18next'
import { ArrowDown, FolderOpen, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function HeroSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 })

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--color-accent)] rounded-full opacity-[0.07] blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-[0.05] blur-[120px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full opacity-[0.04] blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--color-text-muted) 1px, transparent 1px),
                            linear-gradient(90deg, var(--color-text-muted) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Greeting */}
        <p className={`text-[var(--color-accent)] text-lg font-medium mb-4 reveal ${isVisible ? 'revealed' : ''}`}>
          {t('hero.greeting')}
        </p>

        {/* Name */}
        <h1 className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-4 reveal ${isVisible ? 'revealed' : ''} reveal-delay-1`}>
          <span className="text-[var(--color-text-primary)]">{profile.name}</span>
        </h1>

        {/* Role with typing cursor */}
        <div className={`flex items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 reveal ${isVisible ? 'revealed' : ''} reveal-delay-2`}>
          <span className="text-[var(--color-accent)]">{profile.role[lang]}</span>
          <span className="text-[var(--color-accent)] animate-cursor">|</span>
        </div>

        {/* Tagline */}
        <p className={`text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 reveal ${isVisible ? 'revealed' : ''} reveal-delay-3`}>
          {profile.tagline[lang]}
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-wrap items-center justify-center gap-4 reveal ${isVisible ? 'revealed' : ''} reveal-delay-4`}>
          <a href="#projects" className="btn-primary">
            <FolderOpen size={18} />
            {t('hero.cta_projects')}
          </a>
          <a href="#contact" className="btn-outline">
            <Mail size={18} />
            {t('hero.cta_contact')}
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-text-muted)]">
        <span className="text-xs">{t('hero.scroll_hint')}</span>
        <ArrowDown size={16} className="animate-float" />
      </div>
    </section>
  )
}
