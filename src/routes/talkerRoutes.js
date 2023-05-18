const express = require('express');

const { readTalkerList, readTalker, writeTalker } = require('../utils/fsUtils');

const ageValidation = require('../middlewares/ageValidation');
const nameValidaton = require('../middlewares/nameValidation');
const rateValidation = require('../middlewares/rateValidation');
const rateValidation2 = require('../middlewares/rateValidation');
const talkerValidation = require('../middlewares/talkerValidation');
const tokenValidation = require('../middlewares/tokenValidation');

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

  talkerRouter.post('/talker', 
  tokenValidation,
  ageValidation, 
  nameValidaton, 
  talkerValidation, 
  rateValidation,
  rateValidation2, async (req, res) => {
    try {
        const { name, age, talk } = req.body;
        // lembre que readTalkerList() já retorna .json parseado = objeto
        const talkerList = await readTalkerList();
        const newTalker = {
          id: talkerList[talkerList.length - 1].id + 1, 
          name, 
          age,
          talk,
        };
        await writeTalker(newTalker);
        return res.status(201).json(newTalker);
    } catch (error) {
    return res.status(409).send({ message: error.message });
    }    
  });
 
 module.exports = { talkerRouter };