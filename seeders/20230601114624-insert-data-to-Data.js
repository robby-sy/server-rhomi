'use strict';
let counter = 0;
const data = require('../dummy/dataFix3.json')
data.forEach(el =>{
  let date = new Date('2023-05-12 07:00')
  date.setHours(date.getHours()+counter)
  el.createdAt = new Date(date)
  el.updatedAt = new Date(date)
  delete el.waktu
  counter++
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Data',data)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Data')
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
