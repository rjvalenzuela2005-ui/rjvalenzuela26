// Centralized Express error handler
const errorHandler = (err, req, res, next) => {
  console.error('[Error]', err.message);

  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    return res.status(404).json({ success: false, message: `Resource not found (id: ${err.value})` });
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {}).join(', ');
    return res.status(400).json({ success: false, message: `Duplicate value for field: ${field}` });
  }

  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message).join(', ');
    return res.status(400).json({ success: false, message: messages });
  }

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;
