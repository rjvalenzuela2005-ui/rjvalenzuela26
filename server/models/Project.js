const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title:       { type: String, required: [true, 'Title is required'], trim: true },
  category:    { type: String, required: [true, 'Category is required'], trim: true },
  description: { type: String, required: [true, 'Description is required'] },
  image:       { type: String, default: '' },
  techStack:   { type: [String], default: [] },
  liveUrl:     { type: String, default: '' },
  githubUrl:   { type: String, default: '' },
  featured:    { type: Boolean, default: false },
  createdAt:   { type: Date, default: Date.now },
});

module.exports = mongoose.model('Project', projectSchema);
