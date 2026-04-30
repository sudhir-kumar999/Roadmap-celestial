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


console.log("Start");
function outer(){
  console.log("Outer start");
  var x = 10;
  function inner() {
    console.log("Inner:", x);
  }
  return function () {
    var x = 20;
    setTimeout(() => {
      console.log("Timeout 1");
      Promise.resolve().then(() => {
        console.log("Promise inside Timeout");
        setTimeout(() => {
          console.log("Timeout 2");
        }, 0);
      });
    }, 0);
    inner();
    Promise.resolve().then(() => {
      console.log("Promise 1");
      async function asyncFunc() {
        console.log("Async start");
        await Promise.resolve().then(() => {
          console.log("Awaited Promise");
        })
        console.log("Async end");
      }
      asyncFunc();
    });
  };
}
var outerFunc = outer();
setTimeout(() => {

  console.log("Timeout 3");

}, 0);
outerFunc();
console.log("End");
 