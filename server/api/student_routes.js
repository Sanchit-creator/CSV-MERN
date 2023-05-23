const studentController = require('../controllers/student_controllers')
const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware')

router.post('/register-student', protect, studentController.create);

module.exports = router;

