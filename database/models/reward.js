'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reward = sequelize.define('Reward', {
    title: DataTypes.TEXT,
    highlight: DataTypes.TEXT,
    description: DataTypes.TEXT,
    website: DataTypes.TEXT,
    imageUrl: DataTypes.TEXT,
    locationLink: DataTypes.TEXT,
    locationText: DataTypes.TEXT,
    redeemStart: DataTypes.DATE,
    redeemEnd: DataTypes.DATE,
    scheduleStart: DataTypes.DATE,
    scheduleEnd: DataTypes.DATE,
    code: DataTypes.STRING,
    codeRequired: DataTypes.BOOLEAN,
    isFlashSale: DataTypes.BOOLEAN,
    codeLeft: DataTypes.INTEGER,
    vendorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rewardTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {});
  Reward.associate = function(models) {
    // associations can be defined here
    Reward.belongsTo(models.Vendor, {
      foreignKey: 'vendorId',
      as: 'vendor'
    });

    Reward.belongsTo(models.RewardType, {
      foreignKey: 'rewardTypeId',
      as: 'reward_type'
    });

    Reward.hasMany(models.Redeem);
  };
  return Reward;
};