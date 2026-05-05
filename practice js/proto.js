const arr=[1,2,3,4,5]

function add(x){
    return x+2
}
Array.prototype.myMethod=add
for(let i=0;i<arr.length;i++){
let res=arr.__proto__.myMethod(arr[i])
console.log(res)
}
// console.log(arr.__proto__.myMethod(2))