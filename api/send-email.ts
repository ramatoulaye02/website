import sgMail from '@sendgrid/mail';

const sendEmail = async (req: { method?: string; body?: any }, res: any) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    res.end('Method Not Allowed');
    return;
  }

  const apiKey = process.env.SENDGRID_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    res.statusCode = 500;
    res.json({ error: 'Missing email configuration.' });
    return;
  }

  const { name, email, subject, message, date } = req.body || {};

  if (!name || !email || !subject || !message) {
    res.statusCode = 400;
    res.json({ error: 'Missing required fields.' });
    return;
  }

  sgMail.setApiKey(apiKey);

  const safeDate = date || new Date().toISOString();
  const finalSubject = `Portfolio contact: ${subject}`;

  try {
    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email,
      subject: finalSubject,
      text: `Name: ${name}\nEmail: ${email}\nDate: ${safeDate}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Date:</strong> ${safeDate}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr />
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    });

    res.statusCode = 200;
    res.json({ ok: true });
  } catch (error: any) {
    res.statusCode = 500;
    res.json({ error: 'Failed to send email.' });
  }
};

export default sendEmail;
