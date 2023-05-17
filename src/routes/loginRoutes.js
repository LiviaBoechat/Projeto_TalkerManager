const express = require('express');
const generateToken = require('../utils/generateToken');

const loginRouter = express.Router();

loginRouter.post('/login', async (req, res) => {
    const { email, password }= req.body;
    const token = generateToken();
    res.status(200).json({ token });
    
  });

  module.exports = { loginRouter }