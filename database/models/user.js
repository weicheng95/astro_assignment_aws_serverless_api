'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    IDNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IDTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accountNumber: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  }, {});
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Redeem);

    User.hasOne(models.IDType);
  };
  return User;
};