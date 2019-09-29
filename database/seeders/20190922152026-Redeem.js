'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Redeems',
    [
      {
        userId: 1,
        rewardId: 1,
        redeemStartAt: "2019-09-22T23:33:23",
        redeemEndAt: "2019-09-23T23:33:23",
        rewardCode: "FIRSTCODE03124",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 1,
        rewardId: 2,
        redeemStartAt: "2019-09-22T23:33:23",
        redeemEndAt: "2019-09-23T23:33:23",
        rewardCode: "SECONDCODE03124",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ],
    {}
  ),
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Redeems", null, {})
  }
};
