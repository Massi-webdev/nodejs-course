// ----------------- Modules ----------------------

// Common JS, every file is module (bydefault)
// Modules - encapsulated code (only share minimum)

const sayHi = require('./5-utils');
const names = require('./4-names');
const data = require('./6-alternative-export');
//const singleObject = require ('./6-alternative-export'); //we can't require differents data separately but we can import the whole as an object


//we can do alos a require without declaring anything.
require('./7-mind-grenade');
// we can read js files using require on another without exports



sayHi(names)
sayHi(names.john)
sayHi(names.peter)
sayHi(data.lists[0])
sayHi(data.lists[1])
sayHi(data.singleObject.name)
