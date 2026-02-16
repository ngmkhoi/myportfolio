import { useTranslation } from 'react-i18next'
import { Star, GitFork, ExternalLink, Users, BookOpen, Loader2 } from 'lucide-react'
import { profile } from '../../data/profile'
import { useGitHub } from '../../hooks/useGitHub'
import SectionWrapper from '../SectionWrapper'
import GlassCard from '../GlassCard'

// Language color map (common GitHub languages)
const langColors = {
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Python: '#3572A5',
  Java: '#B07219',
  HTML: '#E34C26',
  CSS: '#563D7C',
  'C++': '#F34B7D',
  Go: '#00ADD8',
  Rust: '#DEA584',
  Ruby: '#701516',
  PHP: '#4F5D95',
}

function StatCard({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-col items-center gap-1 px-4 py-3">
      <Icon size={18} className="text-[var(--color-accent)]" />
      <span className="text-xl font-bold text-[var(--color-text-primary)]">{value}</span>
      <span className="text-xs text-[var(--color-text-muted)]">{label}</span>
    </div>
  )
}

function RepoCard({ repo }) {
  return (
    <GlassCard className="flex flex-col h-full">
      <div className="flex-1">
        <h4 className="font-bold text-[var(--color-text-primary)] mb-2 truncate">
          {repo.name}
        </h4>
        <p className="text-sm text-[var(--color-text-muted)] mb-4 line-clamp-2">
          {repo.description || 'No description'}
        </p>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-[var(--color-border)]">
        <div className="flex items-center gap-4">
          {repo.language && (
            <span className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)]">
              <span
                className="w-3 h-3 rounded-full inline-block"
                style={{ backgroundColor: langColors[repo.language] || '#8B8B8B' }}
              />
              {repo.language}
            </span>
          )}
          <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
            <Star size={12} />
            {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1 text-xs text-[var(--color-text-muted)]">
            <GitFork size={12} />
            {repo.forks_count}
          </span>
        </div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-250 cursor-pointer"
          aria-label={`View ${repo.name} on GitHub`}
        >
          <ExternalLink size={14} />
        </a>
      </div>
    </GlassCard>
  )
}

export default function GitHubSection() {
  const { t } = useTranslation()
  const { repos, user, loading, error } = useGitHub(profile.github)

  return (
    <SectionWrapper
      id="github"
      title={t('github.title')}
      subtitle={t('github.subtitle')}
    >
      {loading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 size={32} className="text-[var(--color-accent)] animate-spin" />
        </div>
      ) : error ? (
        <div className="text-center py-16">
          <p className="text-[var(--color-text-muted)]">{t('github.rate_limited')}</p>
          <a
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-6 inline-flex"
          >
            {t('github.view_github')}
            <ExternalLink size={16} />
          </a>
        </div>
      ) : (
        <>
          {/* User Stats */}
          {user && (
            <GlassCard hover={false} className="mb-12 max-w-lg mx-auto">
              <div className="flex items-center justify-center divide-x divide-[var(--color-border)]">
                <StatCard icon={BookOpen} label={t('github.repos')} value={user.public_repos} />
                <StatCard icon={Users} label={t('github.followers')} value={user.followers} />
                <StatCard icon={Users} label={t('github.following')} value={user.following} />
              </div>
            </GlassCard>
          )}

          {/* Repo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>

          {/* View all link */}
          <div className="text-center mt-10">
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex"
            >
              {t('github.view_github')}
              <ExternalLink size={16} />
            </a>
          </div>
        </>
      )}
    </SectionWrapper>
  )
}
