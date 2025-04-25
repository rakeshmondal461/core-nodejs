const http = require("http");
require("dotenv").config({ path: "./.env." + process.env.NODE_ENV });

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("Hello Wolrd");
      break;
    case "/about":
      for (let i = 0; i < 500; i++) {
        for (let j = 0; j < 500; j++) {
          console.log(`${i} ${j}`);
        }
      }

      //res.writeHead(200, { "content-type": "application/json" });
      res.writeHead(200, { "content-type": "text/html" });
      res.end("<h1>This is about page</h1>");
      break;
    case "/contactus":
      res.end("This is contact us page");
      break;
    case "/api":
      res.end("This is API routing");
      break;
    default:
      res.end(`<h2>404! Not Found</h2>`);
      break;
  }
});

server.listen(5004, (err, result) => {
  if (err) {
    console.log("Error starting server!");
    return;
  }
  console.log(`Server is running on port: 5004`);
  if (process.env.NODE_ENV == "prod") {
    // Production environment-specific code
    console.log("Running in production environment", process.env.USERROLE);
  } else {
    // Development environment-specific code
    console.log("Running in development environment", process.env.USERROLE);
  }
});
