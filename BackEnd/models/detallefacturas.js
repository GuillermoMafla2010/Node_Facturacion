'use strict';
module.exports = (sequelize, DataTypes) => {
  const DetalleFacturas = sequelize.define('DetalleFacturas', {
   
    facturaid: DataTypes.INTEGER,
    productoid: DataTypes.INTEGER,
    cantidad:DataTypes.INTEGER
  }, {});
  DetalleFacturas.associate = function(models) {
    // associations can be defined here
    DetalleFacturas.belongsTo(models.Productos);
    DetalleFacturas.belongsTo(models.Facturas);
  };
  return DetalleFacturas;
};