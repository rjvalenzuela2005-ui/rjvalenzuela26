const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const nodemailer = require('nodemailer');

console.log('Testing Gmail configuration...');
console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_TO:', process.env.EMAIL_TO);
console.log('EMAIL_PASS set:', !!process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function runTest() {
  try {
    console.log('Verifying connection with Google SMTP...');
    await transporter.verify();
    console.log('✅ Connection verified successfully!');

    console.log('Sending test email...');
    const info = await transporter.sendMail({
      from: `"Portfolio Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: 'Test Email from Your Portfolio',
      html: '<h3>Test Successful!</h3><p>Your portfolio email integration is working perfectly.</p>',
    });

    console.log('✅ Test email sent! Message ID:', info.messageId);
  } catch (err) {
    console.error('❌ Email test failed with error:', err.message);
    if (err.response) {
      console.error('SMTP Response:', err.response);
    }
  }
}

runTest();
