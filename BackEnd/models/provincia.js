'use strict';
module.exports = (sequelize, DataTypes) => {
  const Provincia = sequelize.define('Provincia', {
    nombre: DataTypes.STRING,
    paiid: DataTypes.INTEGER
  }, {});
  Provincia.associate = function(models) {
    // associations can be defined here
    Provincia.belongsTo(models.Pais)
  };
  return Provincia;
};