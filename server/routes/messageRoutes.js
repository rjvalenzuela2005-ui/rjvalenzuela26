const express  = require('express');
const router   = express.Router();
const protect  = require('../middleware/auth');
const { body } = require('express-validator');
const { createMessage, getMessages } = require('../controllers/messageController');

const validate = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
];

router.post('/', validate, createMessage);
router.get('/', protect, getMessages);

module.exports = router;
