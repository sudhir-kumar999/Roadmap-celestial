
// function orderPlaced(callback){
//     setTimeout(() => {
//         console.log("order placed")
//         callback()
//     }, 1000);
// }

const { resolve } = require("node:dns")

// function restaurantAccept(callback){
//     setTimeout(() => {
//         console.log("accepted by restaurant")
//         callback()
//     }, 1000);
// }

// function pizzaPrepare(callback){
//     setTimeout(() => {
//         console.log("pizza are on making")
//         callback()
//     }, 1000);
// }

// function forDelievery(callback){
//     setTimeout(() => {
//         console.log("out for delievery")
//         callback()
//     }, 1000);
// }

// function delievered(callback){
//     setTimeout(() => {
//         console.log("delievered")
//         callback()
//     }, 1000);
// }

// orderPlaced(()=>{
//     console.log("step 1 done")
//     restaurantAccept(()=>{
//         console.log("step 2 done")
//         pizzaPrepare(()=>{
//             console.log("step 3 done")
//             forDelievery(()=>{
//                 console.log("step 4 done")
//                 delievered(()=>{
//                     console.log("all step completed")
//                 })
//             })
//         })
//     })
// })

function orderPlaced(){
    return new Promise((resolve,reject)=>{
        console.log("order placed")
        resolve()
    })
}

function restaurantAccept(){
    return new Promise((resolve,reject)=>{
        console.log("accepted by restaurant")
        resolve()
    })
}

function pizzaPrepare(){
        console.log("pizza are on making")
    return new Promise((resolve,reject)=>{
        // resolve()
    reject("not available")
    })
}

function forDelievery(){
    return new Promise((resolve,reject)=>{
        console.log("out for delievery")
        resolve()
    })
}

function delievered(){
    return new Promise((resolve,reject)=>{
        console.log("delievered")
        resolve()
    })
}

// orderPlaced()
// .then(()=>restaurantAccept())
// .then(()=>pizzaPrepare())
// .then(()=>forDelievery())
// .then(()=>delievered())
// .catch((err)=>{
//     console.log("error occured",err)
// })

let p1= new Promise((resolve,reject)=>{
    resolve("ordered")
})
let p2= new Promise((resolve,reject)=>{
    resolve("restaurant accept")
})

let p3=new Promise((resolve,reject)=>{
    // resolve("pizza prepare")
    reject("not available")
})

let p4=new Promise((resolve,reject)=>{
    resolve("for delievery")
})
let p5=new Promise((resolve,reject)=>{
    resolve("delievered")
})

// p1.then((data)=>{
//     console.log(data)
//     return p2
// }).then((data)=>{
//     console.log(data)
//     return p3
// }).then((data)=>{
//     console.log(data)
//     return p4
// }).then((data)=>{
//     console.log(data)
//     return p5
// }).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log("error",error)
// })

async function orderFlow(){
    try {
        await orderPlaced()
        await restaurantAccept()
        await pizzaPrepare()
        await forDelievery()
        await delievered()

        console.log("all steps completed")
    } catch(err){
        console.log("Error occurred:", err)
    }
}

orderFlow()