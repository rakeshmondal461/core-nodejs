const fs = require("fs");

const readableStream = fs.createReadStream("example.txt", {
  // encoding:'utf8',
  highWaterMark: 4, // buffer size in bytes
});

readableStream.on("data", (chunk) => {
  console.log("chunk", chunk);
});

readableStream.on("end", () => {
  console.log("data read complete!");
});
