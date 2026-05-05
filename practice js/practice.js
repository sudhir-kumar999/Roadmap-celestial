// const obj={
//     name:"ram"
// }
// obj.name="shyam"
// // obj={}
// console.log(obj)

// 
// let n=5
// memoize(n)
// memoize(n)

//  use closure also for memoization

// function memoizee(){
//     let cache={}
//     return function(n){
//         if(cache[n]){
//             console.log("from cache")
//             return cache[n]
//         }else{
//             console.log("from calculate")
//             let res=n*n;
//             cache[n]=res
//             return res
//         }
//     }
// }

// let res=memoizee()
// console.log(res(5))
// console.log(res(5))

// console.log(5*"5")
// console.log("5"-5)
// console.log(1+true)
// console.log((true+1))
// console.log(true+false)
// console.log(false+true)
// // while(false){
// //     console.log("fdcsa")
// // }
// console.log(null+1) // 1
// console.log(undefined+1) // nan
// console.log(null==undefined) //true
// console.log(null===undefined)//false
// console.log(0==false)//true
// console.log(null==null)//true
// console.log(null===null)//true
// console.log(undefined==undefined)//true
// console.log(undefined===undefined)//true
// console.log(NaN==NaN)//false
// console.log(NaN===NaN)//false
// console.log([]+{}) //[obj obj]
// console.log([]+[]) //""
// console.log({}+[]) //[obj obj]
// console.log([1,2]+[3,4]) //1,23,4
// console.log([]===false) //[]="" empty string
// console.log([]+1)
// console.log([1]+1)
// console.log([1,2]=="1,2")


// let obj={
//     name:"sk",
//     city:"noida",
//     home:"bihar"
// }
// let str="sudhir"
// for(let key of str){
//     console.log(key)
// }

function printRect() {
  let height = 5
  let width = 6
  for (let i = 1; i <= height; i++) {
  let pattern=""
    for (let j = 1; j <= width; j++) {
      if(i==1){
        pattern+="*"
      }else{
        pattern+="\n"
      }
    }
    console.log(pattern)

  }
}
printRect()