const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name:      { type: String, required: true, trim: true },
  email:     {
    type: String, required: true, trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
  },
  subject:   { type: String, default: 'Portfolio Contact', trim: true },
  message:   { type: String, required: true },
  read:      { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', messageSchema);
