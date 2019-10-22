'use strict';
module.exports = (sequelize, DataTypes) => {
  const Persona = sequelize.define('Persona', {
    nombre: DataTypes.STRING,
    paiid: DataTypes.INTEGER
  }, {});
  Persona.associate = function(models) {
    // associations can be defined here
    Persona.belongsTo(models.Pais)
  };
  return Persona;
};