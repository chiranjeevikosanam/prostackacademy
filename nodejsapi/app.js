import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
/* import productRouter from './routers/productRouter';
import userRouter from './routers/userRouter';


const app=express();
const miles=18;
const calculateFeet=(miles)=>miles*5280;

app.use(morgan('dev'));
app.get('/', (req, res)=>{
    res.end("Hello good morning express server root");
});
app.get('/about', (req, res)=>{
    res.end("Express server about page");
});
app.get('/contactus', (req, res)=>{
    res.end("Express server contactus page");
});
app.use("/products", productRouter);
app.use("/user", userRouter);

app.listen(8000,(err)=>{
    if(err) throw err;
    console.log("server running on port no: 8000");
}); */









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