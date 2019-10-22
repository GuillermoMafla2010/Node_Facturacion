'use strict';
module.exports = (sequelize, DataTypes) => {
  const Facturas = sequelize.define('Facturas', {
    nombre: DataTypes.STRING,
    clienteid: DataTypes.INTEGER
  }, {});
  Facturas.associate = function(models) {
    // associations can be defined here
    Facturas.belongsTo(models.Clientes)
    Facturas.hasMany(models.DetalleFacturas)
   
  };
  return Facturas;
};