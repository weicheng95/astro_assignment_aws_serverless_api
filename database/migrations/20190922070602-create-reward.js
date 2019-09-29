'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rewards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.TEXT
      },
      highlight: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.TEXT
      },
      website: {
        type: Sequelize.TEXT
      },
      imageUrl: {
        type: Sequelize.TEXT
      },
      locationLink: {
        type: Sequelize.TEXT
      },
      locationText: {
        type: Sequelize.TEXT
      },
      redeemStart: {
        type: Sequelize.DATE
      },
      redeemEnd: {
        type: Sequelize.DATE
      },
      scheduleStart: {
        type: Sequelize.DATE
      },
      scheduleEnd: {
        type: Sequelize.DATE
      },
      code: {
        type: Sequelize.STRING
      },
      codeRequired: {
        type: Sequelize.BOOLEAN
      },
      isFlashSale: {
        type: Sequelize.BOOLEAN
      },
      vendorId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Vendors', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      rewardTypeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'RewardTypes', 
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Rewards');
  }
};