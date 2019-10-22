'use strict';
module.exports = (sequelize, DataTypes) => {
  const Facturas = sequelize.define('Facturas', {
    descripcion: DataTypes.STRING,
    estudianteid:DataTypes.INTEGER
  }, {});
  Facturas.associate = function(models) {
    // associations can be defined here
    Facturas.belongsTo(models.Estudiantes,{});
    Facturas.hasMany(models.detalle_facturas,{});
  };
  return Facturas;
};