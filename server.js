const http = require("http");

const returnStatement = "Hello World, welcome to WeJapa Internships";
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET'){
        res.writeHead(200, { "content-type": "text/plain" });
        res.write(returnStatement);
        res.end();
    } else {
        res.writeHead(404, { "content-type": "text/plain" });
        res.write("Page not Found");
        res.end();
    }
  
});

const port = process.env.PORT || 5000;

server.listen(port, (error) => {
  if (error) {
    console.log("Error encountered while trying to serve the app", error);
  } else {
    console.log(`Server listening on localhost:${port}`);
  }
});
