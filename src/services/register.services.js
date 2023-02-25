const { User } = require('../database/models');
const customError = require('../Middleware/customError');


const registerServices = {
  findUserByEmail: async (email) => {
    const findUser = await User.findOne({
      where: {
        email,
      }
    })

    if (findUser) {
      throw new customError('Email already registered', 'BadRequest');
    }

    return findUser;
  },

  createLogin: async (data) => {
    const { name, email, password } = data;

    await registerServices.findUserByEmail(email);

    const newUser = await User.create({
      name,
      email,
      password,
    })

    return newUser;
  },
}

module.exports = registerServices;
