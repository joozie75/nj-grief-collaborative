import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardBody } from '@/components/ui/Card';

const members = [
  {
    name: 'Alcove',
    description: 'A center for grieving children and families in South Jersey providing peer support groups, individual and family counseling, community education, and school-based programs.',
    serviceArea: 'Southern NJ',
    website: 'https://thealcove.org',
    logo: '/logos/alcove.png',
  },
  {
    name: 'Common Ground Grief Center',
    description: 'Located at the Jersey Shore, Common Ground offers free peer support programs for children, teens, young adults, and their families who are grieving the death of someone significant.',
    serviceArea: 'Shore & Central NJ',
    website: 'https://www.commongroundgriefcenter.org',
    logo: '/logos/common-ground.jpg',
  },
  {
    name: 'Good Grief',
    description: 'Based in Morristown, Good Grief provides free, ongoing peer support programs for children and families after the death of a significant person. Their evidence-based programs serve families from across New Jersey.',
    serviceArea: 'Northern NJ',
    website: 'https://good-grief.org',
    logo: '/logos/good-grief.png',
  },
  {
    name: 'Imagine, A Center for Coping with Loss',
    description: 'Based in Newark and Mountainside, Imagine provides year-round grief support programs for children, teens, young adults, and their families through peer support groups, community education, and advocacy.',
    serviceArea: 'Northern & Central NJ',
    website: 'https://imaginenj.org',
    logo: '/logos/imagine.svg',
  },
  {
    name: "Stephy's Place",
    description: 'Supporting children and families through grief with compassionate programs and community resources across New Jersey.',
    serviceArea: 'New Jersey',
    website: '#',
    logo: '/logos/stephys-place.png',
  },
];

const whyPoints = [
  'Shared concern for students coping with loss during their school day',
  'A shared commitment to supporting educators who work with students who are grieving every day',
  'Recognition that loss is a universal experience and communities need access to accurate, current and best practice resources',
];

const howWeWork = [
  'Collaboration on materials, strategy, professional development, and school-based support',
  'Quarterly meetings to share best practices, address emerging community needs, and solve challenges together',
  'Aligning with best practice, up-to-date information in the childhood bereavement field',
];

const ourRole = [
  'Direct service and consultation',
  'Expertise in grief education',
  'Support for school-based mandate implementation',
];

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl font-serif">About the NJ Grief Collaborative</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A collaborative of New Jersey&apos;s Family Bereavement Centers supporting schools as they support children and families coping with loss.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground font-serif">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Ensure school communities are equipped with the proper knowledge and tools to effectively teach students about loss and grief and are aware of the available community resources for support.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground font-serif">Our Vision</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Creating grief-informed school communities where grief is seen as a natural response to loss and students can learn how to cope with their own loss as well as know how to support others coping with a loss.
            </p>
          </div>
        </div>
      </Section>

      {/* Why We Came Together */}
      <Section background="muted">
        <SectionHeader title="Why We Came Together" centered={false} />
        <ul className="space-y-4 max-w-3xl">
          {whyPoints.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* How We Work Together */}
      <Section>
        <SectionHeader title="How We Work Together" centered={false} />
        <ul className="space-y-4 max-w-3xl">
          {howWeWork.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Our Role in the Mandate */}
      <Section background="muted">
        <SectionHeader title="Our Role in P.L.2023, c.201" centered={false} />
        <ul className="space-y-4 max-w-3xl">
          {ourRole.map((point) => (
            <li key={point} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-muted-foreground text-lg">{point}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Partners & Supporters */}
      <Section>
        <SectionHeader title="Partners & Supporters" subtitle="We are grateful for the support of schools, nonprofits, and professional organizations who share our commitment to grief-informed education." />
        <div className="text-center text-muted-foreground">
          <p className="text-lg mb-4">Our work is made possible through partnerships with organizations across New Jersey and beyond.</p>
          <p className="text-sm italic">Sponsored by the New York Life Foundation</p>
        </div>
      </Section>

      {/* Coalition Members */}
      <Section background="muted">
        <SectionHeader title="Coalition Members" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <Card key={member.name} className="flex flex-col">
              <CardBody className="flex-1">
                <div className="flex items-center gap-5 mb-4">
                  <div className="w-20 h-20 flex items-center justify-center shrink-0">
                    {member.logo ? (
                      <Image
                        src={member.logo}
                        alt={`${member.name} logo`}
                        width={80}
                        height={80}
                        className="object-contain w-20 h-20"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-primary-light flex items-center justify-center">
                        <span className="text-primary font-bold text-3xl font-serif">{member.name.charAt(0)}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-serif text-foreground">{member.name}</h3>
                    <p className="text-base text-primary font-semibold">{member.serviceArea}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{member.description}</p>
                {member.website !== '#' && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary font-medium hover:underline text-sm"
                  >
                    Visit Website &rarr;
                  </a>
                )}
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
