'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'IDTypes',
    [
      {
        name: "MyKad Number",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Old NRIC Number",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Passport Number",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Army ID Number",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Police ID Number",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Navy ID Number",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  ),
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("IDTypes", null, {})
  }
};
