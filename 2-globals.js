// __dirname : path to the current directory
// __filename : file name
// require : function to use module ( commonJS)
// module : info about the current module (file)
// process : info about env where the program is being exectuded

setInterval(()=>{
  console.log(__filename)
  console.log(__dirname)
},1000)