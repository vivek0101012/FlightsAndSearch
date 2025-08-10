'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */


    await queryInterface.bulkInsert("Airplanes",
      [
         {
        modelNumber: "A320",
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "B737",
        capacity: 160,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: "E190",
        capacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ],{
        ignoreDuplicates: true 
      })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
