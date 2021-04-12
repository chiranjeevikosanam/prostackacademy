import express from 'express';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config({path: "./config.config.env"});
const app=express();
app.get('/', (req,res)=>{
    res.send("Hello, This is express server");
});
app.get('/employee', (req,res)=>{
    fs.readFile(path.join(__dirname, "employee","data","employee.json"), "utf-8", (err,data)=>{
        if(err) throw err;
        res.status(200).json(JSON.parse(data));
    })
});
app.get('contacts',(req,res)=>{
    res.send("contacts data");
});
app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is running on Port Number:${process.env.PORT}`);
});