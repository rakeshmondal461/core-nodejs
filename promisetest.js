/*

function runPromise() {
  return new Promise((resolve, reject) => {
    if (5 > 2) {
      //   setTimeout(() => {
      //     resolve("Greater than");
      //     console.log("Print Two!");
      //   }, 2000);
      resolve("Greater than");
    } else {
      reject("Not greater than");
    }
  });
}

console.log("Print one!");

runPromise()
  .then((result) => console.log("Print Two!"))
  .catch((err) => console.log(err));

process.nextTick(() => {
  console.log("Print Three!");
});

console.log("Print Four!");
*/

const promise1 = Promise.resolve("Result 1");
const promise2 = Promise.resolve("Result 2");
const promise3 = Promise.reject(new Error("Failed"));

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch((error) => console.error(error.message));
