const userController = require('../controllers/user_controllers');
const express = require('express');
const router = express.Router();

router.post('/register-user', userController.signUp);
router.post('/login', userController.signin);


module.exports = router;