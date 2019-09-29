'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        IDNumber: "951011093214",
        IDTypeId: 1,
        accountNumber: 7654345643,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {}
  ),
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {})
  }
};
