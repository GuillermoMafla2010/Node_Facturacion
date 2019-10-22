const {verificatoken}=require('../middlewares/autenticacion')
const server=require('./server')
const models=require('../models/index')
const path=require('path')
const fs=require('fs')
const Sequelize=require('sequelize')
const Op = Sequelize.Op

  

const stripe = require('stripe')('sk_test_wVvqVwCknXJ06gEJ46DYBJem00WsZxHsNC');



server.post("/pagos",(req,res)=>{

let body=req.body
console.log(body)
     const customer =  stripe.customers.create({
        email: body.email,
        source:body.id
      }).then(exito=>{res.json({mensaje:"Usuario creado", exito})}).catch(error=>res.json({error}));

     



      stripe.charges.create({
          amount:'15000',
          currency:'usd',
          customer:"cus_FCbdTTE1rkVCnH",
          description:'Pago Enero'
      }).catch(error=>res.json(error)) 

})

//Regresa todos los usuarios

server.get("/usuarios",verificatoken,(req,res)=>{
    models.Usuarios.findAll().then(users=>{res.json({usuarios:users})
})

    })






//Regresa una categoria con un identificador
server.get("/categorias/:id",(req,res)=>{
    let id=req.params.id
    models.Categorias.findAll({include:[{all:true,nested:true}] ,where:{id:id}}).then(users=>{res.json({categorias:users})})
})

//Devuelve a todas las personas
server.get("/personas",verificatoken,(req,res)=>{
    //Personas.findAll().then(users=>{res.json({verga:users})})
    models.Clientes.findAll({include:[{all:true,nested:true}] }).then(users=>{res.json({vergas:users})})
})


//Postea a las personas
server.post("/personas",(req,res,next)=>{
    let body=req.body;
    let guardacliente=models.Clientes.create({
        nombre:body.nombre
    }).then(resultado=>{res.json({usuario:resultado})})

    
})

server.put("/personas/:id",(req,res)=>{
    let editacliente=models.Clientes.update({
        nombre:req.body.nombre
    },{where:{id:req.params.id}}).then((edita)=>{res.json({mensaje:"Usuario Editado"})})
})


server.delete("/personas/:id",(req,res)=>{
    let id=req.params.id
    models.Clientes.destroy({where:{id:id}}).then((resultado)=>res.json({mensaje:"Usuario Borrado"})).catch(error=>res.json(error))
})

server.get("/personas/:id",(req,res)=>{
    let id=req.params.id
    models.Clientes.findAll({where:{id:id},include:[{all:true,nested:true}] }).then(users=>{res.json({vergas:users})})
})

server.get("/facturasclientes",(req,res)=>{
    models.Facturas.findAll({include:[{all:true,nested:true}]}).then(facturas=>res.json(facturas))
})


server.get("/facturasclientes/:id",(req,res)=>{
    let id= req.params.id;
    models.Facturas.findOne({where:{id:id},include:[{all:true,nested:true}]}).then(factura=>res.json({factura}))
})

server.post("/factura",(req,res)=>{
    let body=req.body;
   // let id=req.params.id
    let guardafactura=models.Facturas.create({
        nombre:body.nombre,
        clienteid:body.clienteid
    }).then(resultado=>{res.json({factura:resultado})})
})


server.put("/factura/:id",(req,res)=>{
    let id=req.params.id;
    models.Facturas.update({
        nombre:req.body.nombre,
        clienteid:1,

    },{where:{id:id}}).then(exito=>res.json({mensaje:"Factura Actualizada"}))
    
})


server.delete("/factura/:id",(req,res)=>{
    let id=req.params.id;
    models.Facturas.destroy({
        where:{id:id}
    }).then(exito=>res.json({mensaje:"Factura Borrada"}))
})


server.post("/detallefactura",(req,res)=>{
    
    let body=req.body
    models.DetalleFacturas.create({
        nombre:body.nombre,
        facturaid:body.facturaid,
        productoid:body.productoid,
        cantidad:body.cantidad
    }).then(exito=>{res.json({detalle:exito})})
})



server.get('/detalle',(req,res)=>{
    models.DetalleFactura.findAll({include:[{model:models.Productos}]}).then(detalle=>{
        res.json({
            detalle:detalle
        })
    })
})



server.get('/estudiante',(req,res)=>{

    models.Estudiantes.findAll({include:[{model:models.Facturas}]},'nombre').then(users => {
        //console.log("All users:", JSON.stringify(users, null, 4));
        res.json({
            estudiante:users
        })
      });
})


server.get("/categorias",(req,res)=>{
    models.Categorias.findAll({include:[{model:models.Productos}]}).then(categorias=>{
        res.json({
            categorias:categorias
        })
    })
})




server.get('/factura',(req,res)=>{

    models.Facturas.findAll({
        include:[{model:models.Estudiantes},{model:models.DetalleFactura}]
    }).then(users => {
        //console.log("All users:", JSON.stringify(users, null, 4));
        res.json({
            facturas:users
        })
      });
})



server.get('/estudiante/:id',(req,res)=>{

    let id=req.params.id
    console.log(id)
    
    models.Estudiantes.findAll({where:{id:id}}).then(users => {
        //console.log("All users:", JSON.stringify(users, null, 4));
       
       

        res.json({
            ok:'true',
            estudiante:users
        })

        
      })
})


server.post('/estudiante',(req,res)=>{

    let body=req.body

    

    models.Estudiantes.create({ nombre: body.nombre, edades: body.edades }).then(crear => {
        //console.log("Jane's auto-generated ID:", jane.id);

        
        
        res.json({
            ok:true,
            mensaje:crear 
        })
      });


    
})


server.put('/foto/:id',(req,res)=>{
    let id =req.params.id

    let pathDirectorio=path.resolve(__dirname,`../uploads`)

    

    let archivo=req.files.archivo
    let nombrearchivo=req.files.archivo.name

    archivo.mv(`${pathDirectorio}/${nombrearchivo}`,(err,foto)=>{
        if(err){
            console.log("Error en la subida")
        }

        console.log("Subida de imagen correcta")

        models.Estudiantes.update({foto:nombrearchivo},{where:{id:id}}).then(()=>{res.json("Actualizado")})


})
})



server.get('/imagen/:img',(req,res)=>{
    let img =req.params.img
    let pathImagen=path.resolve(__dirname,`../uploads/${img}`)
    let noexiste=path.resolve(__dirname,`./../assets/no-image.jpg`)

    if(fs.existsSync(pathImagen)){
        res.sendFile(pathImagen)
    }else{
        res.sendFile(noexiste)
    }
})




server.put('/estudiante/:id',(req,res)=>{

    let id= req.params.id;
    let body=req.body


    models.Estudiantes.update( body  , {where:{id:id}}).then(()=>res.json("Actualizado")).catch(()=>console.log("Se produjo un error al actualizar"))
    console.log(body)
})



server.delete('/estudiante/:id',(req,res)=>{

    let id=req.params.id;

    models.Estudiantes.destroy({where:{id:id}}).then(usuario=>{
        res.json({
            mensaje:"Eliminado"
        })
        })



})








module.exports=server