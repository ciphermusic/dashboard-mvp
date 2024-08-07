import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../../components/email_templates/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { searchParams } = new URL(req.url);
    const price = searchParams.get('price');

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ciphermusic.io@gmail.com'],
      subject: 'Cipher: Calm Down by Rema requested by Marriott International',
      react: EmailTemplate({ firstName: 'Uwaifo Omasudaime', price }),
    });

    return NextResponse.json({ message: "Email sent successfully, id=" + JSON.stringify(response) }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error });
  }
}