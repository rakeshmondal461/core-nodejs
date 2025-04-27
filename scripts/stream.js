const fs = require("fs");
/*
// ------------------  ReadStream Example ----------------- //
const readableStream = fs.createReadStream("example.txt", {
   //encoding:'utf8',
  highWaterMark: 4, // buffer size in bytes
});

readableStream.on("data", (chunk) => {
  console.log("chunk", chunk);
});

readableStream.on("end", () => {
  console.log("data read complete!");
});

// ------------------  ReadStream Example ----------------- //




// ------------------  WriteStream Example ----------------- //

const readableStream = fs.createReadStream("example.txt", {
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("copytext.txt");

readableStream.on('data',(chunk)=>{
  console.log(chunk);
  writeableStream.write(chunk);
});

// ------------------  WriteStream Example ----------------- //

*/

// ------------------ Use cases of Pipes ------------------ //

const readableStream = fs.createReadStream("example.txt", {
  highWaterMark: 2,
});

const writeableStream = fs.createWriteStream("copytext.txt");

readableStream.pipe(writeableStream);

