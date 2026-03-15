import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Section, { SectionHeader } from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import Card, { CardBody } from '@/components/ui/Card';

const coalitionMembers = [
  {
    name: 'Alcove',
    description: 'A center for grieving children and families providing peer support groups and community education.',
    location: 'Northfield, NJ',
    logo: '/logos/alcove.png',
  },
  {
    name: 'Common Ground Grief Center',
    description: 'A grief center offering support groups and resources for children, teens, and families navigating loss.',
    location: 'Manasquan, NJ',
    logo: '/logos/common-ground.jpg',
  },
  {
    name: 'Good Grief',
    description: 'Supporting families after the death of a mother, father, brother, sister, or other significant person in their lives.',
    location: 'Morristown & Princeton, NJ',
    logo: '/logos/good-grief.png',
  },
  {
    name: 'Imagine, A Center for Coping with Loss',
    description: 'Providing year-round grief support programs for children, teens, young adults, and their families.',
    location: 'Newark & Mountainside, NJ',
    logo: '/logos/imagine.svg',
  },
  {
    name: "Stephy's Place",
    description: 'Supporting children and families through grief with compassionate programs and community resources.',
    location: 'New Jersey',
    logo: '/logos/stephys-place.png',
  },
];

const voicesQuotes = [
  {
    quote: 'This is one of the best things I\'ve done in my life. I feel less alone and more connected to everyone in the school.',
    role: 'Student',
  },
  {
    quote: 'I really enjoyed everything about the presentation. I am excited to learn and teach the lesson to my students in the future.',
    role: 'Educator',
  },
  {
    quote: 'An incredible refuge for comfort, support, and sense of belonging for my family during the hardest time in our life. Thank you for everything you do!',
    role: 'Parent',
  },
];

const griefInformedTraits = [
  'Recognizes that loss impacts learning and creates systems that support students throughout their school experience',
  'Prepares educators with professional development to support students and colleagues',
  'Integrates grief education into the school day thoughtfully',
  'Creates space for questions without requiring disclosure',
  'Provides pathways to additional support when needed',
];

export default function Home() {
  const t = useTranslations('home');

  return (
    <>
      {/* Hero */}
      <section className="relative gradient-warmth py-20 sm:py-28 lg:py-36 overflow-hidden">
        {/* Decorative blobs */}
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
                In January 2024, New Jersey enacted P.L.2023, c.201 — requiring grief and loss education to be included in Health and Physical Education instruction for students in grades 8–12. The NJ Grief Collaborative is here to help schools, educators, families, and communities implement this mandate with confidence, compassion, and clarity.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link href="/mandate">
                  <Button size="lg">Learn About the Mandate</Button>
                </Link>
                <Link href="/resources">
                  <Button variant="outline" size="lg">Resources for Schools</Button>
                </Link>
                <Link href="/get-involved">
                  <Button variant="outline" size="lg">Get Involved</Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80">
                <Image
                  src="/images/hero-kids.png"
                  alt="Smiling children supported by grief education programs"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 organic-blob bg-purple-300/30 blur-lg" aria-hidden="true" />
              <div className="absolute -top-4 -right-4 w-20 h-20 organic-blob-2 bg-green-300/30 blur-lg" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <Section>
        <SectionHeader title="Why This Matters" subtitle="Grief Is Not Rare" />
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center">
            <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-br from-teal-50 to-purple-50 border border-teal-200/50">
              <p className="text-6xl font-bold font-serif bg-gradient-to-r from-teal-500 to-purple-500 bg-clip-text text-transparent">1 in 13</p>
            </div>
            <p className="mt-3 text-lg text-muted-foreground">
              children in New Jersey will experience the death of a parent or sibling by the time they reach 18 years of age.
            </p>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed text-center">
            Many more experience other significant losses such as divorce, incarceration, illness, community violence, displacement, natural disasters or identity-based loss.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed text-center font-medium">
            Grief does not stay at home. It shows up in classrooms, hallways, attendance records, behaviors, and academic performance.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed text-center">
            When we equip students with knowledge, proper language, coping tools, and trusted adults, we strengthen not only individual resilience — but entire school communities.
          </p>
        </div>
      </Section>

      {/* About the Mandate */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            title="About the Mandate"
            subtitle="P.L.2023, c.201 requires that grief and loss education be included within New Jersey's Health and Physical Education standards for grades 8–12."
          />
          <ul className="text-left space-y-3 max-w-xl mx-auto mb-8">
            {[
              'Normalizes grief as a human experience',
              'Provides students with developmentally appropriate coping tools',
              'Expands the conversation to include many forms of loss',
              'Encourages schools to become grief-informed',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground mb-8">
            This mandate does not require personal disclosure, therapy, or teachers to become counselors. It ensures students receive education that prepares them for real life.
          </p>
          <Link href="/mandate">
            <Button variant="outline">Learn More About the Mandate</Button>
          </Link>
        </div>
      </Section>

      {/* Who We Are — Coalition Members */}
      <Section>
        <SectionHeader
          title="The NJ Grief Collaborative"
          subtitle="We are a coalition of New Jersey's leading family bereavement centers. Together, we support schools and communities in implementing grief education in ways that are developmentally appropriate, trauma-informed, and grounded in best practice."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coalitionMembers.map((member) => (
            <Card key={member.name}>
              <CardBody className="text-center">
                <div className="w-24 h-24 flex items-center justify-center mb-4 mx-auto">
                  {member.logo ? (
                    <Image
                      src={member.logo}
                      alt={`${member.name} logo`}
                      width={96}
                      height={96}
                      className="object-contain w-24 h-24"
                    />
                  ) : (
                    <div className="w-20 h-20 rounded-full bg-primary-light flex items-center justify-center">
                      <span className="text-primary font-bold text-2xl font-serif">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold font-serif text-foreground">{member.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                <p className="mt-3 text-base text-primary font-semibold">{member.location}</p>
              </CardBody>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-muted-foreground text-lg max-w-3xl mx-auto">
          Our organizations collaborate on training, materials, consultation, and community response to ensure schools feel supported — not overwhelmed.
        </p>
      </Section>

      {/* What Grief-Informed Schools Look Like */}
      <Section background="muted">
        <SectionHeader title="What Grief-Informed Schools Look Like" />
        <div className="mb-10 rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto">
          <Image
            src="/images/support-training.png"
            alt="Grief-informed training and support for families"
            width={800}
            height={450}
            className="w-full h-64 sm:h-80 object-cover"
          />
        </div>
        <div className="max-w-3xl mx-auto">
          <p className="text-muted-foreground mb-6 text-center">A grief-informed school:</p>
          <ul className="space-y-3 mb-8">
            {griefInformedTraits.map((trait) => (
              <li key={trait} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-muted-foreground">{trait}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground text-lg leading-relaxed italic text-center">
            When grief is addressed proactively, it can help grieving students become more equipped to concentrate, and in turn, be more prepared for learning.
          </p>
          <div className="mt-8 text-center">
            <Link href="/grief-informed-schools">
              <Button variant="outline">Learn More</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Voices / Human Impact */}
      <Section>
        <SectionHeader title="Voices / Human Impact" subtitle="Short reflections from students, educators, and caregivers." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {voicesQuotes.map((item, i) => (
            <Card key={i}>
              <CardBody>
                <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <blockquote className="text-foreground leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <p className="mt-4 text-sm text-primary font-medium">&mdash; {item.role}</p>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/testimonials">
            <Button variant="outline">Read More Testimonials</Button>
          </Link>
        </div>
      </Section>

      {/* Ready to Take the Next Step — 3 audience CTA */}
      <section className="bg-gradient-to-br from-teal-600 via-purple-600 to-teal-700 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-10 w-40 h-40 organic-blob bg-green-400/10 blur-2xl" aria-hidden="true" />
        <div className="absolute bottom-0 right-10 w-56 h-56 organic-blob-2 bg-warm-400/10 blur-2xl" aria-hidden="true" />
        <div className="mx-auto max-w-7xl px-[var(--container-padding)]">
          <h2 className="text-3xl font-bold text-white sm:text-4xl font-serif text-center">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto text-center">
            Whether you are a school leader, educator, policymaker, or caregiver, we are here to help.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Schools & Educators */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white font-serif">For Schools & Educators</h3>
              <p className="mt-3 text-teal-100 text-sm">
                Professional development, curriculum partners, and implementation guidance.
              </p>
              <div className="mt-6">
                <Link href="/resources">
                  <Button variant="accent">Explore Resources</Button>
                </Link>
              </div>
            </div>

            {/* For Families */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white font-serif">For Families</h3>
              <p className="mt-3 text-teal-100 text-sm">
                Resources to support children and teens who are grieving.
              </p>
              <div className="mt-6">
                <Link href="/contact">
                  <Button variant="accent">Request Support</Button>
                </Link>
              </div>
            </div>

            {/* For Legislators & Community Leaders */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white font-serif">For Legislators & Community Leaders</h3>
              <p className="mt-3 text-teal-100 text-sm">
                Evidence-based insight into why grief education strengthens schools.
              </p>
              <div className="mt-6">
                <Link href="/get-involved">
                  <Button variant="accent">Join the Collaborative</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
