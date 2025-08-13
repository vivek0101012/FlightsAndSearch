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

  await queryInterface.bulkInsert('Flights',[
  // Delhi (IGI) to Bangalore (Kempegowda)
  {
    flightNumber: 'AI101',
    airplaneId: 1,  // A320
    departureAirportId: 4,  // Indira Gandhi International
    arrivalAirportId: 7,  // Kempegowda International
    departureTime: new Date('2025-09-15T08:00:00'),
    arrivalTime: new Date('2025-09-15T10:30:00'),
    price: 4500,
    boardingGate: 'G12',
    totalSeats: 180,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // Bangalore to Mangaluru
  {
    flightNumber: 'SG202',
    airplaneId: 2,  // B737
    departureAirportId: 7,  // Kempegowda
    arrivalAirportId: 2,  // Mangaluru International
    departureTime: new Date('2025-09-15T11:00:00'),
    arrivalTime: new Date('2025-09-15T12:15:00'),
    price: 3200,
    boardingGate: 'G5',
    totalSeats: 160,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // Mysore to Delhi
  {
    flightNumber: 'UK303',
    airplaneId: 3,  // E190
    departureAirportId: 3,  // Mysore
    arrivalAirportId: 4,  // Indira Gandhi International
    departureTime: new Date('2025-09-15T14:30:00'),
    arrivalTime: new Date('2025-09-15T17:00:00'),
    price: 3800,
    boardingGate: 'G8',
    totalSeats: 100,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  // Jindal Vijaynagar to Bangalore
  {
    flightNumber: 'JA404',
    airplaneId: 1,  // A320
    departureAirportId: 5,  // Jindal Vijaynagar
    arrivalAirportId: 7,  // Kempegowda
    departureTime: new Date('2025-09-15T18:00:00'),
    arrivalTime: new Date('2025-09-15T19:00:00'),
    price: 2800,
    boardingGate: 'G3',
    totalSeats: 180,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]
    
    
    
    ,{})

    

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
