'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    nombre: DataTypes.STRING
  }, {});
  Clientes.associate = function(models) {
    // associations can be defined here
    Clientes.hasMany(models.Facturas)
  };
  return Clientes;
};