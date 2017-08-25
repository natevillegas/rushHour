'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      day: {
        type: Sequelize.DATEONLY,
        notEmpty: true
      },
      time: {
        type: Sequelize.TIME,
        notEmpty: true
      },
      booked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
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
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Appointments');
  }
};