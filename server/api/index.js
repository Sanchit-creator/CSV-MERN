const express = require('express');
const router = express.Router();


router.use('/users', require('./user_routes'));
router.use('/students', require('./student_routes'));

module.exports = router;





