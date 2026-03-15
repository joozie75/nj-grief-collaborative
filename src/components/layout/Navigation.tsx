'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';

const navItems = [
  { href: '/', key: 'home' },
  { href: '/about', key: 'about' },
  { href: '/mandate', key: 'mandate' },
  { href: '/grief-informed-schools', key: 'griefInformedSchools' },
  { href: '/resources', key: 'resources' },
  { href: '/events', key: 'events' },
  { href: '/training', key: 'training' },
  { href: '/get-involved', key: 'getInvolved' },
  { href: '/contact', key: 'contact' },
] as const;

export default function Navigation({ mobile = false, onItemClick }: { mobile?: boolean; onItemClick?: () => void }) {
  const t = useTranslations('nav');
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className={mobile ? 'flex flex-col space-y-1' : 'flex items-center space-x-1'}>
        {navItems.map((item) => {
          const isActive = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
          return (
            <li key={item.key}>
              <Link
                href={item.href}
                onClick={onItemClick}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-primary bg-primary-light'
                    : 'text-foreground hover:text-primary hover:bg-primary-light'
                } ${mobile ? 'text-base' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {t(item.key)}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { navItems };
