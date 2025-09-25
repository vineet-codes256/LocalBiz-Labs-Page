import { Resend } from 'resend';

export async function POST(req) {
    try {
        const { name, phone, businessType, email, message } = await req.json();

        if (!name || !phone || !businessType || !email || !message) {
            return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const data = await resend.emails.send({
            from: 'LocalBizLabs <hello@localbizlabs.com>', // use onresend.com if not verified yet
            to: ['hello@localbizlabs.com'],
            subject: `New Contact Form Submission: ${name}`,
            html: `
        <div style="font-family:sans-serif; font-size:16px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business Type:</strong> ${businessType}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
            reply_to: email,
        });

        if (data.error) {
            console.error('Resend Error:', data.error);
            return new Response(JSON.stringify({ error: 'Email sending failed.' }), { status: 500 });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        console.error('Server Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
    }
}
