const fs = require("fs/promises");

// write file
async function writeFileExample() {
  try {
    await fs.writeFile("data.txt", "mukes is good");
    console.log("file written sucessfully");
  } catch (err) {
    console.error("Error writing file");
  }
}
writeFileExample();


// read file

async function readFileExapmle(){

  try {
    const data = await fs.readFile("data.txt",'utf8');
    console.log("file written sucessfully",data);
  } catch (err) {
    console.error("Error writing file");
  }
}

readFileExapmle()



// append file
async function appendFileExample(){

   try {
    await fs.appendFile("data.txt",'\n hi mukes');
    console.log("file written sucessfully");
  } catch (err) {
    console.error("Error writing file");
  }

}

appendFileExample()


// delete file

async function deleteFileExample(){

   try {
    await fs.unlink("data.txt");
    console.log("deleted");
  } catch (err) {
    console.error("Error writing file");
  }

}
deleteFileExample()

