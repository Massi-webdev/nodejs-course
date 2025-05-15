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
  if (!err) return;
  
  writeFile('error.log', `${err.message}`, { flag: 'a'}, (error)=>{
    if (error) {
      return console.error(`Failed to write to error log:`, error.message);
    }
  });
  console.error("This in an error message", err.message);
});

logger.emit('info');
logger.emit('warning');
logger.emit('error', new Error('This in an error message'))