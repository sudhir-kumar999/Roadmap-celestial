//  calll stack tracing using macrotask microtask and synchronous code

console.log(1)
function hello(){
    console.log(2)
}
setTimeout(()=>{
    console.log(3)
},0)
let p1=new Promise((resolve,reject)=>{
    console.log(4)
    resolve()
})
p1.then(hello)

console.log(5)

setTimeout(() => {
    console.log(6)
}, 0);
setTimeout(()=>{
    let p2=new Promise((resolve,reject)=>{
        resolve("7")
    },0)
    p2.then((data)=>{
        console.log(data)
    })
},0)

new Promise((resolve,reject)=>{
    console.log(8)
    resolve()
}).then(()=>{
    console.log(9)
})
async function test(){
    console.log(10)
}
console.log(11)
test()



// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const fn = outer();

// fn(); // 1
// fn(); // 2
// fn(); // 3

// function outer() {
//   let x = 10;

//   return function inner() {
//     let y = 20;

//     return function inner2() {
//       console.log(x, y);
//     };
//   };
// }

// const fn = outer()();
// fn();