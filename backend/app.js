require('dotenv').config()
const express=require('express');
const bodyParser = require('body-parser');
var   cors = require('cors');
const mongoose =require("mongoose");
const routes=require('./Routes/auth')

const port =4000;

// app instance from express
const app=express();


// database connection
const dbURI = process.env.MONGO_DB_URI;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
  .then((result) => app.listen(port,(req,res)=>{ console.log('server is running')}))
  .catch((err) => console.log(err));



// for get data from other server 
app.use(cors())
//for pass data in form and receive data in request object 
app.use(bodyParser.json());

app.use('/blogs',routes)
