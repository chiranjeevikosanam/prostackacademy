var fs=require('fs');
var readStream=fs.createReadStream('seven.txt');

readStream.on('open',()=>{
    console.log('The file is open');
});