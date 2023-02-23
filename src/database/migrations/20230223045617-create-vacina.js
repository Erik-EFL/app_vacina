'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('vacina', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        foreignKey: true
      },
      info: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dose: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });

  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('users');

  }
};
