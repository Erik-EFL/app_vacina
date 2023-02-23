'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {


    await queryInterface.bulkInsert('Users', [{
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '12345678',
      logradouro: 'Rua Manoel Dias',
      numberHome: 58,
      cep: 07155712,
    }], {
      timestemps: false
    });

  },

  async down(queryInterface, Sequelize) {


    await queryInterface.bulkDelete('People', null, {});

  }
};
