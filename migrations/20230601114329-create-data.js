'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tegangan: {
        type: Sequelize.REAL
      },
      arus: {
        type: Sequelize.REAL
      },
      suhu: {
        type: Sequelize.REAL
      },
      kelembapan: {
        type: Sequelize.REAL
      },
      intensitas: {
        type: Sequelize.REAL
      },
      daya: {
        type: Sequelize.REAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Data');
  }
};