'use strict';
module.exports = (sequelize, DataTypes) => {
  const Productos = sequelize.define('Productos', {
    nombre: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    categoriaid:DataTypes.INTEGER,
    foto:DataTypes.STRING
  }, {});
  Productos.associate = function(models) {
    // associations can be defined here

    Productos.hasMany(models.DetalleFacturas)
    Productos.belongsTo(models.Categorias)

  };
  return Productos;
};