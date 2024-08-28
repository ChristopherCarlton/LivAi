import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter using environment variables
    let transporter = nodemailer.createTransport({
      service: 'Gmail', // or another service like 'Yahoo', 'Outlook', etc.
      auth: {
        user: process.env.EMAIL_USER, // your email address from .env.local
        pass: process.env.EMAIL_PASS, // your app password from .env.local
      },
    });

    // Send the email
    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // sender address
        to: 'mike@livai.ai', // list of receivers
        subject: `New message from ${name}`, // Subject line
        text: `You have received a new message from ${name} (${email}):\n\n${message}`, // plain text body
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





// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   host: 'smtp-relay.brevo.com', // Brevo's SMTP server
//   port: 587, // Port number (use 587 or 2525)
//   auth: {
//     user: process.env.BREVO_USER, // Your Brevo login
//     pass: process.env.BREVO_API_KEY, // Your Brevo API key
//   },
// });

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     try {
//       await transporter.sendMail({
//         from: `"${name}" <${email}>`, // sender address
//         to: 'mike@livai.ai', // list of receivers
//         subject: `New message from ${name}, ${email}`, // Subject line
//         text: `You have received a new message from ${name} (${email}):\n\n${message}`, // plain text body
//       });

//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Failed to send email' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
