const express=require('express');
const bodyParser = require('body-parser');
var   cors = require('cors')
const routes=require('./Routes/auth')

const port =4000;

// app instance from express
const app=express();
// for get data from other server 
app.use(cors())
//for pass data in form and receive data in request object 
app.use(bodyParser.json());

app.use('/blogs',routes)

//listening on a port 
app.listen(port,(req,res)=>{
    console.log("load backend server successfully",port);
})