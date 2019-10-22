'use strict';
module.exports = (sequelize, DataTypes) => {
  const Producto = sequelize.define('Producto', {
    nombre: DataTypes.STRING,
    precio:DataTypes.FLOAT,
    categoriaid:DataTypes.INTEGER
  }, {});
  Producto.associate = function(models) {
    // associations can be defined here
    Producto.belongsTo(models.Categorias,{});
    Producto.hasMany(models.detalle_facturas,{});
  };
  return Producto;
};