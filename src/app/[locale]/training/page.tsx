import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const programs = [
  {
    title: 'Grief 101 for Educators',
    description: 'A foundational workshop covering childhood grief basics, common misconceptions, and how grief impacts learning and behavior in the classroom.',
    duration: '2 hours',
    format: 'Virtual or In-Person',
    audience: 'All School Staff',
  },
  {
    title: 'Building a Grief-Informed School',
    description: 'A comprehensive training for school leadership teams on creating systems, protocols, and culture that support bereaved students school-wide.',
    duration: 'Full Day',
    format: 'In-Person',
    audience: 'Administrators & Counselors',
  },
  {
    title: 'Responding to Crisis Loss',
    description: 'Preparing schools to respond when a death impacts the school community. Covers crisis protocols, communication, and supporting staff and students.',
    duration: '3 hours',
    format: 'Virtual or In-Person',
    audience: 'Crisis Teams',
  },
  {
    title: 'Grief Education Curriculum Implementation',
    description: 'Hands-on training for educators implementing age-appropriate grief education in their classrooms, aligned with P.L.2023, c.201.',
    duration: 'Half Day',
    format: 'In-Person',
    audience: 'Teachers & Counselors',
  },
  {
    title: 'Supporting Grieving Teens',
    description: 'Focused on the unique aspects of adolescent grief, peer dynamics, and how to create safe spaces for teens processing loss.',
    duration: '2 hours',
    format: 'Virtual',
    audience: 'Middle & High School Staff',
  },
];

const attendees = [
  'Classroom Teachers',
  'School Counselors',
  'School Psychologists',
  'Administrators & Principals',
  'School Nurses',
  'Paraprofessionals',
  'Social Workers',
  'Student Assistance Coordinators',
];

export default function TrainingPage() {
  const t = useTranslations('training');

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl font-serif">{t('title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      {/* Intro */}
      <Section narrow>
        <p className="text-lg text-muted-foreground leading-relaxed text-center">
          {t('introText')}
        </p>
      </Section>

      {/* Programs */}
      <Section background="muted">
        <SectionHeader title={t('programsTitle')} />
        <div className="space-y-6">
          {programs.map((program) => (
            <Card key={program.title} className="flex flex-col sm:flex-row gap-6">
              <CardBody className="flex-1">
                <h3 className="text-xl font-bold font-serif text-foreground">{program.title}</h3>
                <p className="mt-2 text-muted-foreground">{program.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="teal">{program.duration}</Badge>
                  <Badge variant="purple">{program.format}</Badge>
                  <Badge variant="warm">{program.audience}</Badge>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Who Should Attend */}
      <Section>
        <SectionHeader title={t('whoTitle')} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {attendees.map((attendee) => (
            <div key={attendee} className="flex items-center gap-2 text-muted-foreground">
              <svg className="w-5 h-5 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm">{attendee}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Request Training CTA */}
      <section className="bg-gradient-to-r from-primary to-teal-700 py-16">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h2 className="text-3xl font-bold text-white font-serif">{t('requestTitle')}</h2>
          <p className="mt-4 text-lg text-teal-100 max-w-2xl mx-auto">{t('requestText')}</p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="accent" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
