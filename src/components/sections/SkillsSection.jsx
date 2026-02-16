import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import * as LucideIcons from 'lucide-react'
import { skillCategories } from '../../data/skills'
import SectionWrapper from '../SectionWrapper'

export default function SkillsSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id)

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)?.skills || []

  return (
    <SectionWrapper
      id="skills"
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
    >
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-250 cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-[var(--color-accent)] text-[var(--color-bg-primary)] shadow-lg shadow-[var(--color-accent-glow)]'
                : 'glass-card text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            {cat.label[lang]}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {activeSkills.map((skill, idx) => {
          const IconComponent = LucideIcons[skill.icon] || LucideIcons.Code2
          return (
            <div
              key={`${activeCategory}-${idx}`}
              className="group relative"
              style={{ animationDelay: `${idx * 60}ms` }}
            >
              <div
                className="
                  relative overflow-hidden rounded-2xl p-5
                  bg-[var(--color-bg-secondary)]/60 border border-[var(--color-border)]
                  backdrop-blur-md
                  flex flex-col items-center gap-3 text-center
                  transition-all duration-300 ease-out
                  hover:border-[var(--color-accent)]/50
                  hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]
                  hover:-translate-y-1
                  animate-[fadeSlideUp_0.4s_ease-out_both]
                "
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                {/* Glow orb on hover */}
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-[var(--color-accent)]/0 rounded-full blur-2xl transition-all duration-500 group-hover:bg-[var(--color-accent)]/10" />

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-accent)]/20 group-hover:scale-110">
                  <IconComponent
                    size={26}
                    className="text-[var(--color-accent)] transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]"
                  />
                </div>

                {/* Name */}
                <h4 className="relative font-semibold text-sm text-[var(--color-text-primary)] transition-colors duration-300 group-hover:text-[var(--color-accent)]">
                  {skill.name}
                </h4>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-accent)] rounded-full transition-all duration-300 group-hover:w-8" />
              </div>
            </div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
