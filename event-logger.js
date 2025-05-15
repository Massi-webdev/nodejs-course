const EventEmitter = require('events');
const {writeFile} = require('fs');
const logger = new EventEmitter();


logger.on('info', ()=>{
  console.log('This is an info message');
});

logger.on('warning', ()=>{
  console.log('This is a warning message');
});

logger.on('error', (err)=>{
  writeFile('error.log', err, (error)=>{
    if (error) return console.error(error.message);
  });
  console.log('This is a warning message');
});

