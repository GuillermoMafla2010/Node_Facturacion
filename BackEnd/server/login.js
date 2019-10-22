const cors=require('cors')
const express=require('express');
const bcrypt=require('bcrypt');
const server=require('./server')
const models=require('../models/index')
const jwt=require('jsonwebtoken')
const fs=require('fs')
const csv = require('csv-parser');
const path=require('path')



//Regresa a todos los usuarios que pueden loguarse en el sistema
server.get("/vertodos",(req,res)=>{
    models.Usuarios.findAll({include:[{all:true,nested:true}]}).then(usuarios=>{
        res.json({usuarios})
    })
    
})

//Crea un nuevo usuario
server.post("/crearusuario",(req,res)=>{
    let body=req.body

    models.Usuarios.create({
        nombre:body.nombre,
        password:bcrypt.hashSync(body.password,10)
    }).then(usuario=>{
        res.json({usuario:usuario.nombre+" Creado con exito"})
    })
})

//Sirve para comparar usuario y contraseña , si marca un error al autenticar en la base de datos
//cambiar en la tabla usuario_roles el valor rolid por roleid
server.post("/ejemplo",(req,res)=>{
    let body=req.body

    models.Usuarios.findOne({
        include:[{all:true,nested:true}] ,where:[{nombre:body.nombre}]
    }).then(password=>{
        if(!bcrypt.compareSync(body.password,password.password)){
            res.json("Contraseña incorrecta")
        }else{

            let token=jwt.sign({
                usuario:password.nombre,
                rol:password.Usuarios_Roles
                },
                'clavesecreta',
                {expiresIn:'1h'}
            )
            res.json({
                ok:true,
                token:token,
                
            })
        }
    }).catch(error=>{
        res.json({
            mensaje:"Usuario o contraseña incorrectos"
        })
    })
})


//Lee un archivo csv externo para la creacion de un nuevo usuario
server.post("/csv",(req,res,next)=>{
    let datos=false
    let body=req.body
    let archivo=req.files.archivo
    let directorio=path.resolve(__dirname,`../uploadsexcel/${archivo.name}`)
    archivo.mv(directorio,(err,foto)=>{
        


        fs.createReadStream(directorio).pipe(csv()).on('data', function(data){
    try {
        console.log("Name is: "+data.NAME);
        console.log("Age is: "+data.PASSWORD);

        //perform the operation
        models.Usuarios.create({nombre:data.NAME,password:bcrypt.hashSync(data.PASSWORD,10)}).then(usuario=>{
            

            
            res.send({
                mensaje:`Usuario ${usuario.nombre} guardado correctamente`
            })

            return next()

            res.removeHeader(usuario)
        })
         

    }

        catch(err) {
        //error handler
        res.json(err)
    }
})
.on('end',function(){
    //some final operation
    
});  




        


    })
    


    



    

    
})






module.exports=server