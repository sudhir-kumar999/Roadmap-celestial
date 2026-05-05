function one(callback){
    console.log("one called")
    callback()
}
function two(callback){
    console.log("two called")
    callback()
}
function three(callback){
    console.log("three called")
    callback()
}
function four(callback){
    console.log("four called")
    callback()
}
function five(callback){
    console.log("five called")
    callback()
}
function six(callback){
    console.log("six called")
    callback()
}

// one(()=>{
//     two(()=>{
//         three(()=>{
//             four(()=>{
//                 five(()=>{
//                     six(()=>{
//                         console.log("done")
//                     })
//                 })
//             })
//         })
//     })
// })

function one(){
    return new Promise((resolve,reject)=>{
        resolve("one")
    })
}
function two(){
    return new Promise((resolve,reject)=>{
        resolve("two")
    })
}
function three(){
    return new Promise((resolve,reject)=>{
        resolve("three")
    })
}
function four(){
    return new Promise((resolve,reject)=>{
        resolve("four")
    })
}
function five(){
    return new Promise((resolve,reject)=>{
        resolve("five")
    })
}

one().then((data)=>{
    console.log(data)
    return two()
}).then((data)=>{
    console.log(data)
    return three()

}).then((data)=>{
    console.log(data)
    return four()

}).then((data)=>{
    console.log(data)
   return five()

}).then((data)=>{
    console.log(data)
}).catch((error)=>{
console.log(error)
})