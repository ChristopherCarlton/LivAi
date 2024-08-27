import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter using environment variables
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // or any other service
      auth: {
        user: process.env.EMAIL_USER, // your email address from .env.local
        pass: process.env.EMAIL_PASS, // your app password from .env.local
      },
    });

    // Send the email
    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // sender address
        to: 'info@livai.ai', // list of receivers
        subject: `New message from ${name}`, // Subject line
        text: message, // plain text body
      });

      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
