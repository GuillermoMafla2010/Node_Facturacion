const express=require('express');
const server=require('./server')
const models=require('../models/index')

//Busca Todas las Categorias
server.get("/categorias",(req,res)=>{
    models.Categorias.findAll({include:[{all:true,nested:true}] }).then(users=>{res.json({categorias:users})})
})

//Busca una sola categoria
server.get("/categorias/:id",(req,res)=>{
    models.Categorias.findOne({where:{id:req.params.id},include:[{all:true,nested:true}]}).then(categoria=>{res.json({categoria})})
})

//Crea una nueva Categoria

server.post("/categorias",(req,res)=>{
    
    let body=req.body
    models.Categorias.create({
        nombre:body.nombre
    }).then(cat=>{
        res.json({categoria:cat})
    })
})


//Actualiza una categoria

server.put("/categorias/:id",(req,res)=>{
    let body=req.body
    let id=req.params.id
    models.Categorias.update({
        nombre:body.nombre
    },{where:{
        id:id
    }}).then(categoria=>{
        res.json({
            mensaje:`Se actualizo con exito , el nuevo nombre de la categoria es ${categoria.nombre}`
        })
    })
})


//Elimina una categoria

server.delete("/categorias/:id",(req,res)=>{
    models.Categorias.destroy({where:{id:req.params.id}}).then(
        cat=>{
            res.json({
                mensaje:`Se elimino con exito la categoria`
            })
        }
    )
})

module.exports=server