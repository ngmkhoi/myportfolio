import { useTranslation } from 'react-i18next'
import { Code2, Coffee, Rocket } from 'lucide-react'
import { profile } from '../../data/profile'
import SectionWrapper from '../SectionWrapper'
import GlassCard from '../GlassCard'

const highlights = [
  {
    icon: Code2,
    title: { vi: 'Fullstack', en: 'Fullstack' },
    desc: { vi: 'Frontend & Backend', en: 'Frontend & Backend' },
  },
  {
    icon: Coffee,
    title: { vi: 'Đam mê', en: 'Passionate' },
    desc: { vi: 'Luôn học hỏi', en: 'Always learning' },
  },
  {
    icon: Rocket,
    title: { vi: 'Sáng tạo', en: 'Creative' },
    desc: { vi: 'Giải pháp hiện đại', en: 'Modern solutions' },
  },
]

export default function AboutSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <SectionWrapper
      id="about"
      title={t('about.title')}
      subtitle={t('about.subtitle')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Bio */}
        <div className="space-y-6">
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
            {profile.bio[lang]}
          </p>

          {/* Fun stat */}
          <div className="flex items-center gap-3 text-[var(--color-text-muted)]">
            <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] glow-accent" />
            <span className="text-sm">
              {lang === 'vi' ? 'Đang tìm kiếm cơ hội Junior / Fresher Fullstack' : 'Looking for Junior / Fresher Fullstack opportunities'}
            </span>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {highlights.map((item, idx) => (
            <GlassCard key={idx} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 mb-3">
                <item.icon size={24} className="text-[var(--color-accent)]" />
              </div>
              <h4 className="font-bold text-[var(--color-text-primary)] mb-1">
                {item.title[lang]}
              </h4>
              <p className="text-sm text-[var(--color-text-muted)]">
                {item.desc[lang]}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
