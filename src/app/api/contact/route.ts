import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, role, organization, school, subject, message, centers, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!name || !email || !subject || !message || !centers?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Submit to Netlify Forms
    const formData = new URLSearchParams();
    formData.append('form-name', 'contact');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone || '');
    formData.append('role', role);
    formData.append('organization', organization || '');
    formData.append('school', school || '');
    formData.append('subject', subject);
    formData.append('message', message);
    formData.append('centers', (centers as string[]).join(', '));

    const netlifyResponse = await fetch(
      process.env.URL || 'https://njgriefcollaborative.netlify.app',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      }
    );

    if (!netlifyResponse.ok) {
      throw new Error('Netlify form submission failed');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
