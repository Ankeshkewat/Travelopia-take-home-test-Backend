
const express=require('express');
const cors=require('cors')
require('dotenv').config()

const {connection}=require('./config/db')

const app=express();

app.use(cors());
app.use(express.json());


const port=process.env.port || 8080

app.listen(port,async()=>{
    try{
       await connection
       console.log(`Connected to the database port no ${port}`)
    }
    catch(err){
        console.error(err);
    }
})