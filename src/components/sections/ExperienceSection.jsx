import { useTranslation } from 'react-i18next'
import { GraduationCap, Briefcase, Award } from 'lucide-react'
import { experiences } from '../../data/experience'
import SectionWrapper from '../SectionWrapper'
import GlassCard from '../GlassCard'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const typeIcons = {
  education: GraduationCap,
  work: Briefcase,
  certification: Award,
}

const typeColors = {
  education: 'text-blue-400',
  work: 'text-[var(--color-accent)]',
  certification: 'text-amber-400',
}

function TimelineItem({ item, index }) {
  const { i18n } = useTranslation()
  const lang = i18n.language
  const { ref, isVisible } = useScrollReveal({ rootMargin: '0px 0px -30px 0px' })
  const Icon = typeIcons[item.type] || Briefcase
  const colorClass = typeColors[item.type] || 'text-[var(--color-accent)]'

  return (
    <div
      ref={ref}
      className={`relative pl-12 pb-12 last:pb-0 reveal ${isVisible ? 'revealed' : ''}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline dot */}
      <div className="timeline-dot top-1">
        <div className="sr-only">{item.type}</div>
      </div>

      <GlassCard className="relative">
        {/* Date badge */}
        <span className="inline-block text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full mb-3">
          {item.date[lang]}
        </span>

        <div className="flex items-start gap-3">
          <div className={`mt-0.5 ${colorClass}`}>
            <Icon size={20} />
          </div>
          <div>
            <h4 className="font-bold text-[var(--color-text-primary)] mb-1">
              {item.title[lang]}
            </h4>
            <p className="text-sm font-medium text-[var(--color-accent)] mb-2">
              {item.organization[lang]}
            </p>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {item.description[lang]}
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}

export default function ExperienceSection() {
  const { t } = useTranslation()

  return (
    <SectionWrapper
      id="experience"
      title={t('experience.title')}
      subtitle={t('experience.subtitle')}
    >
      <div className="max-w-2xl mx-auto relative">
        {/* Timeline line */}
        <div className="timeline-line" />

        {/* Timeline items */}
        {experiences.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
