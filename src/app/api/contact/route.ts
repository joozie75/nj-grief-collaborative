import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const ADMIN_EMAIL = 'jamesooi07078@gmail.com';

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

    const centersSelected = (centers as string[]).join(', ');
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification to admin
    await resend.emails.send({
      from: 'NJ Grief Collaborative <onboarding@resend.dev>',
      to: ADMIN_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #609191;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e8e2da;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          <p><strong>Role:</strong> ${role}</p>
          <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
          <p><strong>School:</strong> ${school || 'N/A'}</p>
          <p><strong>Center(s) Selected:</strong> ${centersSelected}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #e8e2da;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    // Send confirmation to the person who submitted the form
    await resend.emails.send({
      from: 'NJ Grief Collaborative <onboarding@resend.dev>',
      to: email,
      subject: 'We received your message — NJ Grief Collaborative',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #609191;">Thank You, ${name}!</h2>
          <p>We've received your message and will get back to you within 2 business days.</p>
          <hr style="border: 1px solid #e8e2da;" />
          <p><strong>Your message:</strong></p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p style="white-space: pre-wrap; color: #5f6368;">${message}</p>
          <hr style="border: 1px solid #e8e2da;" />
          <p style="color: #5f6368; font-size: 14px;">
            If you need immediate support, please reach out directly to one of our coalition member organizations:
          </p>
          <ul style="color: #5f6368; font-size: 14px;">
            <li>Alcove</li>
            <li>Common Ground Grief Center</li>
            <li>Good Grief</li>
            <li>Imagine, A Center for Coping with Loss</li>
            <li>Stephy's Place</li>
          </ul>
          <p style="color: #999; font-size: 12px; margin-top: 24px;">
            NJ Grief Collaborative — Supporting grieving students across New Jersey
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
