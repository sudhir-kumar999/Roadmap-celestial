//!  Node js is an event-driven architectue

// ! Event-Driven – Event-driven means that when any event occurs, then a callback function is triggered, and before any event trigger, nothing is working, just waiting for events to occur. 
// Like – when a user hits the request on the server, an event occurs on the server side, and then it executes a function and sends a response to the user.


// ! Non - blocking
// when node run some time taking code and the code takes time to complete then it stop the execution of code and wait for the code to be executed and then start executing code this is blocking but node js uses a non blocking architecture which allows to run time taking task in background without blocking the main thread 


// ! Blocking (Synchronous code)
// import fs from "fs"
const fs = require("fs")
// console.log("start")

// //  if the file size is too big it stop the execution of next code 
// let res=fs.readFileSync("./sample.txt")
// console.log(res.toString())

// console.log("end")

//! Non - Blocking arctitecture run a callback when task is completed (Asynchronous code)

console.log("start")
let res=fs.readFile("./sample.txt",(data,error)=>{
    if(error){
        console.log(error)
    }
    console.log(data)
})
console.log("end")