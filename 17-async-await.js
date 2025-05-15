// Async Await
// It is built on top of Promises
// it allow to write an asynchronous code that behaves like a synchronous one
// which makes it easy to understand and debug.


//  Basic exammple
// const {readFile, writeFile} = require('fs');

// const readFilePromise = (file) => {
//   return new Promise((resolve, reject)=>{
//     readFile(file, 'utf8', (error, data)=>{
//       if (error) return reject(error);
//       resolve(data);
//     });
//   });
// };

// const writeFilePromise = (file, content) => {
//   return new Promise((resolve, reject)=>{
//     writeFile(file, content, (error)=> {
//       if (error) return reject (error);
//       resolve();
//     });
//   });
// };


// const asyncReadFunction = async() =>{
//   try{
//     const file1Data = await readFilePromise('./content/subfolder/file1.txt');
//     const file2Data = await readFilePromise('./content/subfolder/file2.txt');
//     const combinedFilesData = `${file1Data}\n${file2Data}`;
//     writeFilePromise('./content/subfolder/results-async.txt', combinedFilesData);

//     console.log('Files were successfully combined');

//     const results = await readFilePromise('./content/subfolder/results-async.txt');
//     console.log(results);
//   }
//   catch(error) {
//     console.error('Error message:', error.message);
//   }
// };

// asyncReadFunction();


// advanced way: using build in function or require(module).promise
const {readFile, writeFile} = require('fs').promises;
const util = require('util');

// const readFilePromise = util.promisify(readFile);

const asyncReadFunction = async() =>{
  try{
    const file1Data = await readFile('./content/subfolder/file1.txt', 'utf8');
    console.log(file1Data);
  }
  catch(error) {
    console.error('Error message:', error.message);
  }
};

asyncReadFunction();