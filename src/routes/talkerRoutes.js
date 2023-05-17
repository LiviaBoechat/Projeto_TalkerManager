const express = require('express');
const { readTalkerList, readTalker } = require('../utils/fsUtils');

const talkerRouter = express.Router();

talkerRouter.get('/talker', async (req, res) => {
    console.log('cheguei aqui');
    try {
     const talkeList = await readTalkerList();
     return res.status(200).json(talkeList);
    } catch (error) {
     res.status(500).send({ message: error.message });
    }
 });

 talkerRouter.get('/talker/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const talker = await readTalker(id);
        return res.status(200).send(talker);
    } catch (error) {
        return res.status(404).send({ message: error.message });
    }
  });
 
 module.exports = { talkerRouter }