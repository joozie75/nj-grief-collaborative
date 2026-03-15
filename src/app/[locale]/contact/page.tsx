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
  school: z.string().optional(),
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
      const formData = new URLSearchParams();
      formData.append('form-name', 'contact');
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone || '');
      formData.append('role', data.role);
      formData.append('organization', data.organization || '');
      formData.append('school', data.school || '');
      formData.append('subject', data.subject);
      formData.append('message', data.message);
      formData.append('centers', data.centers.join(', '));
      formData.append('bot-field', data.honeypot);

      const res = await fetch('/form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
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

      {/* Inquiry Types */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl border border-border">
            <svg className="w-8 h-8 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 className="font-bold text-foreground font-serif">General Inquiries</h3>
            <p className="mt-2 text-sm text-muted-foreground">Questions about grief education, the mandate, or our coalition.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-border">
            <svg className="w-8 h-8 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" />
            </svg>
            <h3 className="font-bold text-foreground font-serif">Media Inquiries</h3>
            <p className="mt-2 text-sm text-muted-foreground">Press, interviews, and media coverage requests.</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl border border-border">
            <svg className="w-8 h-8 text-primary mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <h3 className="font-bold text-foreground font-serif">Partnership Inquiries</h3>
            <p className="mt-2 text-sm text-muted-foreground">Collaborate with us as a school, district, or organization.</p>
          </div>
        </div>
      </Section>

      <Section narrow background="muted">
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

            {/* Organization & School */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-foreground mb-1">School Name</label>
                <input
                  id="school"
                  type="text"
                  {...register('school')}
                  placeholder="Name of your school"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
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
