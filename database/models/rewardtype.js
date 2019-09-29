'use strict';
module.exports = (sequelize, DataTypes) => {
  const RewardType = sequelize.define('RewardType', {
    name: DataTypes.STRING
  }, {});
  RewardType.associate = function(models) {
    // associations can be defined here
  };
  return RewardType;
};