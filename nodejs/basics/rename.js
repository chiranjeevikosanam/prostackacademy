var fs=require('fs');
fs.rename('six.txt','sixteen.js',(err)=>{
    if(err) throw err;
    console.log('File renamed');
});