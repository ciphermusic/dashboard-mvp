import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import SignoffEmailTemplate from 'components/email_templates/SignoffEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ciphermusic.io@gmail.com'],
      subject: 'Action Required: Sync Contract | Calm Down - Rema | Marriott International',
      react: SignoffEmailTemplate({ firstName: 'Uwaifo Osamudiame' }),
      attachments: [
        {
          filename: 'Sync_License_Everybody_Don_Bronco_09042024.pdf',
          path: 'https://joqfsynntlxnuyvthuua.supabase.co/storage/v1/object/public/cipher-docs/License.pdf?t=2024-04-09T02%3A29%3A38.803Z',
        },
      ]
    });

    return NextResponse.json({ message: "Sign off email sent successfully, id=" + JSON.stringify(response) }, { status: 200 });
  } catch (error) {
    console.log("Error sending email:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}