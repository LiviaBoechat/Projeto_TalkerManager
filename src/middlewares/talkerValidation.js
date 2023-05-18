const dataValidation = require('../utils/dataValidation');

const talkerValidation = (req, res, next) => {
    const { talk } = req.body;
    const { talk: { watchedAt } } = req.body;

    if (!talk) {
      return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
    if (!watchedAt) {
      return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    if (!dataValidation(watchedAt)) {
        return res.status(400).json({ 
          message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"', 
        });
    }
    next();
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
};

module.exports = talkerValidation;