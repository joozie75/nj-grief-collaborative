import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const griefInformedTraits = [
  'Recognizes that loss impacts learning and creates systems that support students throughout their school experience',
  'Prepares educators with professional development to support students and colleagues',
  'Integrates grief education into the school day thoughtfully',
  'Creates space for questions without requiring disclosure',
  'Provides pathways to additional support when needed',
];

const gradeBands = [
  {
    label: 'Elementary (K–5)',
    description: 'Age-appropriate lessons about feelings, loss, and healthy coping. Focus on normalizing grief as part of life.',
    color: 'bg-teal-100 text-teal-800',
  },
  {
    label: 'Middle School (6–8)',
    description: 'Deeper exploration of grief, identity, and peer support. Building emotional literacy and resilience.',
    color: 'bg-purple-100 text-purple-800',
  },
  {
    label: 'High School (9–12)',
    description: 'Advanced discussions about grief, mortality, and supporting others. Leadership opportunities in peer support. This is the MVP focus of P.L.2023, c.201.',
    color: 'bg-gold-100 text-gold-800',
  },
];

const sections = [
  { title: 'The Reality of Childhood Grief', description: 'Research and statistics (CBEM and national data) alongside expert perspectives on grief-informed education.' },
  { title: 'Grief in the Classroom', description: 'Connections to Health & PE, social-emotional learning, anniversaries, and holidays.' },
  { title: 'What Happens When Grief Is Unaddressed', description: 'Without support, grieving students may struggle with attendance, academic performance, behavior, and social connections.' },
  { title: 'Equity & Access', description: 'Why school-based grief education is essential for all students — ensuring every child has access regardless of background.' },
  { title: 'Role of Educators & Staff', description: 'Educators do not need to be counselors. They need awareness, language, and a plan for how to respond and connect students to support.' },
  { title: 'Best Practices', description: 'Trauma-informed, developmentally appropriate approaches grounded in current research from the childhood bereavement field.' },
];

export default function GriefInformedSchoolsPage() {
  const t = useTranslations('griefInformedSchools');

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl font-serif">
            What Grief-Informed Support and Education Can Look Like in Schools
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Building understanding, urgency, and confidence — making the mandate feel achievable, not overwhelming.
          </p>
        </div>
      </section>

      {/* What a Grief-Informed School Looks Like */}
      <Section narrow>
        <SectionHeader title="A Grief-Informed School" centered={false} />
        <ul className="space-y-4">
          {griefInformedTraits.map((trait) => (
            <li key={trait} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground text-lg">{trait}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-muted-foreground text-lg leading-relaxed italic">
          When grief is addressed proactively, it can help grieving students become more equipped to concentrate, and in turn, be more prepared for learning.
        </p>
      </Section>

      {/* Key Topics */}
      <Section background="muted">
        <SectionHeader title="Key Topics" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((item) => (
            <Card key={item.title}>
              <CardBody>
                <h3 className="text-lg font-bold font-serif text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Grade Bands */}
      <Section>
        <SectionHeader title="Developmentally Appropriate Grief Education" subtitle="Overview by grade bands" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gradeBands.map((band) => (
            <div key={band.label} className="text-center">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${band.color}`}>
                {band.label}
              </span>
              <p className="text-muted-foreground">{band.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* How We Can Help CTA */}
      <section className="bg-gradient-to-r from-primary to-teal-700 py-16">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h2 className="text-3xl font-bold text-white font-serif">How the NJ Grief Collaborative Can Help</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/training">
              <Button variant="accent">Professional Training</Button>
            </Link>
            <Link href="/contact">
              <Button variant="accent">Consultation</Button>
            </Link>
            <Link href="/resources">
              <Button variant="accent">Curriculum Partners</Button>
            </Link>
            <Link href="/contact">
              <Button variant="accent">Presenter Directory</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
