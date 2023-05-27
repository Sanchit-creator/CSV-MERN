const studentController = require('../controllers/student_controllers')
const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware')
const interviewController = require('../controllers/interview_controllers')


router.post('/register-student', protect, studentController.create);
router.post('/interview', protect, interviewController.create);
router.post('/destroy/:id', protect ,interviewController.destroy);
router.get('/fetch', protect, studentController.fetch);
router.get('/interview-fetch', protect, interviewController.fetch);
// router.patch('/interview-update', protect, interviewController.update);

module.exports = router;

