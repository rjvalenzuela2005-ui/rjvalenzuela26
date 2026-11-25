const Skill = require('../models/Skill');

// GET /api/skills  — supports ?category=
exports.getSkills = async (req, res, next) => {
  try {
    const filter = req.query.category ? { category: req.query.category } : {};
    const skills = await Skill.find(filter).sort({ category: 1, level: -1 });
    res.status(200).json({ success: true, count: skills.length, data: skills });
  } catch (err) { next(err); }
};

// POST /api/skills  (protected)
exports.createSkill = async (req, res, next) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({ success: true, data: skill });
  } catch (err) { next(err); }
};

// DELETE /api/skills/:id  (protected)
exports.deleteSkill = async (req, res, next) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) return res.status(404).json({ success: false, message: 'Skill not found' });
    res.status(200).json({ success: true, message: 'Skill deleted' });
  } catch (err) { next(err); }
};
