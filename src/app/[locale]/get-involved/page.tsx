'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import Section, { SectionHeader } from '@/components/ui/Section';
import Card, { CardBody } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const waysToSupport = [
  {
    title: "Children's Grief Awareness Month",
    description: 'Join us in raising awareness during November — share the message, host events, and help your community become grief-informed.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Share the Message',
    description: 'Help spread the word about the NJ grief education mandate and available resources in your school community and networks.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
  },
  {
    title: 'Attend Trainings and Events',
    description: 'Participate in professional development workshops, webinars, and community events offered by the NJ Grief Collaborative.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Partner as an Organization',
    description: 'Schools, nonprofits, and professional organizations — partner with us to expand the reach of grief-informed education.',
    icon: (
      <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function GetInvolvedPage() {
  const t = useTranslations('getInvolved');
  const [surveyStatus, setSurveyStatus] = useState<'idle' | 'success'>('idle');

  const handleSurveySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to backend
    setSurveyStatus('success');
  };

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl font-serif">Get Involved</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us in supporting grieving students across New Jersey.
          </p>
        </div>
      </section>

      {/* Ways to Support */}
      <Section>
        <SectionHeader title="Ways to Support" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {waysToSupport.map((way) => (
            <Card key={way.title}>
              <CardBody>
                <div className="mb-4">{way.icon}</div>
                <h3 className="text-lg font-bold font-serif text-foreground">{way.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{way.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>

      {/* Want to Lead the Charge — Survey */}
      <Section background="muted">
        <SectionHeader title="Want to Lead the Charge?" subtitle="Complete this survey to connect with NJ grief support organizations." />

        {surveyStatus === 'success' ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg text-foreground font-medium">Thank you! We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSurveySubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="survey-name" className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  id="survey-name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="survey-role" className="block text-sm font-medium text-foreground mb-1">Role</label>
                <input
                  id="survey-role"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your role (e.g., Teacher, Counselor)"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="survey-school" className="block text-sm font-medium text-foreground mb-1">School / District</label>
                <input
                  id="survey-school"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your school or district"
                />
              </div>
              <div>
                <label htmlFor="survey-town" className="block text-sm font-medium text-foreground mb-1">Town</label>
                <input
                  id="survey-town"
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your town"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="survey-email" className="block text-sm font-medium text-foreground mb-1">Email</label>
                <input
                  id="survey-email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="survey-phone" className="block text-sm font-medium text-foreground mb-1">Phone</label>
                <input
                  id="survey-phone"
                  type="tel"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="(555) 555-5555"
                />
              </div>
            </div>
            <div>
              <label htmlFor="survey-request" className="block text-sm font-medium text-foreground mb-1">How can we help?</label>
              <textarea
                id="survey-request"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                placeholder="Tell us what you're looking for..."
              />
            </div>
            <div className="text-center">
              <Button type="submit" size="lg">Submit Survey</Button>
            </div>
          </form>
        )}
      </Section>

      {/* For Legislators & Policymakers */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground font-serif">For Legislators & Policymakers</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Grief education strengthens schools. Learn about the evidence behind P.L.2023, c.201 and how continued support makes a difference for New Jersey students.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Us to Learn More</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Sign Up / Stay Informed */}
      <section className="bg-gradient-to-r from-primary to-teal-700 py-16">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h2 className="text-3xl font-bold text-white font-serif">Sign Up / Stay Informed</h2>
          <p className="mt-4 text-teal-100 max-w-xl mx-auto">
            Get email updates and announcements from the NJ Grief Collaborative.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 text-white placeholder-teal-200 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Email for updates"
            />
            <Button variant="accent">Subscribe</Button>
          </form>
        </div>
      </section>
    </>
  );
}
