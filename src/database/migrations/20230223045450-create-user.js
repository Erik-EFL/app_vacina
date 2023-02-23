'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('Users', {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      password: Sequelize.STRING,
      street: Sequelize.STRING,
      houseNumber: Sequelize.INTEGER,
      zipCode: Sequelize.INTEGER,
    },
    {
      timestamps: false,
    }
    );
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.dropTable('Users');

  }
};
