'use strict';
module.exports = (sequelize, DataTypes) => {
  const categorias = sequelize.define('categorias', {
    nombre: DataTypes.STRING,
    descripcion:DataTypes.STRING
  }, {});
  categorias.associate = function(models) {
    // associations can be defined here
    /*Categorias.belongsTo(models.Estudiantes,{
     
      
    })*/

    categorias.hasMany(models.producto,{

    });

    
  };
  return categorias;
};