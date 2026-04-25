//!  libuv have total of six phase 4 at outer loop and 2 at inner loop

//  timer phase -- it is the starting phase of event loop . it is used to execute the callback of expired timer
//  process.nextTick() -- it is a microtask queue of node js which is highest priority than other queue
//  promise microtask queue of js it has lower priority than process.nextTck() but higher than others
//  poll phase -- poll phase is the second phase where libuv performs i/o operations like reading file , database call
// check phase -- check phase is used to execute the callback of setimmediate function 
//  close phase --  when a connection or socket is closed then their callback is run in close phase.

// setTimeout(() => {
//     console.log("timeout")
// }, 1000);

// setImmediate(()=>{
//     console.log("immediate")
// })

// console.log("start");

// setTimeout(() => console.log("timeout"), 1000);

// setImmediate(() => console.log("immediate"));

// console.log("end");
// //  it gives different output sometime because it depend on event loop timing

const fs = require("fs");

console.log("start");

setTimeout(() => console.log("timeout1"), 0);

setImmediate(() => console.log("immediate1"));

fs.readFile(__filename, () => {
  console.log("file");

  setTimeout(() => console.log("timeout2"), 0);

  setImmediate(() => console.log("immediate2"));

  process.nextTick(() => console.log("nextTick"));

  Promise.resolve().then(() => console.log("promise"));
});

Promise.resolve().then(() => console.log("promise-main"));

process.nextTick(() => console.log("nextTick-main"));

console.log("end");