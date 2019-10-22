'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Facturas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      estudianteid:{
        type:Sequelize.INTEGER,
        references:{
          model:'Estudiantes',
          key:'id'
      }
      }

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Facturas');
  }
};