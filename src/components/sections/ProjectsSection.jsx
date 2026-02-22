import { useTranslation } from 'react-i18next'
import { ExternalLink, Github, FolderOpen } from 'lucide-react'
import { projects } from '../../data/projects'
import SectionWrapper from '../SectionWrapper'
import GlassCard from '../GlassCard'

export default function ProjectsSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language

  return (
    <SectionWrapper
      id="projects"
      title={t('projects.title')}
      subtitle={t('projects.subtitle')}
    >
      {/* Projects Grid */}
      {projects.length === 0 ? (
        <div className="text-center py-16">
          <FolderOpen size={48} className="mx-auto mb-4 text-[var(--color-text-muted)]" />
          <p className="text-[var(--color-text-muted)] text-lg">{t('projects.no_projects')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlassCard key={project.id} className="flex flex-col group">
              {/* Project Image/Placeholder */}
              <div className="w-full h-48 rounded-lg bg-[var(--color-bg-secondary)] mb-5 overflow-hidden flex items-center justify-center border border-[var(--color-border)]">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <FolderOpen size={32} className="mx-auto text-[var(--color-text-muted)] mb-2" />
                    <span className="text-xs text-[var(--color-text-muted)]">Preview</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
                {project.title[lang]}
              </h3>
              <p className="text-sm text-[var(--color-text-muted)] mb-4 flex-1 line-clamp-3">
                {project.description[lang]}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techs.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-250 cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    {t('projects.view_demo')}
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-250 cursor-pointer"
                  >
                    <Github size={14} />
                    {t('projects.view_code')}
                  </a>
                )}
              </div>
            </GlassCard>
          ))}
        </div>
      )}
    </SectionWrapper>
  )
}
