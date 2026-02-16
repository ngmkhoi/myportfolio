import { useTranslation } from 'react-i18next'
import * as LucideIcons from 'lucide-react'
import { skillCategories } from '../../data/skills'
import SectionWrapper from '../SectionWrapper'

export default function SkillsSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <SectionWrapper
      id="skills"
      title={t('skills.title')}
      subtitle={t('skills.subtitle')}
    >
      {/* Bento Grid Layout - Style 53: Bento Grids (Apple-style, modular, rounded, soft) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
        {skillCategories.map((category, index) => (
          <div
            key={category.id}
            className={`
              group relative overflow-hidden
              bg-[var(--color-bg-secondary)]/50 backdrop-blur-xl
              border border-[var(--color-border)]/50
              p-8
              transition-all duration-300 ease-out
              hover:scale-[1.02] hover:shadow-xl hover:shadow-[var(--color-accent)]/5 hover:border-[var(--color-accent)]/20
              flex flex-col
              ${/* Varied card spans for Bento feel: first and last span full width on small screens if needed, or alternating */ ''}
              rounded-[24px] /* Bento Spec: 24px radius */
            `}
            style={{ 
              animationDelay: `${index * 100}ms`
            }}
          >
            {/* Soft gradient background effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Header */}
            <div className="relative z-10 flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-bg-primary)] shadow-sm flex items-center justify-center text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-300">
                {index === 0 && <LucideIcons.LayoutTemplate size={24} />}
                {index === 1 && <LucideIcons.Server size={24} />}
                {index === 2 && <LucideIcons.Database size={24} />}
                {index === 3 && <LucideIcons.Wrench size={24} />}
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                {category.label[lang]}
              </h3>
            </div>

            {/* Skills Grid - Clean hierarchy */}
            <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill, skillIdx) => {
                const IconComponent = LucideIcons[skill.icon] || LucideIcons.Code2
                return (
                  <div
                    key={`${category.id}-${skillIdx}`}
                    className="
                      flex items-center gap-3 p-3
                      rounded-xl
                      bg-[var(--color-bg-primary)]/80 hover:bg-[var(--color-bg-primary)]
                      border border-transparent hover:border-[var(--color-accent)]/20
                      transition-all duration-200
                      group/skill cursor-default
                    "
                  >
                    <IconComponent 
                      size={18} 
                      className="text-[var(--color-text-secondary)] group-hover/skill:text-[var(--color-accent)] transition-colors" 
                    />
                    <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover/skill:text-[var(--color-text-primary)] transition-colors">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
