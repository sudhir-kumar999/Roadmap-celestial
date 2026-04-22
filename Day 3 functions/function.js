
//! pure function always return same output when user enters the same input 
function pure(a,b){
    let add=a+b;
    return add
}
let result=pure(5,10)
let res2=pure(5,10)
console.log(result)
console.log(res2)


//! impure function does not return same output on same input it depends on some external dependency aur may modify some external vaiable
let x=10
function impure(y){
    // let x=20
    return x+y
}
let res=impure(5)
console.log(res)

let obj={
    a:10,
    name:"sudhir"
}
// console.log(obj.name)
function checkPure(){
    let b=obj.a=30
    return b
}
let no=checkPure()
console.log(no)
console.log(obj)