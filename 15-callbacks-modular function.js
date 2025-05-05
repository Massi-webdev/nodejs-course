// call backs are a functions passed as an arguent inside another functions,
// it executes once the outfunction is asynchrounously done.
// Always handle callbacks errors and use return to exist the callback
// Callback Hell happens when multiples callback are nested and the code becoes bery hard to read and manage.


// Call bac Hell example.
// const { error } = require('console');
// const {readFile, writeFile} = require('fs');
const { error } = require('console');
const fs = require('fs');

// readFile('./content/subfolder/file.txt', 'utf8',(error, FileData1)=>{
//   if (error){
//     console.error(error);
//     return
//   };
  
//   readFile('./content/subfolder/file 2.txt', 'utf8',(error, FileData2)=>{
//     if (error){
//       console.error(error);
//       return
//     };
    
//     writeFile('./content/subfolder/results-async.txt', FileData1 + FileData2 + 'zzzz',(error)=>{
//       if (error){
//         console.error(error);
//         return
//       };
      
//       console.log('File was successfully updated.');
      
//       readFile('./content/subfolder/results-async.txt', 'utf8',(error, results)=>{
//         if (error){
//           console.error(error);
//           return
//         };
        
//         console.log(results);
//       })

//     })
//   })
// })

// we can avoid callbacks hell by using MODULAR FUNCTIONS or PROMISES / ASYNC AWAIT
// example 
// regular call back

// readFile('./content/subfolder/file 2.txt', 'utf8',(error, FileData2)=>{
//   if (error){
//     console.error(error);
//     return
//   };
  
//   console.log(FileData2);
// })


// MODULAR FUNCTION 
// Level 1
// const readFile = (filename, callback) => {
//   fs.readFile(filename, 'utf8', callback);
// }

// const writeFile = (filename, content, callback) => {
//   fs.writeFile(filename, content, callback);
// }

// readFile('./content/subfolder/file.txt', (error, fileData1)=>{
//   if (error) {return console.error(error)};

//   readFile('./content/subfolder/file 2.txt', (error, fileData2)=>{
//     if (error) {return console.error(error)};
  
//     writeFile('./content/subfolder/results-async.txt', (fileData1 + '\n' +fileData2), (error) => {
//       if (error) {return console.error(error)};
//       console.log('Files combined successfully!');
//     })
    
//   })

// });


// level 2 --- way cleaner
// const readFile = (fileName, callback) => {
//   fs.readFile(fileName, 'utf8', (error, data)=>{
//     if (error){
//       console.error(`Error reading file ${fileName}:`, error);
//       return callback(error);
//     }
//     callback(null, data);
    
//   });
// };

// readFile('./content/subfolder/filze.txt',(error, data)=>{
//   if (error){return;}
//   console.log(data);
// });


// level 3 --- PRO
/** 
 * Reads a file asynchronously
 * @param {string} file - path of the file
 * @param {function} callback - the call back function with 2 parameters (error, fileData)
 * @param {string} [encoding = 'utf8'] - the file encoding
*/

// read file modular function
const readFile = (file,callback) => {
  fs.readFile(file, 'utf8', (error, fileData)=>{
    if (error){
      console.log(`Error reading file ${file}:`, error.message);
      return callback(error);
    };
    return callback(null, fileData);
  });
};



/** 
 * Reads a file asynchronously
 * @param {string} file - path of the file
 * @param {string} contentToWrite - data to write on the file
 * @param {function} callback - the call back function with 1 parameter (error)
*/

// write file modular function
const writeFile = (file, contentToWrite, callback)=>{
  fs.writeFile(file, contentToWrite, (error)=>{
    if (error){
      console.log(`Error writting file ${file}:`, error.message);
      return callback(error);
    };
    callback(null);
  });
};



//nested callback using modular functions to avoid callback Hell

readFile('./content/subfolder/file.txt', (error, file1Data)=>{
  if (error) return;

  readFile('./content/subfolder/file 2.txt', (error,file2Data)=>{
    if (error) return;
    
    writeFile('./content/subfolder/results-async.txt', `${file1Data} \n${file2Data}`, (error)=>{
      if (error) return;

      console.log(`File was successfully updated`);

      readFile('./content/subfolder/results-async.txt', (error, resultsData)=>{
        if (error) return;
        console.log(resultsData);
      });
      
    });
  });
});
