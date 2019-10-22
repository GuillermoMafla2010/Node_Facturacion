'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nombre: DataTypes.STRING,
    password:DataTypes.STRING
  }, {});
  Usuarios.associate = function(models) {
    // associations can be defined here
    Usuarios.hasMany(models.Usuarios_Roles)
  };
  return Usuarios;
};