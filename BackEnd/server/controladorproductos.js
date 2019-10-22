const express=require('express');
const server=require('./server');
const path=require('path')
const fileUpload=require("express-fileupload")
const models=require('../models/index')
const fs=require('fs')
const app=express()
const uuid=require('uuid/v4')
//server.use(fileUpload())



// Muestra todos los productos registrados
server.get("/productos",(req,res)=>{
    models.Productos.findAll({
        include:[{all:true,nested:true}]
    }).then(producto=>{
        res.json({
            producto:producto
        })})
})

//Muestra cierto producto por su idenrtificador
server.get("/producto/:id",(req,res)=>{
    models.Productos.findAll({where:{id:req.params.id}}).then(producto=>{res.json({producto:producto})})
})


//Crea un nuevo producto en la base de datos

server.post("/productos",(req,res)=>{
    let body=req.body;
   
    let archivo=req.files.archivo
    let pathDirectorio=path.resolve(__dirname,`../uploads`)
    let nombreunico=`${uuid()}_${archivo.name}`
   
    archivo.mv(`${pathDirectorio}/${nombreunico}`,(err,foto)=>{
        if(err){
            console.log({
                mensaje:"No se pudo subir la foto"
            })
        }
        
        console.log({
            mensaje:"Foto subida correctamente"
        })
    })

    
    models.Productos.create({
        nombre:body.nombre,
        precio:body.precio,
        categoriaid:body.categoriaid,
        foto:nombreunico
        
    }).then(exito=>{res.json({detalle:exito})})
})


//Metodo para mostrar imagen
server.get("/verfoto/:id",(req,res)=>{
    let id=req.params.id
    models.Productos.findOne({
        where:{id:id}
    }).then(foto=>{
        let pathImagen=path.resolve(__dirname,`../uploads/${foto.foto}`)
        if(fs.existsSync(pathImagen)){
            res.sendFile(pathImagen)
        }
    })
   
    
    

    
   
   
})


// Busca un producto segun su nombre

server.get("/productos/:busqueda",(req,res)=>{
    let termino=req.params.busqueda
    models.Productos.findAll({where:{nombre:{[Op.startsWith]:termino}}}).then(query=>{res.json({busqueda:query})})
    

})

//Actualiza a un producto

server.put("/productos/:id",(req,res)=>{
    
    let body=req.body;
    let id=req.params.id
    
    models.Productos.update({
        nombre:body.nombre,
        precio:body.precio,
        categoriaid:body.categoriaid
    },{
        where:{
            id:id
        }
    }).then(producto=>{
        res.json({
            mensaje:`Se actualizo correctamente el producto`
        })
    })
})



//Elimina un producto


server.delete("/productos/:id",(req,res)=>{
    models.Productos.destroy({
        where:{
            id:req.params.id
        }
    }).then(producto=>{
        res.json({
            mensaje:"Se elimino el producto correctamente"
        })
    })
})


module.exports=server