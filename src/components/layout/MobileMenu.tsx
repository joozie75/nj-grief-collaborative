'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Navigation from './Navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('common');

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:text-primary transition-colors"
        aria-label={isOpen ? t('closeMenu') : t('openMenu')}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full bg-white border-b border-border shadow-lg z-50">
          <div className="px-4 py-6 space-y-4">
            <Navigation mobile onItemClick={() => setIsOpen(false)} />
            <div className="pt-4 border-t border-border">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
