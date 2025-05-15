// PROIMISES
// it's an object that represents the eventual completion or failure of an asynchronous function and it's possible results.
// Promises allows to avoid callbacks hell and provide a cleaner code.

// Basic example --------------------------------
// const { result } = require("lodash");

// const myPromise = new Promise((resolve, reject)=>{
//   const success = z; // simulate success or failure
//   if (success){
//     console.log('success');
//   } else {
//     console.log('failure');
//   }
// });

// myPromise.then((result)=>{
//   console.log(result);
// }).catch((error)=>{
//   console.error(error.message);
// });

// Promisifying an synchronous function --------------------------------
// const { error } = require('console');
// const {readFile} = require('fs');
// const readFilePromise = (file) => {
//   return new Promise((resolve, reject)=>{
//     readFile(file, 'utf8', (error, data)=>{
//       if (error){
//         return (reject(error));
//       }
//       return resolve(data);
//     });
//   });
// };

// readFilePromise('./content/subfolder/file.txt').then((results)=>{
//   console.log(results);
// }).catch((error)=>{
//   console.error(error.message);
// });

// chaining promises : perform sequencial asychronous operations --------------------------------
const { error } = require("console");
const { readFile, writeFile } = require("fs");
const { reject } = require("lodash");
const { resolve } = require("path");

const readFilePromise = (file) => {
  return new Promise((resolve, reject) => {
    readFile(file, "utf8", (err, data) => {
      if (err) {
        return reject(err);
      }
      return resolve(data);
    });
  });
};

const writeFilePromise = (file, contentToWrite) => {
  return new Promise((resolve, reject) => {
    writeFile(file, contentToWrite, (error) => {
      if (error) {
        return reject(error);
      }
      resolve();
    });
  });
};

readFilePromise("./content/subfolder/file.txt")
  .then((file1Data) => {
    return readFilePromise("./content/subfolder/file 2.txt").then(
      (file2Data) => {
        return { file1Data, file2Data };
      }
    );
  })
  .then(({ file1Data, file2Data }) => {
    const combinedFiles = `${file1Data}\n${file2Data}`;
    return writeFilePromise(
      "./content/subfolder/results-asynch.txt",
      combinedFiles
    );
  })
  .then(() => {
    console.log("Files were successfully combined");
    return readFilePromise("./content/subfolder/results-asynch.txt");
  })
  .then((results) => {
    console.groupCollapsed(results);
  })
  .catch((err) => {
    console.error(err.message);
  });
