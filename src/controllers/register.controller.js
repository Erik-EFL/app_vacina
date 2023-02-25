const registerServices = require("../services/register.services");
const verifyRegister = require("../Validations/register.validate");

const registerController = {
  createLogin: async (req, res) => {
    const data = verifyRegister.loginCreate(req.body);

    await registerServices.createLogin(data)

    res.status(201).send({ message: "User created successfully" });
  }
};

module.exports = registerController;
