function greet(name, callback) {
  console.log("helllo" + name);
  callback();
}
function callme() {
  console.log("I am callback function");
}
greet("Karan", callme);


//example of call back hell

const fs = require("fs").promises;
fs.readFile("exaple.txt", "utf-8", function (err, data) {
  if (err) return console.error(err);
  fs.readFile("data.txt", "utf-8", function (err, data2) {
    if (err) return console.error(err);
    console.log("file1 data", data);
    console.log("file2 data", data2);
  });
});


// how to avoid

async function readfiles(){
  try{
    const data1 = await fs.readFile('exaple.txt','utf-8');
    const data2 = await fs.readFile('data.txt','utf-8');
    console.log("file1",data1);
    console.log("file2",data2);
    
    
  } catch (err){
    console.error(err);
    
  }
}
readfiles();