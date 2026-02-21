const fs = require("fs/promises");
fs.writeFile("data.txt", "Hellow world nodeJs Promise")
  .then(() => {
    console.log("file created successfully");
  })
  .catch((err) => {
    console.log("error writing file", err);
  });


fs.readFile('data.txt','utf8')
  .then((data)=>{
    console.log("File read successfully",data);
    
  })
  .catch((err)=>{
    console.log("err");
    
  })


fs.appendFile('data.txt','\n this is an appended text')
  .then(()=>{
    console.log("File read successfully");
    
  })
  .catch((err)=>{
    console.log("err");
    
  })



fs.unlink('data.txt')
  .then(()=>{
    console.log("File read successfully");
    
  })
  .catch((err)=>{
    console.log("err");
    
  })