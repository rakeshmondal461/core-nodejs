const fs = require('fs');
const buffer = Buffer.from('Hello, World!', 'utf-8');

// fs.writeFile('example.txt', buffer, (err) => {
//     if (err) throw err;
//     console.log('File written with binary data');
// });


fs.readFile('example.txt', (err, data) => {
    if (err) throw err;
    console.log('File data as buffer:', data);
});