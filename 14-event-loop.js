// event loop; node js is asychronous 
// which allow the users do multiple time (requests) without blocking each others.

const { error } = require('console');
const fs  = require('fs')

console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

setImmediate(()=>{
  console.log('Immediate');
});

fs.readFile('file.txt', 'utf8', (error, data)=>{
  if  (error) {console.error(error); return}
  console.log('Hello File');
})

process.nextTick(()=>{
  console.log('Next Tick');
});

console.log('End');