'use client';

import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Section from '@/components/ui/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

interface Event {
  slug: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  virtual: boolean;
  description: string;
  cost: string;
  registrationUrl: string;
  host: string;
  category: string;
}

const sampleEvents: Event[] = [
  {
    slug: 'grief-101-educators-april',
    title: 'Grief 101 for Educators',
    date: '2026-04-15T09:00:00',
    endDate: '2026-04-15T11:00:00',
    location: 'Virtual via Zoom',
    virtual: true,
    description: 'A foundational workshop for school professionals covering childhood grief basics and classroom strategies.',
    cost: 'Free',
    registrationUrl: '#',
    host: 'NJ Grief Collaborative',
    category: 'Training',
  },
  {
    slug: 'grief-informed-schools-workshop',
    title: 'Building Grief-Informed Schools Workshop',
    date: '2026-04-22T09:00:00',
    endDate: '2026-04-22T15:00:00',
    location: 'Good Grief Center, Morristown, NJ',
    virtual: false,
    description: 'A full-day workshop for school leadership teams on implementing grief-informed practices district-wide.',
    cost: '$75',
    registrationUrl: '#',
    host: 'Good Grief',
    category: 'Workshop',
  },
  {
    slug: 'parent-grief-support-webinar',
    title: 'Supporting Your Grieving Child: A Webinar for Parents',
    date: '2026-05-03T19:00:00',
    endDate: '2026-05-03T20:30:00',
    location: 'Virtual via Zoom',
    virtual: true,
    description: 'An evening webinar for parents on understanding childhood grief and practical ways to support your child at home.',
    cost: 'Free',
    registrationUrl: '#',
    host: 'Imagine',
    category: 'Webinar',
  },
  {
    slug: 'crisis-response-training',
    title: 'Responding to Crisis Loss in Schools',
    date: '2026-05-14T09:00:00',
    endDate: '2026-05-14T12:00:00',
    location: 'The Alcove Center, Northfield, NJ',
    virtual: false,
    description: 'Training for school crisis teams on protocols, communication, and supporting the school community after a death.',
    cost: '$50',
    registrationUrl: '#',
    host: 'The Alcove',
    category: 'Training',
  },
  {
    slug: 'teen-grief-seminar',
    title: 'Understanding Adolescent Grief: A Seminar',
    date: '2026-05-28T13:00:00',
    endDate: '2026-05-28T15:00:00',
    location: 'Virtual via Zoom',
    virtual: true,
    description: 'Exploring the unique challenges of teen grief and strategies for supporting adolescents in school settings.',
    cost: 'Free',
    registrationUrl: '#',
    host: 'Common Ground',
    category: 'Seminar',
  },
];

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return {
    month: date.toLocaleDateString('en-US', { month: 'short' }),
    day: date.getDate(),
    time: date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }),
    full: date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
    monthYear: date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
  };
}

export default function EventsPage() {
  const t = useTranslations('events');

  const groupedEvents = useMemo(() => {
    const groups: Record<string, Event[]> = {};
    sampleEvents
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .forEach((event) => {
        const key = formatDate(event.date).monthYear;
        if (!groups[key]) groups[key] = [];
        groups[key].push(event);
      });
    return groups;
  }, []);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl font-serif">{t('title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      <Section>
        {Object.entries(groupedEvents).map(([month, events]) => (
          <div key={month} className="mb-12 last:mb-0">
            <h2 className="text-2xl font-bold text-foreground font-serif mb-6 pb-2 border-b border-border">
              {month}
            </h2>
            <div className="space-y-4">
              {events.map((event) => {
                const date = formatDate(event.date);
                return (
                  <div
                    key={event.slug}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-shadow"
                  >
                    {/* Date block */}
                    <div className="flex sm:flex-col items-center sm:items-center justify-center sm:w-20 shrink-0">
                      <span className="text-sm font-semibold text-primary uppercase">{date.month}</span>
                      <span className="text-3xl font-bold text-foreground ml-2 sm:ml-0">{date.day}</span>
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <Link href={`/events/${event.slug}`}>
                        <h3 className="text-xl font-bold font-serif text-foreground hover:text-primary transition-colors">
                          {event.title}
                        </h3>
                      </Link>
                      <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        <Badge variant={event.virtual ? 'purple' : 'teal'}>
                          {event.virtual ? t('virtual') : t('inPerson')}
                        </Badge>
                        {event.cost === 'Free' && <Badge variant="gold">{t('free')}</Badge>}
                        <span className="text-xs text-muted-foreground">
                          {date.time} &bull; {event.location}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">{t('host')}: {event.host}</p>
                    </div>

                    {/* Register button */}
                    <div className="flex items-center sm:shrink-0">
                      <a href={event.registrationUrl}>
                        <Button size="sm">{t('registerNow')}</Button>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Section>
    </>
  );
}
