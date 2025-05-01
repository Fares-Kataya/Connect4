const joi = require('joi');

const validateBody = (Schema) => (req, res, next) => {
    console.log(req.body)
    const { error, value } = Schema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });
    req.body = value;
    next();
}

module.exports = { validateBody };