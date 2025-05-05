//basic promise
const myPromise = new Promise((resovle, reject)=>{
  const success = true;
  if (success){return resovle('successfull')}
  else {return reject('Failure')}
});

myPromise
  .then((results)=>{
    console.log(results);
  })
  .catch((error)=>{
    console.log(error.message);
  });



//promisifying asynchronous code;
const { error } = require('console');
const {readFile, writeFile} = require('fs');;
const readFilePromise = (file) => {
  return new Promise((resolve, reject)=>{
    readFile(file, 'utf8', (error, fileData)=>{
      if (error){return reject(error)}
      return resolve(fileData);
    });
  });
};

readFilePromise('./content/subfolder/file.txt')
  .then((results)=>{
    console.log(results);
  })
  .catch((error)=>{
    console.error(error.message);
  });


  // nested promises // chaining promises is also possible

  const writeFilePromise = (file, content) => {
    return new Promise((resolve, reject) => {
      writeFile(file, content, (error) => {
        if (error) {return reject(error)}
        resolve();
      });
    });
  };


  readFilePromise('./content/subfolder/file.txt').then((file1Data)=>{
    return readFilePromise('./content/subfolder/file 2.txt').then((file2Data)=>{
      return {file1Data, file2Data}
    });
  })
  .then(({file1Data, file2Data})=>{
    const combinedFiles = `${file1Data}\n${file2Data}`
    return writeFilePromise('./content/subfolder/results-async.txt', combinedFiles);
  })
  .then(()=>{
    console.log('Files were successfully combined');
    return readFilePromise('./content/suzbfolder/results-async.txt');
  })
  .then((results)=>{
    console.log(results);
  })
  .catch((error)=>{
    console.log(error.message);
  })