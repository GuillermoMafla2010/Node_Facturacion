const server=require('./server/server')
const rutas=require('./server/controlador')
const facturas=require('./server/controladorfacturas')
const login=require('./server/login')
const categorias=require('./server/controladorcategorias')
const productoss=require('./server/controladorproductos')
const foto=require('./foto')


server.listen(3001,()=>{
    console.log("Servidor inicializado")
})