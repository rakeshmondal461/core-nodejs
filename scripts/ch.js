//0100 1000 0110 1001 0010 0001

const { Buffer } = require("buffer");

const buff = Buffer.alloc(3);

buff[0] = 48;
buff[2] = 69;
buff[2] = 21;

console.log(buff)

