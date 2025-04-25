const path = require("path");
const {
  readFileSync,
  writeFileSync,
  readFile,
  mkdir,
  unlink,
  stat,
  rm,
} = require("fs");

const util = require("util");

const readFilePromise = util.promisify(readFile);

//const filePath = path.join("/content/", "images", "img1.jpg");

//const filePath = path.join(__dirname, "/content/", "images", "img1.jpg"); //

//const filePath = path.resolve(__dirname, "content", "images", "img1.jpg"); //
const filePath = path.resolve(__dirname, "main/sub/subtext.txt");
const filePath2 = path.resolve(__dirname, "main/sub2/subtext2.txt");

const folderPath = path.resolve(__dirname, "test1");

/*
const permissions = 0o755;

mkdir(folderPath, { recursive: true, mode: permissions }, (err) => {
  if (err) {
    console.error("Error creating folder:", err);
  } else {
    console.log("Folder created successfully.");
  }
});


unlink(folderPath, (err) => {
  if (err) {
    console.error(`Error deleting file: ${err.message}`);
  } else {
    console.log("File deleted successfully");
  }
});



rm(folderPath, { recursive: true }, (err) => {
  if (err) {
    console.error(`Error deleting folder: ${err.message}`);
  } else {
    console.log("Folder deleted successfully");
  }
});


const fileContent = "Hello, this is the updated content of the subtext file!";

// Use fs.writeFile() to create a file and write content to it
writeFileSync(filePath, fileContent);
*/

// Here is an example of handling nested callback

/*
// The problem

readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);

  readFile(filePath2, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
  });
});

// The problem

*/

// Solution

const getTextFromFile = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

/*
// This is try/catch approach
getTextFromFile(filePath)
  .then((result) => {
    console.log(result);
    getTextFromFile(filePath2)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

  */
// This is async/await approach

const fetchAllText = async () => {
  try {
    //const firstText = await getTextFromFile(filePath);
    //const secondText = await getTextFromFile(filePath2);

    // Here we are using promisify function.
    const firstText = await readFilePromise(filePath, "utf8");
    const secondText = await readFilePromise(filePath2, "utf8");

    console.log(firstText);
    console.log(secondText);
  } catch (error) {
    console.log(error);
  }
};
fetchAllText();
