const jwt = require('jsonwebtoken');

// POST /api/auth/login
// Body: { email, password }
exports.login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ success: false, message: 'Email and password are required.' });
  }

  // Simple plain-text comparison against environment variables
  const isEmailValid    = email    === process.env.ADMIN_EMAIL;
  const isPasswordValid = password === process.env.ADMIN_PASSWORD;

  if (!isEmailValid || !isPasswordValid) {
    return res.status(401).json({ success: false, message: 'Invalid credentials.' });
  }

  const token = jwt.sign(
    { role: 'admin', email },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.status(200).json({ success: true, token });
};
