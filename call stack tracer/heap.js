// stored in heap memory and reference point to stack size is not fixed before compilation so stored into heap
// let arr=[1,2,3,4,5]
// let arr2=arr
// arr2[0]=9
// console.log(arr)
// console.log(arr2)


function mainFun(){
    let x=10
    console.log("hello")
}


mainFun.language="hindi"

let copyFn=mainFun 
// it copy by reference property of function it does not copy the internal variable of a function because it is local scoped and local scope is not shared
copyFn.language="english"

console.log(mainFun)
console.log(copyFn)
console.log(copyFn.x)

