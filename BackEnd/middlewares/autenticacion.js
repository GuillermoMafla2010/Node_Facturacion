const jwt=require('jsonwebtoken')
let verificatoken=(req,res,next)=>{
    
    let token=req.get("token")
    jwt.verify(token,'clavesecreta',(err,decoded)=>{
        if(err){
            return res.status(401).json({
                err:{
                    mensaje:"No autorizado"
                }
            })
        }

    req.usuario=decoded.usuario
    next()
    //console.log(req.usuario)
    }
    
    )

   
}


let verificarol=(req,res,next)=>{
    let usuario=req.usuario
    
}



module.exports={verificatoken}