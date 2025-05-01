//os built in module has many methods and properties.

//first you have to require the path module.
const path = require('path');


// const pathSeg1 = '/documents'
// const pathSeg2 = '/project'
// const fileName = 'main.js'

// path.sep() returns the platform seperator \-win /-linux-mac.
// path.base() returns the file's name.
// path.dirname() returns the file's directory.
// path.ext() returns the file's extension.
// path.join() will concatenate multiples path segments.
// path.resolve() resolve a sequence of paths into an absolute path
// path.parse() returns an object with details about the path (root, dire, ext, base)
// path.format() will create a path using an object (opposite of parse)
// path.isAbsolute() returns if the path is absolute or not (true of false)


// assignment

// const file = 'path-utilities.js';
// const testingFile = '/Users/Massi/Projects/NodeJS/app.js'

// console.log(`Directory Name: ${path.dirname(testingFile)}`);
// console.log(`Base Name: ${path.basename(testingFile)}`);
// console.log(`File's Extension: ${path.extname(testingFile)}`);
// console.log(`is the path absolute: ${path.isAbsolute(testingFile)}`);
// console.log(`Joined Paths: ${path.join('ParentFolder', 'subfolder', file)}`);
// console.log('Parsed Path:', path.parse(testingFile));
// console.log(`
//   Formated Path: ${path.format({
//     dir: '/Users/Massi/Projects/NodeJS',
//     base: 'app.js',
//   })
// }`);

// //extra posibilities
// console.log(path.resolve(__dirname, testingFile));
// console.log(path.isAbsolute(path.resolve(__dirname, testingFile)));


// Assingment 2:

const aFile = 'app.js';
const aPath = 'parentFolder/childFolder/'
const PathFile = path.join(aPath, aFile);
console.log(`Path and File ${PathFile}`);
console.log(`Path Name: ${path.dirname(PathFile)}`);
console.log(`file Name: ${path.basename(PathFile)}`);
console.log(`file Extension: ${path.extname(aFile)}`);
console.log(`is path absolute ? : ${path.isAbsolute(PathFile)}`);
console.log(path.parse(PathFile));
console.log(path.format({
  dir: 'Parent/child/projects',
  base: 'app.js'
}));
console.log(path.resolve(__dirname,PathFile));