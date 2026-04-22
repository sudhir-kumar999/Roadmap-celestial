function higher(firstFun){
    console.log("higher order function")
    firstFun()
}
function small(){
    console.log("inside function")
}
higher(small)

// here higher is higher order function because it it accept some another function inside it

// ! all array methids are higher order function

let arr=[2,3,4,5,6]

let newArr=arr.map((ele)=>ele*2)
console.log(newArr)


// ! function currying

function one(x){
    return function two(y){
        return function three(z){
            return x*y*z
        }
    }
}
let res=one(5)(2)(3)
console.log(res)

function apiCall(basepoint,endpoint){
    return basepoint+endpoint
}
let res0=apiCall("https://www.com/","user")
let res1=apiCall("https://www.com/","posts")
let res2=apiCall("https://www.com/","like")

console.log(res0)
console.log(res1)
console.log(res2)

function fetch(basepoint){
    return function(endpoint){
        return basepoint+endpoint
    }
}
let fixed=fetch("https://www.com/")
let data1=fixed("user")
let data2=fixed("posts")
console.log(data1)
console.log(data2)