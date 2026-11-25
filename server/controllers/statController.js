const Stat = require('../models/Stat');

exports.getStats = async (req, res, next) => {
  try {
    const stats = await Stat.find().sort({ order: 1 });
    res.status(200).json({ success: true, data: stats });
  } catch (err) { next(err); }
};

exports.createStat = async (req, res, next) => {
  try {
    const stat = await Stat.create(req.body);
    res.status(201).json({ success: true, data: stat });
  } catch (err) { next(err); }
};

exports.updateStat = async (req, res, next) => {
  try {
    const stat = await Stat.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!stat) return res.status(404).json({ success: false, message: 'Stat not found' });
    res.status(200).json({ success: true, data: stat });
  } catch (err) { next(err); }
};
