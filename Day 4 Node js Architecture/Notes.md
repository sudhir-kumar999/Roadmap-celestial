Assigned Tasks – Node.js and its architecture, then libuv and its internal working, the fs module.

Starting from Node.js – Node.js is a JavaScript runtime environment that allows running JavaScript code outside the web browser on the server side. Node.js uses an event-driven and non-blocking architecture so that the server can handle multiple requests at the same time without blocking the main thread.

Event-Driven – Event-driven means that when any event occurs, then a callback function is triggered, and before any event trigger, nothing is working, just waiting for events to occur.

Like – when a user hits the request on the server, an event occurs on the server side, and then it executes a function and sends a response to the user.

Non-Blocking architecture – Node.js also follows a non-blocking architecture, which allows Node.js to execute JavaScript code without blocking the main thread 

console.log("start")
let res=fs.readFile("./sample.txt",(data,error)=>{
   if(error){
       console.log(error)
   }
   console.log(data.toString())
})
console.log("end")

Here, the reading file is asynchronous, so it will be pushed in the background, and when completed, a callback is executed.

V8 Engine – V8 engine is a type of JavaScript engine which directly converts JS code into machine code for faster execution. The V8 engine works in several steps, like parser, abstract syntax tree, ignition(interpreter), jit compier, and machine code.
At first, JS code is divided into tokens after tokenisation, and a parser makes the abstract syntax tree, checking for syntax errors. If any syntax errors are present, then it will give an error because no abstract is made.
When the abstract syntax tree of the JS code is made, it will move to the next ignition(interpreter) phase, where the abstract syntax trees are converted into bytecode
Then the turbo fan (jit compier) is used to convert the hot functions, like the function which are used multiple times inside the code, then it will create a machine code of that bytecode to improve the performance of the engine. 
After the V8 engine, libuv is covered. Libuv is used because by default JS is single threaded, it can execute only one task at a time and block the main context.

Libuv is a C library which is used to handle asynchronous operations like i/o operation db calls.
Libuv has two components
Event loop
Thread pool

Event loop is a mechanism which continously check which asynchronous operation is completed if async operation is completed, then its callback is sent for execution according to its priority and queue.

The event loop has a total of four phases 

Timer phase
Poll phase
Check phase
Close phase

After every phase, two queues are executed every time: the first one is the process.nextTick(), and the second is the promise (microtask) queue

Then started the file system module of Node.js, which allows Node.js to interact with the file system, such as reading a file, writing a file, renaming a file, deleting a file, appending to a file, creating a folder, deleting a folder, and renaming a folder in both synchronous and asynchronous ways
