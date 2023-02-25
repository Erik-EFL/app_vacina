const joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const joiPassword = joi.extend(joiPasswordExtendCore);

const verifyRegister = {
  loginCreate: (body) => {
    const schema = joi.object({
      name: joi.string().min(9).required(),
      email: joi.string().email().required(),
      password: joiPassword.string()
              .min(8)
              .minOfSpecialCharacters(2)
              .minOfLowercase(2)
              .minOfUppercase(2)
              .minOfNumeric(2)
              .noWhiteSpaces()
              .required(),
    })

    const { error, value } = schema.validate(body);

    if (error) throw new Error(error.details[0].message);

    return value;
  },
}

module.exports = verifyRegister;
