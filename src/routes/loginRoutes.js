const express = require('express');
const generateToken = require('../utils/generateToken');

const emailValidation = require('../middlewares/emailValidation');
const passwordValidation = require('../middlewares/passwordValidation');

const loginRouter = express.Router();

loginRouter.post('/login', emailValidation, passwordValidation, async (req, res) => {
    // const { email, password }= req.body;
    const token = generateToken();
    res.status(200).json({ token });  
});

  module.exports = { loginRouter };