const fs = require("fs");

fs.writeFile("example.txt", "Hellow world Node js asyncs", (err) => {
  if (err) {
    console.error("Error writin file", err);
  } else {
    console.log("file written sucessfully");
  }
});

fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file content: ", data);
  }
});

fs.appendFile("example.txt", "\nAppend text", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Text appended successfuly");
  }
});

fs.unlink("text.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File deleting ");
  }
});
