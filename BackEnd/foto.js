const express=require('express')
const fileUpload=require('express-fileupload')
const app = express()

app.use(fileUpload())

app.post('/upload',(req,res) => {
    res.json({mensaje:"Hola"})
})

module.exports=app