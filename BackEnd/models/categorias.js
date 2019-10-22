'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categorias = sequelize.define('Categorias', {
    nombre: DataTypes.STRING
  }, {});
  Categorias.associate = function(models) {
    // associations can be defined here
    Categorias.hasMany(models.Productos)
  };
  return Categorias;
};