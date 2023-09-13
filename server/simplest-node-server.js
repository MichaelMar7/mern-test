// The Simplest Server TM
const http = require("http");
const server = http.createServer(handleRequest);
server.listen(5051);

function handleRequest(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World!");
}