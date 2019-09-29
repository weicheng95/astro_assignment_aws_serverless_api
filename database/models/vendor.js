'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendor = sequelize.define('Vendor', {
    email: DataTypes.STRING,
    logo: DataTypes.TEXT,
    name: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Vendor.associate = function(models) {
    // associations can be defined here
    Vendor.hasMany(models.Reward, {
      foreignKey: 'vendorId',
      as: 'rewards',
      onDelete: 'CASCADE',
    });
  };
  return Vendor;
};