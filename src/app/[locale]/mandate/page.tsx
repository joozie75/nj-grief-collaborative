import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Section, { SectionHeader } from '@/components/ui/Section';
import Accordion, { AccordionItem } from '@/components/ui/Accordion';

export default function MandatePage() {
  const t = useTranslations('mandate');

  const whoImpacts = [
    { group: 'Families', description: 'Awareness of when and how grief education is addressed and what content is used' },
    { group: 'Educators', description: 'Access to trusted resources and support from NJ grief organizations' },
    { group: 'Schools', description: 'Understanding that educators teaching grief and loss should receive professional development prior to instruction' },
  ];

  const mandateIs = [
    'A way to normalize grief as a human experience',
    'An opportunity to equip students and families with coping tools and resources',
    'A broader conversation about grief related to many forms of loss, not only death',
  ];

  const mandateIsNot = [
    'Telling students how to grieve',
    'Providing grief support groups in schools',
    'Asking students to disclose personal losses',
    'Expecting teachers to act as counselors',
  ];

  const faqs = [
    {
      q: 'Does this need to be taught every year?',
      a: 'The mandate applies to grades 8–12 within Health and Physical Education instruction. Schools have flexibility in how they integrate grief education across these grade levels. Contact us for guidance on implementation planning.',
    },
    {
      q: 'Must this be taught exclusively in Health or PE?',
      a: 'P.L.2023, c.201 specifies inclusion within Health and Physical Education standards, but grief education naturally connects to social-emotional learning, advisory periods, and other areas. The mandate ensures a baseline within Health/PE.',
    },
    {
      q: 'Where can educators access professional development?',
      a: 'The NJ Grief Collaborative offers professional development workshops and training programs specifically designed for educators implementing grief education. Visit our Training page for upcoming opportunities.',
    },
    {
      q: 'Where can schools find sample lesson plans?',
      a: 'Our Resource Library includes guides, toolkits, and curriculum materials that schools can adapt. Coalition member organizations also provide consultation and curriculum partnership support.',
    },
    {
      q: 'Can outside presenters or speakers be used?',
      a: 'Yes. Schools may invite outside grief professionals and presenters to supplement instruction. The NJ Grief Collaborative member organizations are available for school-based presentations and consultation.',
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl font-serif">About the Grief Education Mandate</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">P.L.2023, c.201</p>
        </div>
      </section>

      {/* What Is It */}
      <Section narrow>
        <h2 className="text-3xl font-bold text-foreground font-serif">What Is P.L.2023, c.201?</h2>
        <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
          In January 2024, Governor Phil Murphy signed into law a mandate requiring grief and loss education to be included within Health and Physical Education standards for grades 8–12 in all New Jersey public schools.
        </p>
      </Section>

      {/* Who It Impacts */}
      <Section background="muted" narrow>
        <SectionHeader title="Who It Impacts" centered={false} />
        <div className="space-y-6">
          {whoImpacts.map((item) => (
            <div key={item.group} className="flex items-start gap-4 p-5 bg-white rounded-lg">
              <svg className="w-6 h-6 text-primary shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <h3 className="font-bold text-foreground">{item.group}</h3>
                <p className="text-muted-foreground mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* IS / IS NOT */}
      <Section narrow>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground font-serif mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              This Mandate IS
            </h2>
            <ul className="space-y-3">
              {mandateIs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal-500 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground font-serif mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
              This Mandate IS NOT
            </h2>
            <ul className="space-y-3">
              {mandateIsNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-400 shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* DOE Status */}
      <Section background="primary" narrow>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground font-serif">Status with the NJ Department of Education</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            The DOE&apos;s Physical Education and Health Standards Review Committee is drafting standards for adoption in 2027.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section narrow>
        <SectionHeader title="Frequently Asked Questions" />
        <Accordion>
          {faqs.map((faq, i) => (
            <AccordionItem key={i} title={faq.q}>
              <p>{faq.a}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
