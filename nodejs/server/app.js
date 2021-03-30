const http=require("http");

//how to create http server
const server=http.createServer((request,response)=>{
    response.end(`<h1>Hello, Server is running on Port No: 8000</h1>`);
});
server.listen(8000,()=>{
    console.log("Server Running on Port No:", 8000);
});