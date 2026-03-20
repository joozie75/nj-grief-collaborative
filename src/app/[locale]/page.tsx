'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTheme } from '@/components/ThemeProvider';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card, { CardBody } from '@/components/ui/Card';

const coalitionMembers = [
  { name: 'Alcove', descKey: 'alcoveDesc' as const, location: 'Northfield, NJ', logo: '/logos/alcove.png' },
  { name: 'Common Ground Grief Center', descKey: 'commonGroundDesc' as const, location: 'Manasquan, NJ', logo: '/logos/common-ground.jpg' },
  { name: 'Good Grief', descKey: 'goodGriefDesc' as const, location: 'Morristown & Princeton, NJ', logo: '/logos/good-grief.png' },
  { name: 'Imagine, A Center for Coping with Loss', descKey: 'imagineDesc' as const, location: 'Newark & Mountainside, NJ', logo: '/logos/imagine.svg' },
  { name: "Stephy's Place", descKey: 'stephysDesc' as const, location: 'New Jersey', logo: '/logos/stephys-place.png' },
];

function CheckIcon({ className = 'w-5 h-5 text-primary shrink-0 mt-1' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
    </svg>
  );
}

function MemberLogo({ member }: { member: typeof coalitionMembers[0] }) {
  return <Image src={member.logo} alt={`${member.name} logo`} width={96} height={96} className="object-contain w-24 h-24" />;
}

/* ================================================================
   VERSION 1: WARM & ORGANIC
   ================================================================ */
function WarmLayout({ t }: { t: ReturnType<typeof useTranslations<'page.home'>> }) {
  const voicesQuotes = [
    { quote: t('voice1'), role: t('student') },
    { quote: t('voice2'), role: t('educator') },
    { quote: t('voice3'), role: t('parent') },
  ];
  const mandateBullets = [t('mandateBullet1'), t('mandateBullet2'), t('mandateBullet3'), t('mandateBullet4')];
  const traits = [t('schoolsTrait1'), t('schoolsTrait2'), t('schoolsTrait3'), t('schoolsTrait4')];

  return (
    <>
      <section className="relative gradient-warmth py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 organic-blob bg-teal-200/20 blur-2xl" aria-hidden="true" />
        <div className="absolute bottom-20 left-0 w-48 h-48 organic-blob-2 bg-purple-200/20 blur-2xl" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl font-serif">{t('heroTitle')}</h1>
              <p className="mt-4 text-xl text-primary font-serif font-semibold">{t('heroSubtitle')}</p>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl">{t('heroDescription')}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/mandate"><Button size="lg">{t('learnAboutMandate')}</Button></Link>
                <Link href="/resources"><Button variant="outline" size="lg">{t('resourcesForSchools')}</Button></Link>
                <Link href="/get-involved"><Button variant="outline" size="lg">{t('getInvolved')}</Button></Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80">
                <Image src="/images/hero-kids.png" alt="" width={600} height={400} className="w-full h-auto object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeader title={t('whyTitle')} subtitle={t('whySubtitle')} />
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-br from-teal-50 to-purple-50 border border-teal-200/50">
              <p className="text-6xl font-bold font-serif bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">{t('stat')}</p>
            </div>
            <p className="mt-3 text-lg text-muted-foreground">{t('statDescription')}</p>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed text-center">{t('statMore')}</p>
          <p className="text-muted-foreground text-lg leading-relaxed text-center font-medium">{t('griefStays')}</p>
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader title={t('mandateTitle')} subtitle={t('mandateSubtitle')} />
          <ul className="text-left space-y-3 max-w-xl mx-auto mb-8">
            {mandateBullets.map((item) => (<li key={item} className="flex items-start gap-3"><CheckIcon /><span className="text-muted-foreground">{item}</span></li>))}
          </ul>
          <p className="text-sm text-muted-foreground mb-8">{t('mandateDisclaimer')}</p>
          <Link href="/mandate"><Button variant="outline">{t('learnMoreMandate')}</Button></Link>
        </div>
      </Section>

      <Section>
        <SectionHeader title={t('coalitionTitle')} subtitle={t('coalitionSubtitle')} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coalitionMembers.map((m) => (
            <Card key={m.name}><CardBody className="text-center">
              <div className="w-24 h-24 flex items-center justify-center mb-4 mx-auto"><MemberLogo member={m} /></div>
              <h3 className="text-lg font-bold font-serif text-foreground">{m.name}</h3>
              <p className="mt-3 text-base text-primary font-semibold">{m.location}</p>
            </CardBody></Card>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground text-lg max-w-3xl mx-auto">{t('coalitionCollaboration')}</p>
      </Section>

      <Section background="muted">
        <SectionHeader title={t('schoolsTitle')} />
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
          <Image src="/images/support-training.png" alt="" width={800} height={450} className="w-full h-64 sm:h-80 object-cover" />
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3 mb-8">
            {traits.map((tr) => (<li key={tr} className="flex items-start gap-3"><CheckIcon /><span className="text-muted-foreground">{tr}</span></li>))}
          </ul>
          <p className="text-muted-foreground text-lg leading-relaxed italic text-center">{t('schoolsQuote')}</p>
        </div>
      </Section>

      <Section>
        <SectionHeader title={t('voicesTitle')} subtitle={t('voicesSubtitle')} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {voicesQuotes.map((item, i) => (
            <Card key={i}><CardBody><QuoteIcon /><blockquote className="text-foreground leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote><p className="mt-4 text-sm text-primary font-medium">&mdash; {item.role}</p></CardBody></Card>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="/testimonials"><Button variant="outline">{t('readMoreTestimonials')}</Button></Link></div>
      </Section>

      <CTASection t={t} />
    </>
  );
}

/* ================================================================
   VERSION 2: CLEAN & MINIMAL
   ================================================================ */
function ModernLayout({ t }: { t: ReturnType<typeof useTranslations<'page.home'>> }) {
  const voicesQuotes = [
    { quote: t('voice1'), role: t('student') },
    { quote: t('voice2'), role: t('educator') },
    { quote: t('voice3'), role: t('parent') },
  ];
  const mandateBullets = [t('mandateBullet1'), t('mandateBullet2'), t('mandateBullet3'), t('mandateBullet4')];
  const traits = [t('schoolsTrait1'), t('schoolsTrait2'), t('schoolsTrait3'), t('schoolsTrait4')];

  return (
    <>
      <section className="py-28 sm:py-40 text-center px-[var(--container-padding)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold mb-6">{t('heroSubtitle')}</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-foreground leading-[1.05]">{t('heroTitle')}</h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t('heroDescription')}</p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mandate"><Button size="lg">{t('learnAboutMandate')}</Button></Link>
            <Link href="/resources"><Button variant="outline" size="lg">{t('resourcesForSchools')}</Button></Link>
            <Link href="/get-involved"><Button variant="outline" size="lg">{t('getInvolved')}</Button></Link>
          </div>
        </div>
      </section>

      <div className="border-y" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-[var(--container-padding)] py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>{t('stat')}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t('statDescription')}</p>
          </div>
          <div>
            <p className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>{t('grades812')}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t('grades812desc')}</p>
          </div>
          <div>
            <p className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>{t('fiveCentersNum')}</p>
            <p className="mt-2 text-sm text-muted-foreground">{t('fiveCentersDesc')}</p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-bold mb-4">{t('whyTitle')}</p>
            <h2 className="text-4xl font-bold text-foreground">{t('griefNotStaysHome')}</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">{t('griefStays')} {t('statMore')}</p>
            <Link href="/mandate"><p className="mt-6 font-semibold" style={{ color: 'var(--color-primary)' }}>{t('learnAboutMandateLink')} &rarr;</p></Link>
          </div>
          <div className="overflow-hidden"><Image src="/images/hero-kids.png" alt="" width={600} height={400} className="w-full h-auto object-cover" /></div>
        </div>
      </Section>

      <Section background="muted">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-bold mb-4">{t('mandateTitle')}</p>
          <h2 className="text-4xl font-bold text-foreground">{t('whatMandateRequires')}</h2>
          <div className="mt-8 space-y-4">
            {mandateBullets.map((item, i) => (
              <div key={item} className="flex items-start gap-4 pb-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
                <span className="text-2xl font-bold" style={{ color: 'var(--color-primary)' }}>0{i + 1}</span>
                <p className="text-lg text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-bold mb-4">{t('whoWeAre')}</p>
        <h2 className="text-4xl font-bold text-foreground mb-12">{t('coalitionTitle')}</h2>
        <div className="space-y-8">
          {coalitionMembers.map((m, i) => (
            <div key={m.name} className="flex flex-col sm:flex-row items-start gap-6 pb-8" style={{ borderBottom: i < coalitionMembers.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
              <div className="w-20 h-20 shrink-0 flex items-center justify-center"><MemberLogo member={m} /></div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{m.name}</h3>
                <p className="text-sm font-semibold mt-2" style={{ color: 'var(--color-primary)' }}>{m.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section background="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="overflow-hidden"><Image src="/images/support-training.png" alt="" width={600} height={400} className="w-full h-auto object-cover" /></div>
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-bold mb-4">{t('schoolsTitle')}</p>
            <h2 className="text-4xl font-bold text-foreground mb-8">{t('whatItLooksLike')}</h2>
            <ul className="space-y-4">
              {traits.map((tr) => (<li key={tr} className="flex items-start gap-3"><CheckIcon /><span className="text-muted-foreground">{tr}</span></li>))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-bold mb-4">{t('voicesTitle')}</p>
        <h2 className="text-4xl font-bold text-foreground mb-12">{t('whatPeopleSaying')}</h2>
        <div className="space-y-12 max-w-3xl">
          {voicesQuotes.map((item, i) => (
            <div key={i} className="pb-12" style={{ borderBottom: i < voicesQuotes.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
              <blockquote className="text-2xl text-foreground leading-relaxed font-serif italic">&ldquo;{item.quote}&rdquo;</blockquote>
              <p className="mt-4 text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>&mdash; {item.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-8"><Link href="/testimonials"><Button variant="outline">{t('readMoreTestimonials')}</Button></Link></div>
      </Section>

      <CTASection t={t} />
    </>
  );
}

/* ================================================================
   VERSION 3: BOLD & VIBRANT (light readable version)
   ================================================================ */
function BoldLayout({ t }: { t: ReturnType<typeof useTranslations<'page.home'>> }) {
  const voicesQuotes = [
    { quote: t('voice1'), role: t('student') },
    { quote: t('voice2'), role: t('educator') },
    { quote: t('voice3'), role: t('parent') },
  ];
  const mandateBullets = [t('mandateBullet1'), t('mandateBullet2'), t('mandateBullet3'), t('mandateBullet4')];
  const traits = [t('schoolsTrait1'), t('schoolsTrait2'), t('schoolsTrait3'), t('schoolsTrait4')];

  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-kids.png" alt="" width={1200} height={800} className="w-full h-full object-cover opacity-15" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-[var(--container-padding)] py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-500 font-bold mb-6">{t('pl2023')}</p>
            <h1 className="text-5xl sm:text-7xl font-bold font-serif leading-[1.05]">
              <span className="block text-foreground">{t('heroTitle').split(' ').slice(0, 2).join(' ')}</span>
              <span className="block bg-gradient-to-r from-[#7c5cbf] via-[#d94f8a] to-[#2aa87a] bg-clip-text text-transparent">{t('heroTitle').split(' ').slice(2, 5).join(' ')}</span>
              <span className="block text-foreground">{t('heroTitle').split(' ').slice(5).join(' ')}</span>
            </h1>
            <p className="mt-8 text-xl text-muted-foreground">{t('heroDescription')}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/mandate"><Button size="lg">{t('learnAboutMandate')}</Button></Link>
              <Link href="/resources"><Button variant="outline" size="lg">{t('resourcesForSchools')}</Button></Link>
              <Link href="/get-involved"><Button variant="outline" size="lg">{t('getInvolved')}</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {voicesQuotes.map((item, i) => (
            <Card key={i}><CardBody>
              <div className="text-3xl mb-4" style={{ color: ['#7c5cbf', '#d94f8a', '#2aa87a'][i] }}>&ldquo;</div>
              <blockquote className="text-lg text-foreground leading-relaxed">{item.quote}</blockquote>
              <p className="mt-6 text-sm font-bold" style={{ color: ['#7c5cbf', '#d94f8a', '#2aa87a'][i] }}>{item.role}</p>
            </CardBody></Card>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="/testimonials"><Button variant="outline">{t('allTestimonials')}</Button></Link></div>
      </Section>

      <section className="py-24 text-center" style={{ background: 'var(--color-muted)' }}>
        <p className="text-[8rem] sm:text-[12rem] font-bold font-serif leading-none bg-gradient-to-r from-[#7c5cbf] via-[#d94f8a] to-[#2aa87a] bg-clip-text text-transparent">{t('stat')}</p>
        <p className="text-xl mt-4 text-foreground">{t('statDescription')}</p>
        <p className="text-lg mt-2 text-muted-foreground">{t('statMore')}</p>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader title={t('mandateTitle')} centered={false} />
            <p className="text-lg text-muted-foreground">{t('mandateSubtitle')} {t('mandateDisclaimer')}</p>
            <div className="mt-8"><Link href="/mandate"><Button>{t('learnMore')}</Button></Link></div>
          </div>
          <div className="space-y-4">
            {mandateBullets.map((item, i) => (
              <div key={item} className="flex items-start gap-4 p-4 rounded-xl bg-white" style={{ border: '1px solid #ddd6ee', borderLeftWidth: '4px', borderLeftColor: ['#7c5cbf', '#d94f8a', '#2aa87a', '#7c5cbf'][i] }}>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="muted">
        <SectionHeader title={t('coalitionTitle')} subtitle={t('fiveCenters')} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coalitionMembers.map((m, i) => (
            <div key={m.name} className="flex items-center gap-6 p-6 rounded-xl bg-white" style={{ border: '1px solid #ddd6ee', borderLeftWidth: '4px', borderLeftColor: ['#7c5cbf', '#d94f8a', '#2aa87a', '#7c5cbf', '#d94f8a'][i] }}>
              <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-lg" style={{ background: '#f3eff8' }}>
                <Image src={m.logo} alt={m.name} width={48} height={48} className="object-contain w-12 h-12" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif text-foreground">{m.name}</h3>
                <p className="text-sm text-muted-foreground">{m.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <section className="relative py-24 overflow-hidden" style={{ background: 'var(--color-background)' }}>
        <div className="absolute inset-0"><Image src="/images/support-training.png" alt="" width={1200} height={600} className="w-full h-full object-cover opacity-5" /></div>
        <div className="relative mx-auto max-w-7xl px-[var(--container-padding)]">
          <SectionHeader title={t('schoolsTitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {traits.map((tr, i) => (
              <div key={tr} className="p-4 rounded-xl bg-white" style={{ border: '1px solid #ddd6ee', borderTopWidth: '3px', borderTopColor: ['#7c5cbf', '#d94f8a', '#2aa87a', '#7c5cbf', '#d94f8a'][i] }}>
                <p className="text-sm text-foreground">{tr}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center italic text-lg text-muted-foreground">{t('schoolsQuote')}</p>
        </div>
      </section>

      <CTASection t={t} />
    </>
  );
}

/* ================================================================
   SHARED CTA SECTION
   ================================================================ */
function CTASection({ t }: { t: ReturnType<typeof useTranslations<'page.home'>> }) {
  return (
    <section className="bg-gradient-to-br from-teal-600 via-purple-600 to-teal-700 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-10 w-40 h-40 organic-blob bg-green-400/10 blur-2xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-[var(--container-padding)] relative">
        <h2 className="text-3xl font-bold text-white sm:text-4xl font-serif text-center">{t('ctaTitle')}</h2>
        <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto text-center">{t('ctaSubtitle')}</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white font-serif">{t('ctaSchools')}</h3>
            <p className="mt-3 text-teal-100 text-sm">{t('ctaSchoolsDesc')}</p>
            <div className="mt-6"><Link href="/resources"><Button variant="accent">{t('exploreResources')}</Button></Link></div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white font-serif">{t('ctaFamilies')}</h3>
            <p className="mt-3 text-teal-100 text-sm">{t('ctaFamiliesDesc')}</p>
            <div className="mt-6"><Link href="/contact"><Button variant="accent">{t('requestSupport')}</Button></Link></div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white font-serif">{t('ctaLegislators')}</h3>
            <p className="mt-3 text-teal-100 text-sm">{t('ctaLegislatorsDesc')}</p>
            <div className="mt-6"><Link href="/get-involved"><Button variant="accent">{t('joinCollaborative')}</Button></Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */
export default function Home() {
  const { theme } = useTheme();
  const t = useTranslations('page.home');

  if (theme === 'modern') return <ModernLayout t={t} />;
  if (theme === 'bold') return <BoldLayout t={t} />;
  return <WarmLayout t={t} />;
}
