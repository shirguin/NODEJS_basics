const joi = require("joi");

const idScheme = joi.object({
  id: joi.number().required(),
});

const userScheme = joi.object({
  firstName: joi.string().min(1).required(),
  lastName: joi.string().min(1).required(),
  city: joi.string().min(1),
  age: joi.number().max(150).required(),
});

module.exports={idScheme, userScheme};
