import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'

const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  { key: 'projects', href: '#projects' },
  { key: 'experience', href: '#experience' },
  { key: 'github', href: '#github' },
  { key: 'contact', href: '#contact' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en')
  }

  const handleNavClick = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold font-[family-name:var(--font-heading)] tracking-tight hover:opacity-80 transition-opacity duration-250 cursor-pointer"
        >
          <span className="text-[var(--color-text-muted)]">about</span>
          <span className="text-[var(--color-accent)]">khoi</span>
          <span className="text-[var(--color-text-muted)]">.dev</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-250 cursor-pointer"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-250 cursor-pointer"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span className="uppercase">{i18n.language}</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[var(--color-text-primary)] cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-nav rounded-b-2xl border-t border-[var(--color-border)] px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={handleNavClick}
              className="block text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-250 cursor-pointer py-2"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-250 cursor-pointer py-2"
          >
            <Globe size={16} />
            <span className="uppercase">{i18n.language}</span>
          </button>
        </div>
      )}
    </nav>
  )
}
