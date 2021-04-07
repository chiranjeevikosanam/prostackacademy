const fs=require('fs');

fs.unlink('five.txt',(err)=>{
    if(err) throw err;
    console.log('File deleted');
});