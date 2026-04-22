//  simple closure function
function outer(){
    let x=10;
    return function inner(){
        console.log(x)
    }
}
let res= outer()
res()

//  how closure works when calling manually and storing then calling
function one(){
    let x=10
    let count=0;
    return function two(){
        count++
        console.log(count)
    }

}
one()
one()()
one()()
let res2=one()
res2()
res2()