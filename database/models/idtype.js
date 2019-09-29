'use strict';
module.exports = (sequelize, DataTypes) => {
  const IDType = sequelize.define('IDType', {
    name: DataTypes.STRING
  }, {});
  IDType.associate = function(models) {
    // associations can be defined here
  };
  return IDType;
};