// Simple Server - Http Methods

// Write a simple server to handle the following
// GET /books
// PUT /books
// DELETE /books
// GET /books/author/
// POST /books/author/
// PUT /books/author/
const url = require("url");
const http = require("http");

function ServerBehaviour(req, res) {
  if (req.url === "/books" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("THINGS FALL APART");
  } else if (req.url === "/books" && req.method === "PUT") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      JSON.stringify([{ Name: "ADE GOES TO SCHOOL" }, { Name: "WOMEN OF OWU" }])
    );
  } else if (req.url === "/books" && req.method === "DELETE") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("BOOKS DELETED");
  } else if (req.url === "/books/author" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("CHINUA ACHEBE");
  } else if (req.url === "/books/author" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(
      JSON.stringify([{ AUTHOR: "WILLIAM WISE" }, { AUTHOR: "JOHN MARK" }])
    );
  } else if (req.url === "/books/author" && req.method === "PUT") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("CREATION STORY");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("ERROR, FILE NOT FOUND");
  }
}

const server = http.createServer(ServerBehaviour);
port = 8000;
server.listen(8000, () => {
  console.log(`server is live at  http://localhost:${port}`);
});
