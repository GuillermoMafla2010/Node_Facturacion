

const cors=require('cors')
const express=require('express');
const app=express();
const bodyparser=require('body-parser')
const fileUpload=require('express-fileupload')

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use(cors())
app.use(fileUpload())





module.exports=app