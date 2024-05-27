import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import SignoffEmailTemplate, { PaymentEmailTemplate } from 'components/email_templates/PaymentEmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['ciphermusic.io@gmail.com'],
      subject: 'Sync Invoice | Everybody - Don Broco | Ford Motor Company',
      react: PaymentEmailTemplate({ firstName: 'Daniel Jamie Lancaster' }),
      attachments: [
        {
          filename: 'Sync_Invoice_Everybody_Don_Broco_09042024.pdf',
          path: 'https://joqfsynntlxnuyvthuua.supabase.co/storage/v1/object/public/cipher-docs/invoice_pdf.pdf',
        },
      ]
    });

    return NextResponse.json({ message: "Payment email sent successfully, id=" + JSON.stringify(response) }, { status: 200 });
  } catch (error) {
    console.log("Error sending email:", error);
    return NextResponse.json({ error }, { status: 500 });
  }
}