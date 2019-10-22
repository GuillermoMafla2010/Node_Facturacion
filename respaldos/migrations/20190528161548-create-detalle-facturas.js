'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('detalle_facturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      producto_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'producto',
          key:'id'
        }
      },

      facturas_id:{
        type:Sequelize.INTEGER,
        references:{
          model:'Facturas',
          key:'id'
        }
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('detalle_facturas');
  }
};