const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const Message = require('../models/Message');

// POST /api/contact
exports.createMessage = async (req, res, next) => {
  // Validate input
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Send email via Nodemailer
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        await transporter.sendMail({
          from:    `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
          to:      process.env.EMAIL_TO || process.env.EMAIL_USER,
          replyTo: email,
          subject: `[Portfolio Inquiry] ${subject || 'New Message'} from ${name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
              <h2 style="color: #2563EB; margin-top: 0;">New Message from Portfolio</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
              <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
              <p style="white-space: pre-wrap; line-height: 1.6; color: #1e293b;">${message}</p>
            </div>
          `,
        });
        console.log(`📧 Email sent successfully to ${process.env.EMAIL_TO || process.env.EMAIL_USER}`);
      } catch (emailErr) {
        console.error('Email send failed:', emailErr.message);
      }
    } else {
      console.warn('⚠️ Nodemailer: EMAIL_USER or EMAIL_PASS not set in server/.env');
    }

    // Optionally save to MongoDB if connected
    let savedMessage = null;
    try {
      if (mongoose.connection.readyState === 1) {
        savedMessage = await Message.create({ name, email, subject, message });
      }
    } catch (dbErr) {
      console.warn('MongoDB save skipped:', dbErr.message);
    }

    res.status(201).json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
      data: savedMessage,
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/contact  (protected)
exports.getMessages = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(200).json({ success: true, count: 0, data: [] });
    }
    const page  = parseInt(req.query.page  || '1');
    const limit = parseInt(req.query.limit || '20');
    const skip  = (page - 1) * limit;

    const [messages, total] = await Promise.all([
      Message.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Message.countDocuments(),
    ]);

    res.status(200).json({
      success: true,
      count: messages.length,
      total,
      data: messages,
    });
  } catch (err) {
    next(err);
  }
};

// PATCH /api/contact/:id/read  (protected)
exports.markAsRead = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(200).json({ success: true });
    }
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }
    res.status(200).json({ success: true, data: message });
  } catch (err) {
    next(err);
  }
};

// DELETE /api/contact/:id  (protected)
exports.deleteMessage = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(200).json({ success: true });
    }
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ success: false, message: 'Message not found' });
    }
    res.status(200).json({ success: true, message: 'Message deleted' });
  } catch (err) {
    next(err);
  }
};
