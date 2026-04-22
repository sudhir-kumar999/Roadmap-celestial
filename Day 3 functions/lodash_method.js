//  i have to make array .map() method by myself


// let arr=[1,2,3,4,5]

// let res=arr.map((ele)=>(
//     ele*2
// ))
// console.log(res)


//! manualy created a map function of array method 

// function map(array,point){
//     let result=[]
//     for(let i=0;i<array.length;i++){

//         result[i]=point(array[i])
//     }
//     return result
// }
// function callback(ele){
//     return ele*3
// }
// let array=[2,3,4,5,6]

// let res2=map(array,callback)
// console.log(res2)



//!  manually making filter method

// function filter(arr,callback){
//     let result=[]
//     let index=0;
//     for(let i=0;i<arr.length;i++){
//         let solve=callback(arr[i])
//         if(solve==true){
//         result[index]=arr[i]
//         index++;
//         }
//     }
//     return result
// }
// // function callback(ele){
// //     if(ele%2==0){
// //         return ele
// //     }
// // }

// function callback(ele){
//     if(ele>'A' && ele<'Z'){
//         return true
//     }
// }
// // let arr=[4,5,6,7,8,9]
// let arr=["s","u","D","H","i","r"]
// let res=filter(arr,callback)
// console.log(res)


//! manually making reduce method


function reduce(array,callback){
let result=0;

    let final
    for(let i=0;i<array.length;i++){
        result=callback(result,array[i])
        // console.log(final)
    }
    return result

}
function callback(result,ele){
    return result+ele

}

let array=[2,3,4,5,6,7,8]
let response=reduce(array,callback)
console.log(response)