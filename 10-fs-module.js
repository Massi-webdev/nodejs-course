//os built in module has many methods and properties.

//first you have to require the fs module.
const { error } = require('console');
const fs = require('fs');



// // readFile() ------------------------------------------
// fs.readFile('file.txt', 'utf8', (error, data) => {

//   if (error){
//     console.log('reading error');
//     throw error;
//   };
//   console.log(data);
// });

// // readFileSync() --------------------------------------
// console.log('first step');
// try{
//   console.log(fs.readFileSync('file.txt', 'utf8'));
// } catch(error){
//   console.log(error)
// }

// console.log('last step');
// // -----------------------------------------------------


// writeFile() ------------------------------------------
// fs.writeFile('file.txt', 'file was modified', (error)=>{
//   if (error) console.log(error);
//   console.log('file was modified');
// });


// writeFileSync() --------------------------------------
// console.log(1)

// try{
// fs.writeFileSync('file.txt', 'file was modified again');

// // to see the modification and show that's synchronous
// console.log(fs.readFileSync('file.txt', 'utf8'));
// }
// catch(error){
//   throw error
// }

// console.log(2)

// -----------------------------------------------------


// appendFile() ------------------------------------------
// appends data to the file, if the files does not exists, it creates it

// fs.appendFile('file.txt', '\nThis new appended data.', (error)=>{
//   if (error){throw error; return};
//   console.log('filed was appended');

//   //will prove the appending by calling readFile() method;
//   console.log(fs.readFileSync('file.txt', 'utf-8'));
// });


// file creation example
// fs.appendFile('newfile.txt', '\nThis is a new file.', (error)=>{
//   if (error){throw error; return};
//   console.log('New file was created');
// });



// appendFileSync() ------------------------------------------
// //show synchro
// console.log(1);
// fs.appendFileSync('file.txt', '\nAnother data');
// console.log(fs.readFileSync('file.txt', 'utf-8'));
// console.log(2);

// fs.unlink() ----------------------------------------------
// fs.unlink('newFile.txt', (error)=>{
//   if (error) {throw error; return};
//   console.log('file deleted');
// })


// fs.unlinkSync() ------------------------------------------
// console.log(1);
// fs.unlinkSync('newFile.txt'); 
// console.log('newFile was deleted');
// console.log(2);


// fs.mkdir() -----------------------------------------------
// synchronous version also exist.
// fs.mkdir('new-folder', (error)=>{
//   if (error){
//     console.error(error);
//     return;
//   }
//   console.log('new-folder was successfully created');
// });


// fs.rmdir() -----------------------------------------------
// fs.rmdir('new-folder', (error)=>{
//   if (error){
//     console.error(error);
//     return
//   }
//   console.log('Folder was successfully removed');
// });


// // fs.readdir() -----------------------------------------------
// fs.readdir('.', (error, files)=>{
//   if (error){
//     console.error(error);
//     return
//   }
//   console.log(`Files`, files);
// });


// // fs.readdirSync() -----------------------------------------------
// console.log(fs.readdirSync('.'));


// // fs.stat() -- gets stastics about a file or a folder.
// fs.stat('../Node JS/1-intro.js', (error, stats)=>{
//   if (error) {console.log(error); return}
//   console.log(stats);
// })

// synchronous version of fs.stat()
// console.log(fs.statSync('.'));


// Assignment
// fs.mkdirSync('test-folder');
// fs.writeFileSync('./test-folder/test-file.txt', 'Hello, File System!');
// fs.appendFileSync('./test-folder/test-file.txt', '\nThis is appended text.');
// fs.readFileSync('./test-folder/test-file.txt');
// console.log('Stats:', fs.statSync('./test-folder/test-file.txt'));
// const fileList = fs.readdirSync('./test-folder');
// console.log(fileList);
// fs.unlinkSync('./test-folder/test-file.txt');
// fs.rmdirSync('./test-folder');





// advanced stuff - synchronous //
const {readFileSync, readFile, writeFileSync, writeFile} = require('fs');

// const first = readFileSync('./content/subfolder/file.txt', 'utf8');
// const second = readFileSync('./content/subfolder/file 2.txt', 'utf8');

// console.log(first, second);

// writeFileSync(
//   './content/subfolder/results-sync.txt', 
//   `here is the results: ${first} , ${second}`,
//   { flag: 'a'} //when we use this, node js will append instead or just write
// );




// advanced stuff - Asynchronous //

readFile('content/subfolder/file.txt', 'utf8',(error, results)=>{
    if (error){
      console.log(error);
      return
    }
    const first = results;

    readFile('content/subfolder/file 2.txt', 'utf8',(error, results)=>{
      if (error){
        console.log(error);
        return
      }
      const second = results;

      writeFile('content/subfolder/results-async.txt',
                `\n here is the results: ${first},${second}`,
                {flag: 'a'},
                (error)=>{
                  if (error){
                    console.log(error);
                    return
                  }
                }
      )
    });
  }
);
