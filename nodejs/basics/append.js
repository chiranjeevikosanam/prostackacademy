var fs=require('fs');
fs.appendFile('ten.txt','Hello',(err)=>{
    if(err) throw err;
    console.log('Saved');
});