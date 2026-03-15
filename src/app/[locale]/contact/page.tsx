'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  role: z.string().min(1),
  organization: z.string().optional(),
  subject: z.string().min(2),
  message: z.string().min(10),
  centers: z.array(z.string()).min(1, 'Please select at least one center'),
  honeypot: z.string().max(0), // spam prevention
});

type ContactFormData = z.infer<typeof contactSchema>;

const centers = [
  { id: 'alcove', name: 'Alcove' },
  { id: 'common-ground', name: 'Common Ground Grief Center' },
  { id: 'good-grief', name: 'Good Grief' },
  { id: 'imagine', name: 'Imagine, A Center for Coping with Loss' },
  { id: 'stephys-place', name: "Stephy's Place" },
];

export default function ContactPage() {
  const t = useTranslations('contact');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { centers: [], honeypot: '' },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const roles = ['educator', 'counselor', 'administrator', 'parent', 'student', 'other'] as const;

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-teal-50 to-purple-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-[var(--container-padding)] text-center">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl font-serif">{t('title')}</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>

      <Section narrow>
        {status === 'success' ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-lg text-foreground font-medium">{t('successMessage')}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto space-y-6" noValidate>
            {/* Honeypot — hidden from real users */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <input type="text" {...register('honeypot')} tabIndex={-1} autoComplete="off" />
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">{t('nameLabel')}</label>
                <input
                  id="name"
                  type="text"
                  {...register('name')}
                  placeholder={t('namePlaceholder')}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">{t('emailLabel')}</label>
                <input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder={t('emailPlaceholder')}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
            </div>

            {/* Phone & Role */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">{t('phoneLabel')}</label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone')}
                  placeholder={t('phonePlaceholder')}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-foreground mb-1">{t('roleLabel')}</label>
                <select
                  id="role"
                  {...register('role')}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-invalid={!!errors.role}
                >
                  <option value="">{t('rolePlaceholder')}</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>{t(`roles.${role}`)}</option>
                  ))}
                </select>
                {errors.role && <p className="mt-1 text-sm text-red-500">{errors.role.message}</p>}
              </div>
            </div>

            {/* Organization */}
            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-1">{t('organizationLabel')}</label>
              <input
                id="organization"
                type="text"
                {...register('organization')}
                placeholder={t('organizationPlaceholder')}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">{t('subjectLabel')}</label>
              <input
                id="subject"
                type="text"
                {...register('subject')}
                placeholder={t('subjectPlaceholder')}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                aria-invalid={!!errors.subject}
              />
              {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">{t('messageLabel')}</label>
              <textarea
                id="message"
                {...register('message')}
                placeholder={t('messagePlaceholder')}
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y"
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
            </div>

            {/* Center Selection */}
            <fieldset>
              <legend className="block text-sm font-medium text-foreground mb-3">{t('centersLabel')}</legend>
              <div className="grid grid-cols-2 gap-3">
                {centers.map((center) => (
                  <label
                    key={center.id}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      value={center.id}
                      {...register('centers')}
                      className="w-4 h-4 rounded text-primary focus:ring-primary"
                    />
                    <span className="text-sm text-foreground">{center.name}</span>
                  </label>
                ))}
              </div>
              {errors.centers && <p className="mt-1 text-sm text-red-500">{errors.centers.message}</p>}
            </fieldset>

            {/* Submit */}
            <div>
              <Button type="submit" size="lg" className="w-full" disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : t('submitButton')}
              </Button>
            </div>

            {status === 'error' && (
              <p className="text-center text-red-500 text-sm">{t('errorMessage')}</p>
            )}
          </form>
        )}
      </Section>
    </>
  );
}
