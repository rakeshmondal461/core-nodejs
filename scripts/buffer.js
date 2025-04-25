const fs = require('fs');

fs.readFile('example.txt', (err, data) => {
  if (err) throw err;
  console.log(data);          // This is a Buffer
  console.log(data.toString()); // Converts Buffer to string
});
