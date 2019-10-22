const Sequalize=require('sequelize');
const server=require('./server')
const models=require('../models/index')
const path=require('path')
const fs=require('fs')





server.post('/factura/:id',(req,res)=>{

    let id = req.params.id
    let body=req.body


    models.Facturas.create({
        descripcion:body.descripcion , estudianteid:id
    }).then(factura=>{


        res.json({
            ok:true,
            factura
        })
    })
})









module.exports=server