'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios_Roles = sequelize.define('Usuarios_Roles', {
    nombre: DataTypes.STRING,
    roleid:DataTypes.INTEGER,
    usuarioid:DataTypes.INTEGER
  }, {});
  Usuarios_Roles.associate = function(models) {
    // associations can be defined here
    Usuarios_Roles.belongsTo(models.Usuarios)
    Usuarios_Roles.belongsTo(models.Roles)
  };
  return Usuarios_Roles;
};