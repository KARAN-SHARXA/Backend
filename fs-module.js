//fs-module
const fs = require("fs");

//sync = blocking
//async = non blocking
fs.writeFileSync("data.txt", "hello ji kk", "utf8", (err) => {
  if (err) {
    console.err("Error written file", err);
  } else {
    console.log("file written sucessfuly");
  }
});

const data = fs.readFileSync('data.txt','utf8');
console.log('file content:',data);

fs.appendFileSync('data.txt','\nThis is an appended txt',(err)=>{
  if(err){
    console.error(err);
    
  }else{
    console.log("file appended successfully");
    
  }
})



fs.unlinkSync('test.txt');
console.log('File deleted su');


// create a new folder
fs.mkdirSync('newFolder');
console.log('folder created successfully');


// delete a folder
fs.rmdirSync('newFolder');
console.log('folder removed successfuly');

// check file

if(fs.existsSync('data.txt')){
  console.log('file exists');
  
}else{
  console.log('file not found');
  
}

