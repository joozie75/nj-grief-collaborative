'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import Card, { CardBody } from '@/components/ui/Card';

const testimonials = [
  {
    quote: 'This is one of the best things I\'ve done in my life. I feel less alone and more connected to everyone in the school.',
    role: 'Student',
    perspective: 'student',
    source: 'Imagine',
  },
  {
    quote: 'Being a student mentor saved my life. It helped me realize that my loss matters.',
    role: 'Student',
    perspective: 'student',
    source: 'Imagine',
  },
  {
    quote: 'I really enjoyed everything about the presentation. I am excited to learn and teach the lesson to my students in the future.',
    role: 'Educator',
    perspective: 'educator',
    source: 'Imagine',
  },
  {
    quote: 'I felt like the professional development was super useful because it helped me teach the lesson by giving me new ideas, improving how I explain the topic, and helping me feel more confident. It also showed me better ways to reach all students.',
    role: 'Educator',
    perspective: 'educator',
    source: 'Imagine',
  },
  {
    quote: 'An incredible refuge for comfort, support, and sense of belonging for my family during the hardest time in our life. Thank you for everything you do!',
    role: 'Parent',
    perspective: 'parent',
    source: 'Imagine',
  },
  {
    quote: 'This organization is like one big hug. The amount of support and love you receive is unmatched. Imagine has helped me and my son tremendously and I don\'t know where I would be without them. So for that, I would recommend them to anyone who is grieving a loss.',
    role: 'Parent',
    perspective: 'parent',
    source: 'Imagine',
  },
  {
    quote: 'This training exceeded my expectations. Although I have participated in previous grief related trainings, this program stood out for its authenticity, compassion, and organization. The facilitators created a supportive and empathetic learning environment that encouraged self-reflection and personal growth. The training increased my self-awareness and helped me identify areas I was previously unaware of, which has strengthened my approach. I now feel confident and equipped with practical tools and structure to effectively support individuals throughout their grief journey.',
    role: 'Grief Professional',
    perspective: 'professional',
    source: 'Imagine',
  },
  {
    quote: 'I left feeling empowered with understanding of how to support individuals and families navigating grief with compassion and confidence and inspired to make a meaningful difference in the lives of those I serve.',
    role: 'Grief Professional',
    perspective: 'professional',
    source: 'Imagine',
  },
  {
    quote: 'The time and care that went into the planning, delivery, and content of the training was evident throughout the experience. Thank you for your efforts in building community relationships and providing usable and impactful resources for children, families, schools, and more!',
    role: 'Grief Professional',
    perspective: 'professional',
    source: 'Imagine',
  },
  {
    quote: 'Completing the IMAGINE grief and loss specialist training was an incredibly transformative experience. The depth of insight, compassion, and expertise shared by the facilitators was truly second to none. I walked away not only with a stronger clinical and emotional toolkit but with a profound respect for the community IMAGINE has built.',
    role: 'Grief Professional',
    perspective: 'professional',
    source: 'Imagine',
  },
];

const perspectives = ['all', 'student', 'educator', 'parent', 'professional'] as const;
const perspectiveLabels: Record<string, string> = {
  all: 'All',
  student: 'Students',
  educator: 'Educators',
  parent: 'Parents & Caregivers',
  professional: 'Grief Professionals',
};

export default function TestimonialsPage() {
  const t = useTranslations('testimonials');
  const [filter, setFilter] = useState<string>('all');

  const filtered = filter === 'all'
    ? testimonials
    : testimonials.filter((t) => t.perspective === filter);

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl font-serif">Testimonials, Stories & Voices</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students, educators, parents, and grief professionals about the impact of this work.
          </p>
        </div>
      </section>

      <Section>
        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {perspectives.map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === p
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground hover:bg-primary-light hover:text-primary'
              }`}
            >
              {perspectiveLabels[p]}
            </button>
          ))}
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((testimonial, i) => (
            <Card key={i}>
              <CardBody>
                <svg className="w-8 h-8 text-primary/30 mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <blockquote className="text-foreground leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="mt-4">
                  <p className="text-sm text-primary font-medium">&mdash; {testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.source}</p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
