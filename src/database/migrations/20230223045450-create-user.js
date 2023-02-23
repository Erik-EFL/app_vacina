'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('users', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
      },
      logradouro: {
        type: Sequelize.STRING,
      },
      numberHome: {
        type: Sequelize.INTEGER,
      },
      cep: {
        type: Sequelize.INTEGER,
      }
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users');

  }
};
