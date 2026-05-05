// function balance(){
//     let balance=0;
//     return function(deposite){
//         balance+=deposite
//         return balance
//     }
// }

// let res=balance()
// let bal=res(300)
// console.log(bal)

// while(false){
// console.log(5)
// }

// console.log(true + false)
// console.log(true+1)


// console.log("Start");
// function outer(){
//   console.log("Outer start");
//   var x = 10;
//   function inner() {
//     console.log("Inner:", x);
//   }
//   return function () {
//     var x = 20;
//     setTimeout(() => {
//       console.log("Timeout 1");
//       Promise.resolve().then(() => {
//         console.log("Promise inside Timeout");
//         setTimeout(() => {
//           console.log("Timeout 2");
//         }, 0);
//       });
//     }, 0);
//     inner();
//     Promise.resolve().then(() => {
//       console.log("Promise 1");
//       async function asyncFunc() {
//         console.log("Async start");
//         await Promise.resolve().then(() => {
//           console.log("Awaited Promise");
//         })
//         console.log("Async end");
//       }
//       asyncFunc();
//     });
//   };
// }
// var outerFunc = outer();
// setTimeout(() => {

//   console.log("Timeout 3");

// }, 0);
// outerFunc();
// console.log("End");
 




// console.log("Start");
// async function test() {
//   console.log("A1");

//   setTimeout(() => {
//     console.log("T1");
//   }, 0);

//   await Promise.resolve().then(() => {
//     console.log("P1");

//     Promise.resolve().then(() => {
//       console.log("P2");
//     });
//   });

//   console.log("A2");

//   setTimeout(() => {
//     console.log("T2");

//     Promise.resolve().then(() => {
//       console.log("P3");
//     });

//   }, 0);

//   await Promise.resolve();
//   console.log("A3");
//   Promise.resolve().then(() => {
//     console.log("P4");
//   });
// }

// test();
// Promise.resolve().then(() => {
//   console.log("P5");
// }).then(() => {
//   console.log("P6");
// });

// setTimeout(() => {
//   console.log("T3");
// }, 0);
// console.log("End");





console.log("Start");

async function test() {
  console.log("A1");

  setTimeout(() => {
    console.log("T1");

    Promise.resolve().then(() => {
      console.log("P1");

      setTimeout(() => {
        console.log("T2");
      }, 0);
    });

  }, 0);

  await Promise.resolve();

  console.log("A2");

  Promise.resolve().then(() => {
    console.log("P2");
  });

  await Promise.resolve().then(() => {
    console.log("P3");
  });

  console.log("A3");
}

test();

Promise.resolve().then(() => {
  console.log("P4");
}).then(() => {
  console.log("P5");
});

setTimeout(() => {
  console.log("T3");
}, 0);

console.log("End");


// function outer(){
//   let count=0;
//   return function inner(){
//     count++
//     console.log(count)
//   }
// }
// let res=outer()
// res()
// res()


// function currying(a){
//   return function b(b){
//     return function c(c){
//       console.log(a+b+c)
//     }
//   }
// }
// currying(5)(4)(7)



// function add(a,b){
//   return a+b
// }
// function multiply(b){
//   return b*2
// }

// function composition(...fn){
//   return function(a,b){
//     let result=fn[0](a,b)
//     for(let i=1;i<fn.length;i++){
//       result=fn[i](result)
//     }
//     return result
//   }
// }

// let res=composition(add,multiply)
// console.log(res(5,6))