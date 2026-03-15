'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const t = useTranslations('common');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'es' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <button
      onClick={switchLocale}
      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-1 rounded-md hover:bg-primary-light"
      aria-label={`Switch to ${locale === 'en' ? 'Spanish' : 'English'}`}
    >
      {t('switchLanguage')}
    </button>
  );
}
