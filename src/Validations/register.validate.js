const joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const customError = require('../Middleware/customError');
const joiPassword = joi.extend(joiPasswordExtendCore);


const verifyRegister = {
  loginCreate: (body) => {
    const schema = joi.object({
      name: joi.string().min(9).required(),
      email: joi.string().email().required(),
      password: joiPassword.string()
              .min(8)
              .minOfSpecialCharacters(1)
              .minOfLowercase(1)
              .minOfUppercase(1)
              .minOfNumeric(1)
              .noWhiteSpaces()
              .required(),
    })

    const { error, value } = schema.validate(body);

    if (error) throw new customError(error.details[0].message, 'invalidData');

    return value;
  },
}

module.exports = verifyRegister;
