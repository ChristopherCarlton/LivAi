// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     // Create a transporter
//     let transporter = nodemailer.createTransport({
//       service: 'Gmail', // or any other service
//       auth: {
//         user: process.env.EMAIL_USER, // your email address
//         pass: process.env.EMAIL_PASS, // your email password
//       },
//     });

//     // Send the email
//     try {
//       await transporter.sendMail({
//         from: email,
//         to: 'info@livai.ai',
//         subject: `New message from ${name}`,
//         text: message,
//       });

//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Failed to send email' });
//     }
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
