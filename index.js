const http = require("http");
require("dotenv").config({ path: "./.env." + process.env.NODE_ENV });
const homepage = require("./views/home")();
const aboutpage = require("./views/about")();
const contactuspage = require("./views/contactus")();
const notFoundPage = require("./views/notfound")();
const server = http.createServer((req, res) => {
  const requestURL = req.url;
  switch (requestURL) {
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      res.end(homepage);
      break;
    case "/about":
      for (let i = 0; i < 500; i++) {
        for (let j = 0; j < 500; j++) {
          console.log(`${i} ${j}`);
        }
      }

      //res.writeHead(200, { "content-type": "application/json" });
      res.writeHead(200, { "content-type": "text/html" });
      res.end(aboutpage);
      break;
    case "/contactus":
      res.writeHead(200, { "content-type": "text/html" });
      res.end(contactuspage);
      break;
    case "/api":
      const data = {
        message: "API working",
      };
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(data));
      break;
    default:
      res.writeHead(200, { "content-type": "text/html" });
      res.end(notFoundPage);
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
