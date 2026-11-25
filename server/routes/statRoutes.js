const express = require('express');
const router  = express.Router();
const protect = require('../middleware/auth');
const { getStats, createStat, updateStat } = require('../controllers/statController');

router.route('/').get(getStats).post(protect, createStat);
router.route('/:id').put(protect, updateStat);

module.exports = router;
