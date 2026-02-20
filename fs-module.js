const fs = require("fs");

//Asych
fs.readFile("text.txt", "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file", err);
  }
  console.log("File content", data);
});

//synch
const data = fs.readFileSync('text.txt','utf8');
console.log('File content',data);

//write file

fs.writeFile('data.txt','Hello From Nodejs',(err)=>{
  if(err){
    console.error('Error writing file',err);
  }
  console.log('File written Sucessfuly');
  
})

//append file
fs.appendFile('data.txt','\nkokokokok',(err)=>{
  if(err){
    console.log('Error appeding to file',err);
  }
  else{
    console.log('File appended succesefull');
    
  }
})

//delete file
fs.unlink('text.txt',(err)=>{
  if(err){
    console.log('Error deleting file',err);
    
  }
  else{
    console.log('File is deletd');
    
  }
})
//rename file
fs.rename('data.txt','newdata.txt',(err)=>{
  if(err){
    console.log('Error renaming file',err);
  }
  else{
    console.log('File renamed successfully');
  }
})