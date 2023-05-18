const ageValidation = (req, res, next) => {
    const { age } = req.body;
    const ageIntoNumber = Number(age);
  
    if (!ageIntoNumber) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório e deve ser um número' });
    }
  
    if (typeof ageIntoNumber !== 'string' 
    || !Number.isInteger(ageIntoNumber) 
    || ageIntoNumber < 18) {
      return res.status(400).json({
        message: 'O campo "age" deve ser um número inteiro igual ou maior que 18',
      });
    }
    next();
  };
  
  module.exports = ageValidation;