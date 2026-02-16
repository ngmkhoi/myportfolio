import { useTranslation } from 'react-i18next'
import { Heart, Github } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="text-base font-bold font-[family-name:var(--font-heading)] tracking-tight hover:opacity-80 transition-opacity duration-250 cursor-pointer"
          >
            <span className="text-[var(--color-text-muted)]">about</span>
            <span className="text-[var(--color-accent)]">khoi</span>
            <span className="text-[var(--color-text-muted)]">.dev</span>
          </a>

          {/* Built with */}
          <p className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
            {t('footer.built_with')}
            <Heart size={14} className="text-red-500 fill-red-500" />
            &
            <span className="text-[var(--color-accent)] font-medium">React</span>
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-250 cursor-pointer"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-[var(--color-text-muted)]">
          © {year} {profile.name}. {t('footer.rights')}.
        </div>
      </div>
    </footer>
  )
}
