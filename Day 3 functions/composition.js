// function one(x){
//     return x+5
// }
// function two(y){
//     return y+10
// }

// function three(f,g){
//     return function(x){
//         return f(g(x))
//     }
// }

// let res=three(one,two)(5)
// console.log(res)


// real project uses

function trim(str){
    return str.trim(" ")
}
function upperCase(str){
    return str.toUpperCase()
}
function validate(str){
    if(str==" "){
        return false
    }
    return true
}

