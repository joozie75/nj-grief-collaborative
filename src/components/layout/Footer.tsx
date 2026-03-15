'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Container from '@/components/ui/Container';
import LanguageSwitcher from './LanguageSwitcher';

const coalitionMembers = [
  { name: 'Alcove', href: 'https://thealcovenj.org' },
  { name: 'Common Ground Grief Center', href: 'https://commongroundgc.org' },
  { name: 'Good Grief', href: 'https://good-grief.org' },
  { name: 'Imagine', href: 'https://imaginenj.org' },
  { name: "Stephy's Place", href: '#' },
];

const quickLinks = [
  { key: 'about', href: '/about' },
  { key: 'mandate', href: '/mandate' },
  { key: 'resources', href: '/resources' },
  { key: 'events', href: '/events' },
  { key: 'training', href: '/training' },
  { key: 'contact', href: '/contact' },
] as const;

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  return (
    <footer className="bg-foreground text-white" role="contentinfo">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg font-serif">NJ</span>
              </div>
              <div>
                <span className="text-sm font-bold leading-tight block">NJ Grief</span>
                <span className="text-xs text-gray-400 leading-tight block">Collaborative</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Supporting grieving students across New Jersey through education, resources, and community.
            </p>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coalition Members */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{t('coalition')}</h3>
            <ul className="space-y-2">
              {coalitionMembers.map((member) => (
                <li key={member.name}>
                  <a
                    href={member.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {member.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{t('newsletter')}</h3>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder={t('newsletterPlaceholder')}
                className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 border border-white/20 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={t('newsletterPlaceholder')}
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-accent text-white font-medium text-sm hover:bg-accent-hover transition-colors"
              >
                {t('newsletterButton')}
              </button>
            </form>

            {/* Sponsor */}
            <div className="mt-8">
              <p className="text-xs text-gray-500 mb-2">{t('sponsor')}</p>
              <p className="text-sm font-medium text-gray-300">New York Life Foundation</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">{t('privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('accessibility')}</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
