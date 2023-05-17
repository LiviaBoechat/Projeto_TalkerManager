const express = require('express');
const { readFile } = require('../utils/fsUtils');

const talkerRouter = express.Router();

talkerRouter.get('/talker', async (req, res) => {
    console.log('cheguei aqui');
    try {
     const talkeList = await readFile();
     return res.status(200).json(talkeList);
    } catch (error) {
     res.status(500).send({ message: error.message });
    }
 });

 
 module.exports = { talkerRouter }