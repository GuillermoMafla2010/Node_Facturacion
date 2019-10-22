'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categorias = sequelize.define('Categorias', {
    nombre: DataTypes.STRING,
    descripcion:DataTypes.STRING
  }, {});
  Categorias.associate = function(models) {
    // associations can be defined here
    /*Categorias.belongsTo(models.Estudiantes,{
     
      
    })*/

    Categorias.hasMany(models.Producto,{

    });

    
  };
  return Categorias;
};