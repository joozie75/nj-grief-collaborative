'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardBody, CardFooter } from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

type Audience = 'schoolProfessionals' | 'parents' | 'students';
type Format = 'guide' | 'video' | 'worksheet' | 'presentation' | 'article' | 'toolkit';

interface Resource {
  title: string;
  description: string;
  audiences: Audience[];
  format: Format;
  source: string;
  url: string;
}

const sampleResources: Resource[] = [
  {
    title: 'Understanding Childhood Grief: A Guide for Educators',
    description: 'A comprehensive guide covering the basics of childhood grief, common responses by age group, and practical strategies for classroom support.',
    audiences: ['schoolProfessionals'],
    format: 'guide',
    source: 'Imagine',
    url: '#',
  },
  {
    title: 'Talking to Your Child About Death',
    description: 'Age-appropriate language and approaches for parents navigating conversations about death and loss with their children.',
    audiences: ['parents'],
    format: 'article',
    source: 'Good Grief',
    url: '#',
  },
  {
    title: 'Grief & Me: A Workbook for Teens',
    description: 'An interactive workbook for teens to explore their feelings, memories, and coping strategies in a safe, guided format.',
    audiences: ['students'],
    format: 'worksheet',
    source: 'The Alcove',
    url: '#',
  },
  {
    title: 'Building a Grief-Responsive School: Implementation Toolkit',
    description: 'Step-by-step toolkit for school administrators to create grief-informed policies, protocols, and professional development plans.',
    audiences: ['schoolProfessionals'],
    format: 'toolkit',
    source: 'NJ Grief Collaborative',
    url: '#',
  },
  {
    title: 'When Someone Dies: A Video for Middle Schoolers',
    description: 'A short, sensitively produced video that normalizes grief and introduces healthy coping strategies for middle school students.',
    audiences: ['students', 'schoolProfessionals'],
    format: 'video',
    source: 'Common Ground',
    url: '#',
  },
  {
    title: 'P.L.2023, c.201 Compliance Presentation',
    description: 'A ready-to-use slide deck explaining the NJ grief education mandate for staff meetings and school board presentations.',
    audiences: ['schoolProfessionals'],
    format: 'presentation',
    source: 'NJ Grief Collaborative',
    url: '#',
  },
  {
    title: 'Grief Support at Home: Tips for Families',
    description: 'Practical guidance for parents on how to support grieving children at home, maintain routines, and know when to seek professional help.',
    audiences: ['parents'],
    format: 'guide',
    source: 'Imagine',
    url: '#',
  },
  {
    title: 'Peer Support Training Guide',
    description: 'A guide for high school students interested in becoming peer grief supporters, including conversation skills and self-care.',
    audiences: ['students', 'schoolProfessionals'],
    format: 'guide',
    source: 'Good Grief',
    url: '#',
  },
  {
    title: 'Supporting Grieving Students',
    description: 'The New York Life Foundation and First Book are working to equip educators with books and resources to support grieving children and their families.',
    audiences: ['schoolProfessionals', 'parents'],
    format: 'toolkit',
    source: 'New York Life Foundation & First Book',
    url: 'https://www.fbmarketplace.org/supporting-grieving-students',
  },
  {
    title: 'New York Life Bereavement Resources',
    description: 'Curated bereavement resources and materials for families, educators, and communities supporting grieving individuals.',
    audiences: ['parents', 'schoolProfessionals'],
    format: 'guide',
    source: 'New York Life',
    url: 'https://bereavement.newyorklifestore.com/',
  },
  {
    title: 'Virtual Learning Library — Trauma & Grief',
    description: 'A virtual learning library with resources on trauma and grief for educators, mental health professionals, and communities.',
    audiences: ['schoolProfessionals'],
    format: 'toolkit',
    source: 'Meadows Mental Health Policy Institute',
    url: 'https://mmhpi.org/work/trauma-grief-center/virtual-learning-library/',
  },
];

const audienceKeys: Audience[] = ['schoolProfessionals', 'parents', 'students'];
const formatKeys: Format[] = ['guide', 'video', 'worksheet', 'presentation', 'article', 'toolkit'];

const audienceBadgeVariants: Record<Audience, 'teal' | 'purple' | 'gold'> = {
  schoolProfessionals: 'teal',
  parents: 'purple',
  students: 'gold',
};

const formatIcons: Record<Format, string> = {
  guide: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  video: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  worksheet: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  presentation: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z',
  article: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2',
  toolkit: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
};

export default function ResourcesPage() {
  const t = useTranslations('resources');
  const tCommon = useTranslations('common');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAudiences, setSelectedAudiences] = useState<Audience[]>([]);
  const [selectedFormat, setSelectedFormat] = useState<Format | ''>('');

  const toggleAudience = (audience: Audience) => {
    setSelectedAudiences((prev) =>
      prev.includes(audience) ? prev.filter((a) => a !== audience) : [...prev, audience]
    );
  };

  const filtered = useMemo(() => {
    return sampleResources.filter((resource) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!resource.title.toLowerCase().includes(q) && !resource.description.toLowerCase().includes(q)) {
          return false;
        }
      }
      if (selectedAudiences.length > 0) {
        if (!selectedAudiences.some((a) => resource.audiences.includes(a))) {
          return false;
        }
      }
      if (selectedFormat && resource.format !== selectedFormat) {
        return false;
      }
      return true;
    });
  }, [searchQuery, selectedAudiences, selectedFormat]);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl font-serif">{t('title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      {/* Audience Sections */}
      <Section background="muted">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Families & Caregivers */}
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold font-serif text-foreground mb-4">For Families & Caregivers</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>How to support children who are grieving</li>
              <li>Accessing grief support for yourself or someone you know</li>
            </ul>
          </div>

          {/* For Students */}
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold font-serif text-foreground mb-4">For Students</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Age-appropriate grief resources</li>
              <li className="font-medium text-foreground">Someone in My Life Died</li>
              <li className="font-medium text-foreground">Grief Sucks</li>
            </ul>
          </div>

          {/* Downloadable Materials */}
          <div className="bg-white rounded-xl p-6 border border-border">
            <h3 className="text-lg font-bold font-serif text-foreground mb-4">Downloadable Materials</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Becoming Grief-Informed guides</li>
              <li>Fact sheets, one-pagers, and toolkits</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="max-w-md mx-auto">
            <input
              type="search"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label={tCommon('search')}
            />
          </div>

          {/* Audience chips */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-2 self-center">{t('filterAudience')}:</span>
            {audienceKeys.map((audience) => (
              <button
                key={audience}
                onClick={() => toggleAudience(audience)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedAudiences.includes(audience)
                    ? 'bg-primary text-white'
                    : 'bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary'
                }`}
              >
                {t(`audiences.${audience}`)}
              </button>
            ))}
          </div>

          {/* Format dropdown */}
          <div className="flex justify-center">
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value as Format | '')}
              className="px-4 py-2 rounded-lg border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={t('filterFormat')}
            >
              <option value="">{t('filterFormat')}: All</option>
              {formatKeys.map((format) => (
                <option key={format} value={format}>{t(`formats.${format}`)}</option>
              ))}
            </select>

            {(selectedAudiences.length > 0 || selectedFormat || searchQuery) && (
              <button
                onClick={() => { setSelectedAudiences([]); setSelectedFormat(''); setSearchQuery(''); }}
                className="ml-3 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {tCommon('clear')}
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">{tCommon('noResults')}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((resource, i) => (
              <Card key={i} className="flex flex-col">
                <CardBody className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={formatIcons[resource.format]} />
                    </svg>
                    <span className="text-xs text-muted-foreground font-medium uppercase">{t(`formats.${resource.format}`)}</span>
                  </div>
                  <h3 className="text-lg font-bold font-serif text-foreground">{resource.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{resource.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {resource.audiences.map((audience) => (
                      <Badge key={audience} variant={audienceBadgeVariants[audience]}>
                        {t(`audiences.${audience}`)}
                      </Badge>
                    ))}
                  </div>
                </CardBody>
                <CardFooter className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{resource.source}</span>
                  <a href={resource.url} className="text-sm font-medium text-primary hover:underline">
                    {tCommon('readMore')} &rarr;
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
