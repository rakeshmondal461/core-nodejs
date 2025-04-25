const fs = require("fs");

function callPromise() {
  return new Promise((resolve, reject) => {
    resolve("This is from promise");
  });
}

fs.readFile(__filename, () => {
  console.log("This is redafile 1");
});

setTimeout(() => {
  console.log("This is from settimeout");
}, 0);
/*
callPromise().then(() => {
  console.log("This is from promise");
});

process.nextTick(() => {
  console.log("This is from process nextTick");
});
*/
