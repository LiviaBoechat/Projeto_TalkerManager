const ageValidation = (req, res, next) => {
  const { age } = req.body;
  // const ageIntoNumber = Number(age);

  if (!age) return res.status(400).json({ message: 'O campo "age" é obrigatório' });

  if (Number.isNaN(age) || !Number.isInteger(age) || age < 18) {
    return res.status(400).json({
      message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
    });
  }

  next();
};

module.exports = ageValidation;