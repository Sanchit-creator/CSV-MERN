const User = require('../model/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.signUp = async (req, res) => {
    try {
        const exist = await User.findOne({email: req.body.email})
        if (exist) {
            return res.status(401).json({ message: 'User already registered'});
        }
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({message: user});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports.signin = async (req, res) => {
    try {
        let token;
        const email = req.body.email;
        const password = req.body.password;
        let user = await User.findOne({email: email});
        if (user) {
            let isMatch = await bcrypt.compare(password, user.password);
            token = await user.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            });
            if (isMatch) {
                return res.status(200).json({ data: user })
            }else{
                return res.status(401).json('Invalid Login')
            }
        }
    } catch (error) {
        res.status(500).json('Error ', error.message);
    }
}

module.exports.home = async (req, res) => {
    
}





