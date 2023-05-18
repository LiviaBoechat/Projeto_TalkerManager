const rateValidation2 = (req, res, next) => {
    const { talk: { rate } } = req.body;
    const rateIntoNumber = Number(rate);

    if (rateIntoNumber === 0) {
        return res.status(400).json({ 
            message: 'O campo "rate" deve ser um número inteiro entre 1 e 5',
        });
    }

    next();
};

module.exports = rateValidation2;