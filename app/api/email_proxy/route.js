import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email_templates/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ciphermusic.io@gmail.com'],
      subject: 'Cipher: Everybody by Don Bronco requested by Ford Motor Company',
      react: EmailTemplate({ firstName: 'Madhav', price: 10000 }),
    });

    return NextResponse.json({ message: "Email sent successfully, id=" + JSON.stringify(response) }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
