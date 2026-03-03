import { useTranslation } from 'react-i18next'
import { ArrowDown, FolderOpen, Mail } from 'lucide-react'
import { profile } from '../../data/profile'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useTypingEffect } from '../../hooks/useTypingEffect'
import LetterGlitch from '../LetterGlitch'
import ShinyText from '../ShinyText.jsx'

export default function HeroSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 })
  
  // Typing animation for role
  const typedText = useTypingEffect(profile.typingRoles[lang] || profile.typingRoles.en, 100, 50, 1500)

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* LetterGlitch canvas background */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.3 }}>
        <LetterGlitch
          glitchColors={['#0f2e1c', '#22c55e', '#16a34a']}
          glitchSpeed={60}
          outerVignette={true}
          centerVignette={false}
          smooth={true}
        />
      </div>

      {/* Subtle gradient overlay to keep text readable */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[var(--color-bg-primary)]/30 via-transparent to-[var(--color-bg-primary)]/60" />


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

        {/* Role with typing animation */}
        <div className={`flex items-center justify-center gap-2 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 reveal ${isVisible ? 'revealed' : ''} reveal-delay-2`}>
          <span className="text-[var(--color-accent)] min-h-[1.2em]">{typedText}</span>
          <span className="text-[var(--color-accent)] animate-cursor">|</span>
        </div>

        {/* Tagline */}
        <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 reveal ${isVisible ? 'revealed' : ''} reveal-delay-3`}>
          <ShinyText 
            text={profile.tagline[lang]} 
            disabled={false} 
            speed={3} 
            className="text-[var(--color-text-secondary)]"
            color="currentColor" 
            shineColor="#ffffff" 
            spread={120}
          />
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
