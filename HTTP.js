const http = require("http");


const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(JSON.stringify({name:"Mohit",age: 24}));
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>welcome to about page<h1/>");
    res.end();
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>404 page is not found <h1/>");
    res.end();
  }
});

server.listen(1000, () => {
  console.log("Server is listening on port 1000");
});
