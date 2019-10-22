'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fechas = sequelize.define('Fechas', {
    nombre: DataTypes.STRING
  }, {});
  Fechas.associate = function(models) {
    // associations can be defined here
  };
  return Fechas;
};