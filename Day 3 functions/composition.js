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
// function validate(str){
//     if(str.includes("@")){
//         return true
//     }else{
//     return false
//     }
// }



function final(...arg){
    return function(x){
        let result=x
        for(let i=0;i<arg.length;i++){
            result=arg[i](result)
        }
    return result
    }
}

let res=final(trim,upperCase)
console.log(res("sudhir@"))
