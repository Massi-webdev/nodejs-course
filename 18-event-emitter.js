// Event Driven Programming //
// Node JS uses event loop that keeps listening to events and triggers corresponding event handeleres (callbacks)


// // basic example.
// const EventEmitter = require('events');
// const myEmiter = new EventEmitter();

// myEmiter.on('sayHi', (name)=>{
//   console.log(`Hello ${name}`);
// });

// myEmiter.emit('sayHi', 'Massi')

// const askQuestion = (question) => {
//   console.log(question);
// };

// // remove listeners
// // myEmiter.removelistener() remove a specifed listener of a specicied event
// // myEmiter.removeAllListeners(); remove all listeners of a s specified event
// // example:
// myEmiter.on('askQuestion', askQuestion);

// try{
//   myEmiter.emit('askQuestion', ('How are you ?'));
// }
// catch (err){
//   console.log(err.message);
// }


// // myEmiter.removeAllListeners();  -- remove all listeners to this event
// myEmiter.off('askQuestion', askQuestion);
// myEmiter.removeListener('askQuestion', askQuestion);   //-- same thing -- newer node js

// try{
//   myEmiter.emit('askQuestion', ('How are you ?'));
// }
// catch (err){
//   console.log(err.message);
// }
// did not work this time because the eventName and it listener was removed.




// // http example
// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res)=>{ 

//   res.writeHead(200, {
//     'Content-Type': 'Text/plain'
//   });
//   res.end('Welcome to the page');
// });

// server.on('request', (req, res)=>{
//   console.log(req.url);
//   console.log(req.method);
//   console.log(req.headers);
// });

// server.listen(5000, ()=>{
//   console.log('server is running on http://localhost:5000');
// });




//  CUSTOM EVENT EMITTERS
const EventEmitter = require('events');
const http = require('http');


// create a custom eventemitter.
const myEmiter = new EventEmitter();


// attach a listener to the custom eventEmitter.
myEmiter.on('logRequest', (req) => {
  return console.log(`Custom logger: ${req.method} ${req.url}`);
});

// Create the server.
const server = http.createServer((req, res) => {
  // emit a custom event for logging
  myEmiter.emit('logRequest', req);

  //respond to the client
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });

  res.end('Hello from the custom EventEmitter');
})
.listen(5000, ()=> {
  console.log('Server is running on http://localhost:5000');
}); 



