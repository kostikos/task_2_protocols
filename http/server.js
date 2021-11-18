const http = require('http');

const port = 3002;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.setHeader("Content-Type", "text/html");
  response.writeHead(200);
  response.end(`<html><body><h1>Hello on Node.js Server!</h1></body></html>`);
}
const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`Server is listening on ${port}`);
});

