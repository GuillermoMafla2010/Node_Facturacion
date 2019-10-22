'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DetalleFacturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      facturaid: {
        type: Sequelize.INTEGER,
        references:{
          model:"Facturas",
          key:"id"
        }
      },
      productoid: {
        type: Sequelize.INTEGER,
        references:{
          model:"Productos",
          key:"id"
        }
      },

      cantidad:{
        type:Sequelize.INTEGER
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
    return queryInterface.dropTable('DetalleFacturas');
  }
};