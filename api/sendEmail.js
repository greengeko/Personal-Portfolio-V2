import { createTransport } from 'nodemailer';
import multer from 'multer';

const transporter = createTransport({
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

const upload = multer();

export default async function handler(req, res) {
    //console.log('EMAIL_USER:', process.env.EMAIL_USER);
    //console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD);
    if (req.method === 'POST') {

        upload.none()(req, res, async (err) => {
            if (err) {
                console.error('Error parsing form data:', err);
                return res.status(500).json({error: 'Failed to parse form data.'});
            }

            const {name, email, subject, message} = req.body;
            try {

                const mailOptions = {
                    from: process.env.EMAIL_USER,
                    to: process.env.EMAIL_USER,
                    subject: subject,
                    text: `From: ${name}\nEmail: ${email}\nMessage: ${message}`
                };

                await transporter.sendMail(mailOptions);

                res.status(200).json({message: 'Email sent successfully!'});
            } catch (error) {

                console.error('Error sending email:', error);
                res.status(500).json({error: 'Failed to send email. Please try again later.'});
            }
        })
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}