const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name:     { type: String, required: true, trim: true },
  category: {
    type: String,
    required: true,
    enum: ['Frontend', 'Backend', 'Database', 'Design', 'Creative Tools', 'DevOps', 'Tools', 'Other'],
    default: 'Frontend',
  },
  icon:     { type: String, default: '' },
  level:    { type: Number, min: 1, max: 100, default: 85 },
  featured: { type: Boolean, default: true },
});

module.exports = mongoose.model('Skill', skillSchema);
