//!  manually making reduce function 

function reduce(arr,callback,initial){
    let result=initial;

    for(let i=0;i<arr.length;i++){
        result=callback(result,arr[i])
    }
    return result
}

function add(result,x){
    return result+=x
}
let arr=[2,3,4,5,6]
let res=reduce(arr,add,0)
console.log(res)


// ! reduce can alone work like map and filter 

// ! making filter and map function using reduce method
function makeReduce(array,callback){
    let arr=[]
    let result;
    for(let i=0;i<array.length;i++){
        result=callback(array[i])

        // ! for filter
        // console.log(result)
        // if(result==true){
        //     arr.push(array[i])
        // }

        // ! for map
        arr.push(result)
    }
    return arr
}

function filter(ele){
    if(ele%2==0){
        return true
    }else{
        return false
    }
}

function map(ele){
    return ele*2
}
// let array=[2,3,4,5,6,7,8]
// let response=makeReduce(array,map)
// console.log(response)