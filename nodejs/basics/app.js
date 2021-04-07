const express = require('express');
const app=express();
app.get('/',(req, res)=>{
    res.end("Hello, Welcome to Express js");
});
app.get('/about', (req, res)=>{
    res.end("Aboutus page");
});
app.listen(8000, (err)=>{
    if(err) throw err;
    console.log(`Server is running on Port: ${8000}`);
});