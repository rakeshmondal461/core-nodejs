/*
setTimeout(() => {
  console.log("this is settimeout 1");
}, 0);
setTimeout(() => {
  console.log("this is settimeout 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside settimeout")
  );
}, 0);
setTimeout(() => {
  console.log("this is settimeout 3");
}, 0);

process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
  console.log("this is process.nextTick 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside next tick")
  );
});
process.nextTick(() => console.log("this is process.nextTick 3"));

Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
Promise.resolve().then(() => {
  console.log("this is Promise.resolve 2");
  Promise.resolve().then(() => console.log("this is Promise.resolve 4"));
  process.nextTick(() =>
    console.log("this is the inner next tick inside Promise then block")
  );
});
Promise.resolve().then(() => console.log("this is Promise.resolve 3"));
*/
setImmediate(() => {
  console.log("Hello from immediate");
});

setTimeout(() => {
  console.log("Hello from timeout");
}, 0);
