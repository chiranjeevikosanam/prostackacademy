const express=require('express');
const app=express();
app.get('/',(request,response)=>{
    response.end('welcome to expressjs');
});
app.listen(8000,()=>{
    console.log('server running on port 8000');
})