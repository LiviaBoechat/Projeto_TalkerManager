const dataValidation = require('../utils/validateData');

const talkerValidation = (req, res, next) => {
    const { talk } = req.body;
    const { talk: { watchedAt, rate  } } = req.body;

    if (!talk) {
      return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
    if (!watchedAt) {
      return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
    }
    if (!dataValidation(watchedAt)) {
        return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
        }
    next();
};

module.exports = talkerValidation;