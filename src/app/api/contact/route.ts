import { NextResponse } from 'next/server';

// Email mapping for each center
const centerEmails: Record<string, string> = {
  'imagine': 'info@imaginenj.org',
  'good-grief': 'info@good-grief.org',
  'the-alcove': 'info@thealcovenj.org',
  'common-ground': 'info@commongroundgc.org',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, role, organization, subject, message, centers, honeypot } = body;

    // Honeypot check
    if (honeypot) {
      return NextResponse.json({ success: true }); // Silently accept spam
    }

    // Basic validation
    if (!name || !email || !subject || !message || !centers?.length) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // In production, this would use Resend to send emails
    // For now, log the submission
    console.log('Contact form submission:', {
      name,
      email,
      phone,
      role,
      organization,
      subject,
      message,
      centers,
      recipientEmails: centers.map((c: string) => centerEmails[c]).filter(Boolean),
    });

    // TODO: Uncomment when Resend API key is configured
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // for (const centerId of centers) {
    //   const toEmail = centerEmails[centerId];
    //   if (!toEmail) continue;
    //   await resend.emails.send({
    //     from: 'NJ Grief Collaborative <noreply@njgriefcollaborative.org>',
    //     to: toEmail,
    //     subject: `Contact Form: ${subject}`,
    //     html: `
    //       <h2>New Contact Form Submission</h2>
    //       <p><strong>Name:</strong> ${name}</p>
    //       <p><strong>Email:</strong> ${email}</p>
    //       <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
    //       <p><strong>Role:</strong> ${role}</p>
    //       <p><strong>Organization:</strong> ${organization || 'N/A'}</p>
    //       <p><strong>Message:</strong></p>
    //       <p>${message}</p>
    //     `,
    //   });
    // }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
