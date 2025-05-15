// Streams are obects that allo you to read and/or write file sequentially, in chuncks instead of all the file at once, making it memory efficient and faster.
// They are used to handle i/o operations like reading files, writting files and network requests. 

// first lets create really big file and then use streams to read it sequentially.

const { error } = require('console');
const fs = require('fs');
// // for (let i = 0; i<100000; i++){
// //   writeFileSync('largeFile.txt', `Hello world ${i} \n`, {flag: 'a'});
// // }; 


// // create readable stream--------------------------------------------------------------------------
// const readStream = fs.createReadStream("./largeFile.txt", {encoding: "utf8", highWaterMark: 90000}) ;

// readStream.on('data', (chunk)=>{
//   console.log(chunk.length);
// });


// readStream.on('end', ()=>{
//   console.log('StreamRead is done');
// });


// readStream.on('error', (err)=>{
//   console.error(err.message);
// });


// create writeable Stream -------------------------------------------
// const writeStream = fs.createWriteStream('./output.txt');

// writeStream.write('Hello ');
// writeStream.write('World\n');

// // indicate the end off the Stream
// writeStream.end('This is the end of the stream');


// // emitted when all the data  has been written
// writeStream.on('finish', ()=>{
//   console.log('Finished writing the file');

//   // read the new File to check our work;
//   fs.readFile('./output.txt','utf-8', (error, data)=>{
//     if(error)return error;
//     console.log(data);
//   });

// });


// // handle errors
// writeStream.on('error', (error)=>{
//   console.error(error.message);
// });


// Piping streams -------------------------------------------
// const readeableStream = fs.createReadStream('./in.txt');
// const writeableStream = fs.createWriteStream('./out.txt');

// // Pipe the readable stream into the writable stream
// readeableStream.pipe(writeableStream);

// readeableStream.on('end', ()=>{
//   console.log('file was successfully copied');
//   //read the new File to check our work;
//   fs.readFile('./out.txt','utf-8', (error, data)=>{
//     if(error)return error;
//     console.log(data);
//   });
// });

// readeableStream.on('error', ()=>{
//   console.error(error);
// });

// writeableStream.on('error', ()=>{
//   console.error(error);
// });


// Transform streams
// allow to modify data as it is being read or written

// const zlib = require('zlib');

// // create readable and writeable steams
// const readableSteam = fs.createReadStream('./in.txt'); 
// const writeableStream = fs.createWriteStream('./out.txt');
// const gzip = zlib.createGzip();


// readableSteam.pipe(gzip).pipe(writeableStream);

// writeableStream.on('finish', () => {
//   console.log('File compressed successfully.');
// });



///////////// Assingment /////////////////
//
const zlib = require('zlib');
const gzip = zlib.createGzip();

const readableSteam = fs.createReadStream('./largeFile.txt', {encoding: 'utf8', highWaterMark:9000});
const writableStream = fs.createWriteStream('./output.txt');

readableSteam.on('data', (chunk)=>{
  console.log('file was successfully read');
  console.log('file content: ', chunk.length, 'bytes');
})

// Handle errors for the readable stream
readableSteam.on('error', (error)=>{
  console.error('Error reading the file:', error.message);
})



// Handle errors for the writable stream
writableStream.on('error', (err) => {
  console.error('Error writing to the file:', err.message);
});

readableSteam.pipe(gzip).pipe(writableStream);

writableStream.on('finish', ()=>{
  console.log('File compressed successfully');
});