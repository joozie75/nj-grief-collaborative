import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

// Placeholder — will be replaced with Sanity data fetching
export default function EventDetailPage() {
  const t = useTranslations('events');

  return (
    <>
      <section className="bg-gradient-to-br from-teal-50 to-purple-50 py-16">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)]">
          <Link href="/events" className="text-primary hover:underline text-sm mb-4 inline-block">
            &larr; {t('upcoming')}
          </Link>
          <h1 className="text-4xl font-bold text-foreground font-serif">Grief 101 for Educators</h1>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="purple">Virtual</Badge>
            <Badge variant="gold">Free</Badge>
          </div>
        </div>
      </section>

      <Section narrow>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold font-serif text-foreground mb-4">{t('details')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              A foundational workshop for school professionals covering childhood grief basics and classroom strategies.
              This interactive session will provide practical tools and strategies that educators can implement immediately.
            </p>
          </div>

          <div className="bg-muted rounded-xl p-6 space-y-4">
            <div>
              <p className="text-sm font-semibold text-foreground">{t('when')}</p>
              <p className="text-sm text-muted-foreground">April 15, 2026 &bull; 9:00 AM - 11:00 AM</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{t('where')}</p>
              <p className="text-sm text-muted-foreground">Virtual via Zoom</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{t('cost')}</p>
              <p className="text-sm text-muted-foreground">Free</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{t('host')}</p>
              <p className="text-sm text-muted-foreground">NJ Grief Collaborative</p>
            </div>
            <div className="pt-4">
              <Button className="w-full">{t('registerNow')}</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
