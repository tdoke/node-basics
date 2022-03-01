// print all the wrapper function arguments passed to it
console.log(arguments.length)
console.dir(arguments, { depth: 1 })

/*
below is the default wrapper function of a node js module
(function (exports, require, module, __filename, __dirname) {  


 });
*/
console.log(__filename, __dirname)

function test() {
  console.log("execute test")
}

module.exports = test