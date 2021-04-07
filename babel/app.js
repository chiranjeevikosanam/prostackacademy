//create express server
import express, { response } from 'express';
import morgan from 'morgan';
import chalk from 'chalk';

const app=express();
const miles=18;
const calculateFeet=(miles)=>miles * 5280;

app.use(morgan('tiny'));
app.get('/', (request, response)=>{
    response.end("Hello Good Morning Express Server - Root");
});
app.get('/About', (request, response)=>{
    response.end("Hello Good Morning Express Server - Aboutus");
});
app.get('Contact', (request, response)=>{
    response.end("Hello Good Morning Express Server - Contactus");
});

app.listen(8000, (err)=>{
    if(err) throw err;
    console.log(chalk `There are {bold 5280 feet} in a mile.
    In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)}feet}.`);
});