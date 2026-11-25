const express = require('express');
const router  = express.Router();
const protect = require('../middleware/auth');
const { getTestimonials, createTestimonial, deleteTestimonial } = require('../controllers/testimonialController');

router.route('/').get(getTestimonials).post(protect, createTestimonial);
router.route('/:id').delete(protect, deleteTestimonial);

module.exports = router;
