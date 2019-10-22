'use strict';
module.exports = function(sequelize, DataTypes)  {
  const Estudiantes = sequelize.define('Estudiantes', {
    nombre: DataTypes.STRING,
    edades: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {});
  Estudiantes.associate = function(models) {
    // associations can be defined here

    Estudiantes.hasMany(models.Facturas,{
      
      
    })
  };
  return Estudiantes;
};

