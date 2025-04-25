const fs = require("fs");
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// 3. Register an event listener
myEmitter.on("greet", () => {
  console.log("Hello, Rakesh! Welcome to EventEmitter!");
});

fs.readFile(__filename, () => {
  console.log("This is redafile 1");
  // 4. Emit the event
  myEmitter.emit("greet");
});
