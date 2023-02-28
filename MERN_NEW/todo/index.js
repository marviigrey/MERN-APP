// Import required modules
const http = require('http');

// Define the server hostname and port number
const hostname = '127.0.0.1';
const port = 3000;

// Create a server instance
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Write the response message
  res.end('Hello World!');
});

// Start the server and listen to incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

