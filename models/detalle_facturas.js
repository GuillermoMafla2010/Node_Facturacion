'use strict';
module.exports = (sequelize, DataTypes) => {
  const detalle_facturas = sequelize.define('detalle_facturas', {
    cantidad: DataTypes.INTEGER,
    producto_id:DataTypes.INTEGER,
    facturas_id:DataTypes.INTEGER
  }, {});
  detalle_facturas.associate = function(models) {
    // associations can be defined here
    detalle_facturas.belongsTo(models.Facturas,{});
    detalle_facturas.belongsTo(models.Producto,{});


  };
  return detalle_facturas;
};