'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'RewardTypes',
    [
      {
        name: "ONLINE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "PARTICIPATINGSTORE",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  ),

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete("RewardTypes", null, {});
  }
};
