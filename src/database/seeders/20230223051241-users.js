/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '12345678',
      street: 'Rua Manoel Dias',
      houseNumber: 58,
      zipCode: 07155712,
    }], {
      timestamps: false
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
