const { User } = require('../database/models');
const customError = require('../Middleware/customError');


const registerServices = {
  findUserByEmail: async (email) => {
    const user = await User.findOne({ where: { email } })

    if (user) throw new customError({
      status: 409,
      message:'User already registered'
    });

    return user;
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
