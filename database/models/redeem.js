'use strict';
module.exports = (sequelize, DataTypes) => {
  const Redeem = sequelize.define('Redeem', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rewardId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    redeemStartAt: DataTypes.DATE,
    redeemEndAt: DataTypes.DATE,
    rewardCode: DataTypes.STRING
  }, {});
  Redeem.associate = function (models) {
    // associations can be defined here
    // associations can be defined here
    Redeem.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user'
    });

    Redeem.belongsTo(models.Reward, {
      foreignKey: 'rewardId',
      as: 'reward'
    });
  };
  return Redeem;
};