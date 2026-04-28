let arr=[1,2,3,4]


function double(a){
    return a*2
}

Array.prototype.myMethod=double
arr.myMethod((arr[2]))
console.log(arr.myMethod((arr[2])))
