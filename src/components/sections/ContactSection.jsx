import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle, AlertCircle, Github, Linkedin, Mail as MailIcon } from 'lucide-react'
import { profile } from '../../data/profile'
import SectionWrapper from '../SectionWrapper'
import GlassCard from '../GlassCard'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function ContactSection() {
  const { t } = useTranslation()
  const [status, setStatus] = useState(null) // 'success' | 'error' | null
  const [submitting, setSubmitting] = useState(false)

  const schema = yup.object({
    name: yup.string().required(t('contact.name_required')),
    email: yup.string().email(t('contact.email_invalid')).required(t('contact.email_required')),
    message: yup.string().required(t('contact.message_required')),
  })

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (data) => {
    setSubmitting(true)
    setStatus(null)

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const socialLinks = [
    { icon: Github, href: profile.social.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
    { icon: MailIcon, href: `mailto:${profile.social.email}`, label: 'Email' },
  ].filter((link) => link.href)

  const inputClass = `w-full bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all duration-250`

  return (
    <SectionWrapper
      id="contact"
      title={t('contact.title')}
      subtitle={t('contact.subtitle')}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Form */}
        <GlassCard hover={false}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                {t('contact.name')}
              </label>
              <input
                id="contact-name"
                type="text"
                {...register('name')}
                className={inputClass}
                placeholder="John Doe"
              />
              {errors.name && (
                <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                {t('contact.email')}
              </label>
              <input
                id="contact-email"
                type="email"
                {...register('email')}
                className={inputClass}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                {t('contact.message')}
              </label>
              <textarea
                id="contact-message"
                rows={5}
                {...register('message')}
                className={`${inputClass} resize-none`}
                placeholder="Hello, I'd like to talk about..."
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? (
                <>
                  <span className="animate-spin">⟳</span>
                  {t('contact.sending')}
                </>
              ) : (
                <>
                  <Send size={16} />
                  {t('contact.send')}
                </>
              )}
            </button>

            {/* Status Messages */}
            {status === 'success' && (
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle size={16} />
                {t('contact.success')}
              </div>
            )}
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <AlertCircle size={16} />
                {t('contact.error')}
              </div>
            )}
          </form>
        </GlassCard>

        {/* Social Links & Info */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
              {t('contact.subtitle')}
            </h3>
            <p className="text-[var(--color-text-muted)] leading-relaxed">
              {profile.bio[localStorage.getItem('portfolio_lang') || 'en']}
            </p>
          </div>

          {/* Social Link Cards */}
          <div className="space-y-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card glass-card-hover p-4 flex items-center gap-4 cursor-pointer block"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <link.icon size={20} className="text-[var(--color-accent)]" />
                </div>
                <div>
                  <p className="font-medium text-[var(--color-text-primary)] text-sm">{link.label}</p>
                  <p className="text-xs text-[var(--color-text-muted)]">{link.href.replace('mailto:', '')}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
