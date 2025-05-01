//os built in module has many methods and properties.
//first you have to require the os module.

const os = require('os');

//userInfo method:
console.log(os.userInfo());

//os.uptime method:
console.log(os.uptime());

//os.type method:
console.log(os.type());

//os.platform method:
console.log(os.platform());

//os.cpus method:
console.log(os.cpus());

//os.totalmem method:
console.log(os.totalmem());

//os.freemem method:
console.log(os.freemem());

//os.homedir method:
console.log(os.homedir());

//os.networkInterfaces method:
console.log(os.networkInterfaces());

//os.release method:
console.log(os.release());

//os.tmpdir method:
console.log(os.tmpdir());

//example of a script
console.log('Your information system:');
console.log('---------------------------------------------------------------------------------:');
console.log(`OS type: ${os.type()}`);
console.log(`Platform : ${os.platform()}`);
console.log(`Released version : ${os.release()}`);
console.log(`CPU Architecture : ${os.arch()}`);
console.log(`Your total system's memory : ${os.totalmem()}`);
console.log(`Your system is using:  ${((os.totalmem()- os.freemem())/1024/1024).toFixed(2)} MB`);
console.log(`Remaining/Free memory:  ${(os.freemem()/1024/1024).toFixed(2)} MB`);
console.log(`Your system is was on for:  ${(os.uptime()/60/60).toFixed(2)} minutes`);
console.log(`User's home directory:  ${os.homedir()}`);
console.log(`Host name:  ${os.hostname()}`);
console.log(os.userInfo());
console.log(`All Network Interfaces:  ${os.networkInterfaces()}`);
console.log('---------------------------------------------------------------------------------:');