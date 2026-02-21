console.log(__dirname);
console.log(__filename);

const { log } = require('console');
const path = require('path');

const filePath = "/Users/karan/OneDrive/Desktop/Backend/path-module.js";
console.log(path.basename(filePath));
console.log(path.basename(filePath,'.js'));

console.log(path.dirname(filePath));
console.log(path.extname(filePath));


const finalPath = path.join('/Users/karan/OneDrive/Desktop','Backend','path-module.js');
console.log(finalPath);


console.log(Path2D.resolve('Desktop','BACKEND','path-module.js'));

const finalPath = path.join('Desktop','NodeJS','app.js');
console.log(path.parse(finalPath));


// realworld problem



const path = require('path');
const fs = require('fs');
const { log } = require('console');
const filePath = path.join(__dirname,'data','info.txt');
fs.writeFileSync(filePath,"hello from node-js");
const data = fs.readFileSync(filePath,'utf-8');
log(data)






