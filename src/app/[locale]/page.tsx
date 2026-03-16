'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useTheme } from '@/components/ThemeProvider';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card, { CardBody } from '@/components/ui/Card';

const coalitionMembers = [
  { name: 'Alcove', description: 'A center for grieving children and families providing peer support groups and community education.', location: 'Northfield, NJ', logo: '/logos/alcove.png' },
  { name: 'Common Ground Grief Center', description: 'A grief center offering support groups and resources for children, teens, and families navigating loss.', location: 'Manasquan, NJ', logo: '/logos/common-ground.jpg' },
  { name: 'Good Grief', description: 'Supporting families after the death of a mother, father, brother, sister, or other significant person in their lives.', location: 'Morristown & Princeton, NJ', logo: '/logos/good-grief.png' },
  { name: 'Imagine, A Center for Coping with Loss', description: 'Providing year-round grief support programs for children, teens, young adults, and their families.', location: 'Newark & Mountainside, NJ', logo: '/logos/imagine.svg' },
  { name: "Stephy's Place", description: 'Supporting children and families through grief with compassionate programs and community resources.', location: 'New Jersey', logo: '/logos/stephys-place.png' },
];

const voicesQuotes = [
  { quote: 'This is one of the best things I\'ve done in my life. I feel less alone and more connected to everyone in the school.', role: 'Student' },
  { quote: 'I really enjoyed everything about the presentation. I am excited to learn and teach the lesson to my students in the future.', role: 'Educator' },
  { quote: 'An incredible refuge for comfort, support, and sense of belonging for my family during the hardest time in our life. Thank you for everything you do!', role: 'Parent' },
];

const griefInformedTraits = [
  'Recognizes that loss impacts learning and creates systems that support students throughout their school experience',
  'Prepares educators with professional development to support students and colleagues',
  'Integrates grief education into the school day thoughtfully',
  'Creates space for questions without requiring disclosure',
  'Provides pathways to additional support when needed',
];

const mandateBullets = [
  'Normalizes grief as a human experience',
  'Provides students with developmentally appropriate coping tools',
  'Expands the conversation to include many forms of loss',
  'Encourages schools to become grief-informed',
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
  return (
    <Image src={member.logo} alt={`${member.name} logo`} width={96} height={96} className="object-contain w-24 h-24" />
  );
}

/* ================================================================
   VERSION 1: WARM & ORGANIC
   Hero with image right. Centered sections. Card grids. Blobs.
   ================================================================ */
function WarmLayout() {
  return (
    <>
      {/* Hero: text left, image right */}
      <section className="relative gradient-warmth py-20 sm:py-28 lg:py-36 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 organic-blob bg-teal-200/20 blur-2xl" aria-hidden="true" />
        <div className="absolute bottom-20 left-0 w-48 h-48 organic-blob-2 bg-purple-200/20 blur-2xl" aria-hidden="true" />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 organic-blob bg-green-200/15 blur-xl" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl font-serif">
                Supporting NJ Schools and Students Through Grief and Loss
              </h1>
              <p className="mt-4 text-xl text-primary font-serif font-semibold">
                New Jersey&apos;s Commitment to Becoming Grief-Informed
              </p>
              <p className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl">
                In January 2024, New Jersey enacted P.L.2023, c.201 — requiring grief and loss education to be included in Health and Physical Education instruction for students in grades 8–12.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/mandate"><Button size="lg">Learn About the Mandate</Button></Link>
                <Link href="/resources"><Button variant="outline" size="lg">Resources for Schools</Button></Link>
                <Link href="/get-involved"><Button variant="outline" size="lg">Get Involved</Button></Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80">
                <Image src="/images/hero-kids.png" alt="Smiling children" width={600} height={400} className="w-full h-auto object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters — centered stat */}
      <Section>
        <SectionHeader title="Why This Matters" subtitle="Grief Is Not Rare" />
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-br from-teal-50 to-purple-50 border border-teal-200/50">
              <p className="text-6xl font-bold font-serif bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">1 in 13</p>
            </div>
            <p className="mt-3 text-lg text-muted-foreground">children in New Jersey will experience the death of a parent or sibling by the time they reach 18 years of age.</p>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed text-center">Many more experience other significant losses such as divorce, incarceration, illness, community violence, displacement, natural disasters or identity-based loss.</p>
          <p className="text-muted-foreground text-lg leading-relaxed text-center font-medium">Grief does not stay at home. It shows up in classrooms, hallways, attendance records, behaviors, and academic performance.</p>
        </div>
      </Section>

      {/* Mandate — centered with bullets */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader title="About the Mandate" subtitle="P.L.2023, c.201 requires grief and loss education within NJ Health and Physical Education standards for grades 8–12." />
          <ul className="text-left space-y-3 max-w-xl mx-auto mb-8">
            {mandateBullets.map((item) => (
              <li key={item} className="flex items-start gap-3"><CheckIcon /><span className="text-muted-foreground">{item}</span></li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mb-8">This mandate does not require personal disclosure, therapy, or teachers to become counselors.</p>
          <Link href="/mandate"><Button variant="outline">Learn More About the Mandate</Button></Link>
        </div>
      </Section>

      {/* Coalition — card grid */}
      <Section>
        <SectionHeader title="The NJ Grief Collaborative" subtitle="We are a coalition of New Jersey's leading family bereavement centers." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coalitionMembers.map((member) => (
            <Card key={member.name}>
              <CardBody className="text-center">
                <div className="w-24 h-24 flex items-center justify-center mb-4 mx-auto"><MemberLogo member={member} /></div>
                <h3 className="text-lg font-bold font-serif text-foreground">{member.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                <p className="mt-3 text-base text-primary font-semibold">{member.location}</p>
              </CardBody>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground text-lg max-w-3xl mx-auto">Our organizations collaborate on training, materials, consultation, and community response to ensure schools feel supported — not overwhelmed.</p>
      </Section>

      {/* Grief-Informed Schools */}
      <Section background="muted">
        <SectionHeader title="What Grief-Informed Schools Look Like" />
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
          <Image src="/images/support-training.png" alt="Grief-informed training" width={800} height={450} className="w-full h-64 sm:h-80 object-cover" />
        </div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-3 mb-8">
            {griefInformedTraits.map((trait) => (
              <li key={trait} className="flex items-start gap-3"><CheckIcon /><span className="text-muted-foreground">{trait}</span></li>
            ))}
          </ul>
          <p className="text-muted-foreground text-lg leading-relaxed italic text-center">When grief is addressed proactively, it can help grieving students become more equipped to concentrate, and in turn, be more prepared for learning.</p>
        </div>
      </Section>

      {/* Voices */}
      <Section>
        <SectionHeader title="Voices / Human Impact" subtitle="Short reflections from students, educators, and caregivers." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {voicesQuotes.map((item, i) => (
            <Card key={i}><CardBody><QuoteIcon /><blockquote className="text-foreground leading-relaxed">&ldquo;{item.quote}&rdquo;</blockquote><p className="mt-4 text-sm text-primary font-medium">&mdash; {item.role}</p></CardBody></Card>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="/testimonials"><Button variant="outline">Read More Testimonials</Button></Link></div>
      </Section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

/* ================================================================
   VERSION 2: CLEAN & MINIMAL
   Full-width centered hero. Horizontal stat bar. List-based
   coalition. Alternating left/right sections. No cards for quotes.
   ================================================================ */
function ModernLayout() {
  return (
    <>
      {/* Hero: centered, massive text, no image */}
      <section className="py-28 sm:py-40 text-center px-[var(--container-padding)]">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-bold mb-6">New Jersey&apos;s Commitment to Becoming Grief-Informed</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-foreground leading-[1.05]">
            Supporting NJ Schools and Students Through Grief and Loss
          </h1>
          <p className="mt-8 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            In January 2024, New Jersey enacted P.L.2023, c.201 — requiring grief and loss education for students in grades 8–12.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/mandate"><Button size="lg">Learn About the Mandate</Button></Link>
            <Link href="/resources"><Button variant="outline" size="lg">Resources for Schools</Button></Link>
            <Link href="/get-involved"><Button variant="outline" size="lg">Get Involved</Button></Link>
          </div>
        </div>
      </section>

      {/* Stat bar — full width horizontal */}
      <div className="border-y" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-7xl mx-auto px-[var(--container-padding)] py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>1 in 13</p>
            <p className="mt-2 text-sm text-muted-foreground">NJ children will lose a parent or sibling before 18</p>
          </div>
          <div>
            <p className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>Grades 8–12</p>
            <p className="mt-2 text-sm text-muted-foreground">Required by P.L.2023, c.201</p>
          </div>
          <div>
            <p className="text-5xl font-bold" style={{ color: 'var(--color-primary)' }}>5 Centers</p>
            <p className="mt-2 text-sm text-muted-foreground">Leading NJ bereavement organizations</p>
          </div>
        </div>
      </div>

      {/* Why it matters — text left, image right */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-bold mb-4">Why This Matters</p>
            <h2 className="text-4xl font-bold text-foreground">Grief does not stay at home</h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">It shows up in classrooms, hallways, attendance records, behaviors, and academic performance. When we equip students with knowledge, proper language, coping tools, and trusted adults, we strengthen not only individual resilience — but entire school communities.</p>
            <Link href="/mandate"><p className="mt-6 font-semibold" style={{ color: 'var(--color-primary)' }}>Learn about the mandate &rarr;</p></Link>
          </div>
          <div className="overflow-hidden">
            <Image src="/images/hero-kids.png" alt="Children in school" width={600} height={400} className="w-full h-auto object-cover" />
          </div>
        </div>
      </Section>

      {/* Mandate — clean list */}
      <Section background="muted">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-bold mb-4">The Mandate</p>
          <h2 className="text-4xl font-bold text-foreground">What P.L.2023, c.201 requires</h2>
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

      {/* Coalition — horizontal list with logos large */}
      <Section>
        <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-bold mb-4">Who We Are</p>
        <h2 className="text-4xl font-bold text-foreground mb-12">The NJ Grief Collaborative</h2>
        <div className="space-y-8">
          {coalitionMembers.map((member, i) => (
            <div key={member.name} className="flex flex-col sm:flex-row items-start gap-6 pb-8" style={{ borderBottom: i < coalitionMembers.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
              <div className="w-20 h-20 shrink-0 flex items-center justify-center">
                <MemberLogo member={member} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                <p className="text-muted-foreground mt-1">{member.description}</p>
                <p className="text-sm font-semibold mt-2" style={{ color: 'var(--color-primary)' }}>{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Grief-Informed — image left, text right */}
      <Section background="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="overflow-hidden">
            <Image src="/images/support-training.png" alt="Training session" width={600} height={400} className="w-full h-auto object-cover" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-bold mb-4">Grief-Informed Schools</p>
            <h2 className="text-4xl font-bold text-foreground mb-8">What it looks like</h2>
            <ul className="space-y-4">
              {griefInformedTraits.map((trait) => (
                <li key={trait} className="flex items-start gap-3"><CheckIcon /><span className="text-muted-foreground">{trait}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Voices — large single-column quotes */}
      <Section>
        <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground font-bold mb-4">Voices</p>
        <h2 className="text-4xl font-bold text-foreground mb-12">What people are saying</h2>
        <div className="space-y-12 max-w-3xl">
          {voicesQuotes.map((item, i) => (
            <div key={i} className="pb-12" style={{ borderBottom: i < voicesQuotes.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
              <blockquote className="text-2xl text-foreground leading-relaxed font-serif italic">&ldquo;{item.quote}&rdquo;</blockquote>
              <p className="mt-4 text-sm font-bold uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>&mdash; {item.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-8"><Link href="/testimonials"><Button variant="outline">Read More Testimonials</Button></Link></div>
      </Section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

/* ================================================================
   VERSION 3: DARK & VIBRANT
   Full-bleed hero with image behind text. Testimonials first
   after hero. Two-column mandate. Horizontal scroll coalition.
   Big asymmetric layouts.
   ================================================================ */
function BoldLayout() {
  return (
    <>
      {/* Hero: full-bleed with image as background */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/hero-kids.png" alt="Children" width={1200} height={800} className="w-full h-full object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/90 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-[var(--container-padding)] py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-400 font-bold mb-6">P.L.2023, c.201</p>
            <h1 className="text-5xl sm:text-7xl font-bold font-serif leading-[1.05]">
              <span className="block" style={{ color: '#eeeef5' }}>Supporting NJ</span>
              <span className="block bg-gradient-to-r from-[#a78bfa] via-[#f472b6] to-[#34d399] bg-clip-text text-transparent">Schools & Students</span>
              <span className="block" style={{ color: '#eeeef5' }}>Through Grief</span>
            </h1>
            <p className="mt-8 text-xl" style={{ color: '#9898b0' }}>
              New Jersey enacted a mandate requiring grief and loss education for grades 8–12. We&apos;re here to help implement it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/mandate"><Button size="lg">Learn About the Mandate</Button></Link>
              <Link href="/resources"><Button variant="outline" size="lg">Resources for Schools</Button></Link>
              <Link href="/get-involved"><Button variant="outline" size="lg">Get Involved</Button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Voices — featured prominently right after hero */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {voicesQuotes.map((item, i) => (
            <Card key={i}>
              <CardBody>
                <div className="text-3xl mb-4" style={{ color: ['#a78bfa', '#f472b6', '#34d399'][i] }}>&ldquo;</div>
                <blockquote className="text-lg leading-relaxed" style={{ color: '#eeeef5' }}>{item.quote}</blockquote>
                <p className="mt-6 text-sm font-bold" style={{ color: ['#a78bfa', '#f472b6', '#34d399'][i] }}>{item.role}</p>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center"><Link href="/testimonials"><Button variant="outline">All Testimonials</Button></Link></div>
      </Section>

      {/* Stat — giant centered number */}
      <section className="py-24 text-center">
        <p className="text-[8rem] sm:text-[12rem] font-bold font-serif leading-none bg-gradient-to-r from-[#a78bfa] via-[#f472b6] to-[#34d399] bg-clip-text text-transparent">
          1 in 13
        </p>
        <p className="text-xl mt-4" style={{ color: '#9898b0' }}>NJ children will lose a parent or sibling before age 18</p>
        <p className="text-lg mt-2" style={{ color: '#6b6b85' }}>Many more experience divorce, incarceration, illness, violence, and displacement.</p>
      </section>

      {/* Mandate — two columns */}
      <Section background="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader title="The Mandate" centered={false} />
            <p className="text-lg" style={{ color: '#9898b0' }}>
              P.L.2023, c.201 requires grief and loss education within NJ Health and Physical Education standards for grades 8–12. This mandate does not require personal disclosure, therapy, or teachers to become counselors.
            </p>
            <div className="mt-8">
              <Link href="/mandate"><Button>Learn More</Button></Link>
            </div>
          </div>
          <div className="space-y-4">
            {mandateBullets.map((item, i) => (
              <div key={item} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: '#1a1a2e', border: '1px solid #252545', borderLeftWidth: '4px', borderLeftColor: ['#a78bfa', '#f472b6', '#34d399', '#a78bfa'][i] }}>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Coalition — large horizontal cards */}
      <Section>
        <SectionHeader title="The NJ Grief Collaborative" subtitle="Five leading family bereavement centers, one mission." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coalitionMembers.map((member, i) => (
            <div key={member.name} className="flex items-center gap-6 p-6 rounded-xl" style={{ background: '#13132a', border: '1px solid #252545', borderLeftWidth: '4px', borderLeftColor: ['#a78bfa', '#f472b6', '#34d399', '#a78bfa', '#f472b6'][i] }}>
              <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-lg" style={{ background: '#1e1b2e' }}>
                <Image src={member.logo} alt={member.name} width={48} height={48} className="object-contain w-12 h-12" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-serif" style={{ color: '#eeeef5' }}>{member.name}</h3>
                <p className="text-sm" style={{ color: '#9898b0' }}>{member.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Grief-Informed — image + text overlay style */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/support-training.png" alt="Training" width={1200} height={600} className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="relative mx-auto max-w-7xl px-[var(--container-padding)]">
          <SectionHeader title="Grief-Informed Schools" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {griefInformedTraits.map((trait, i) => (
              <div key={trait} className="p-4 rounded-xl" style={{ background: 'rgba(19,19,42,0.9)', border: '1px solid #252545', borderTopWidth: '3px', borderTopColor: ['#a78bfa', '#f472b6', '#34d399', '#a78bfa', '#f472b6'][i] }}>
                <p className="text-sm" style={{ color: '#c0c0d0' }}>{trait}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center italic text-lg" style={{ color: '#6b6b85' }}>When grief is addressed proactively, it can help grieving students become more equipped to concentrate, and in turn, be more prepared for learning.</p>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}

/* ================================================================
   SHARED CTA SECTION
   ================================================================ */
function CTASection() {
  return (
    <section className="bg-gradient-to-br from-teal-600 via-purple-600 to-teal-700 py-20 relative overflow-hidden">
      <div className="absolute top-0 left-10 w-40 h-40 organic-blob bg-green-400/10 blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-10 w-56 h-56 organic-blob-2 bg-warm-400/10 blur-2xl" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-[var(--container-padding)] relative">
        <h2 className="text-3xl font-bold text-white sm:text-4xl font-serif text-center">Ready to Take the Next Step?</h2>
        <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto text-center">Whether you are a school leader, educator, policymaker, or caregiver, we are here to help.</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white font-serif">For Schools & Educators</h3>
            <p className="mt-3 text-teal-100 text-sm">Professional development, curriculum partners, and implementation guidance.</p>
            <div className="mt-6"><Link href="/resources"><Button variant="accent">Explore Resources</Button></Link></div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white font-serif">For Families</h3>
            <p className="mt-3 text-teal-100 text-sm">Resources to support children and teens who are grieving.</p>
            <div className="mt-6"><Link href="/contact"><Button variant="accent">Request Support</Button></Link></div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white font-serif">For Legislators & Leaders</h3>
            <p className="mt-3 text-teal-100 text-sm">Evidence-based insight into why grief education strengthens schools.</p>
            <div className="mt-6"><Link href="/get-involved"><Button variant="accent">Join the Collaborative</Button></Link></div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   MAIN PAGE — renders the right layout based on theme
   ================================================================ */
export default function Home() {
  const { theme } = useTheme();

  if (theme === 'modern') return <ModernLayout />;
  if (theme === 'bold') return <BoldLayout />;
  return <WarmLayout />;
}
