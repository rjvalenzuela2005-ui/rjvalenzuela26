const express = require('express');
const router  = express.Router();
const protect = require('../middleware/auth');
const { getSkills, createSkill, deleteSkill } = require('../controllers/skillController');

router.route('/').get(getSkills).post(protect, createSkill);
router.route('/:id').delete(protect, deleteSkill);

module.exports = router;
