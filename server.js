import express from 'express';
import { Resend } from 'resend';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email service configuration
const resend = new Resend('re_JPGubBR8_94iay8a15AGxvvRFLpBSqe7Z');

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Al Noor Impex <onboarding@resend.dev>',
      to: ['info@alnoor-impex.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>This message was sent from the Al Noor Impex contact form.</small></p>
      `
    });

    if (error) {
      throw error;
    }

    res.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Test endpoint
app.get('/api/test', (req, res) => {
  console.log('Environment variables:', {
    RESEND_API_KEY: process.env.RESEND_API_KEY ? 'Set' : 'Not set',
    NODE_ENV: process.env.NODE_ENV
  });
  
  res.json({ 
    success: true, 
    message: 'Server is running with Resend email service!',
    emailService: 'Resend',
    apiKey: process.env.RESEND_API_KEY ? 'Configured' : 'Using default'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Email service: Resend`);
  console.log(`API Key: ${process.env.RESEND_API_KEY ? 'Configured' : 'Using default'}`);
});
