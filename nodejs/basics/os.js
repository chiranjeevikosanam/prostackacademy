const os=require('os');

var totalMemory=os.totalmem();
var freeMemory=os.freemem();
var version=os.version();
var memory=os.totalmem();
var name=os.hostname();
var release=os.release();
/* var priority=os.setPriority(); */
/* console.log('Total Memory:' + totalMemory); */

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
console.log(`version: ${version}`);
/* console.log(`Priority: ${priority}`); */
console.log(`memory: ${memory}`);
console.log(`name:${name}`);
console.log(`release:${release}`);