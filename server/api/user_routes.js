const userController = require('../controllers/user_controllers');
const express = require('express');
const router = express.Router();

router.post('/register-user', userController.signUp);


module.exports = router;