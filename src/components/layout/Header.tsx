import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Container from '@/components/ui/Container';
import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('common');

  return (
    <header className="sticky top-0 z-40 bg-[#fffcf9]/95 backdrop-blur-sm border-b border-teal-200/30">
      <a href="#main-content" className="skip-link">
        {t('skipToContent')}
      </a>
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg font-serif">NJ</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-sm font-bold text-foreground leading-tight block">NJ Grief</span>
              <span className="text-xs text-muted-foreground leading-tight block">Collaborative</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Navigation />
            <div className="ml-4 pl-4 border-l border-border">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
