const path = require('path')

const myCurrentPath = __filename;
//console.log(path.join('usr','local','mahbub','testfile.js'));
console.log(path.resolve(__dirname, 'scripts', 'test.js'));
console.log(path.parse(myCurrentPath));