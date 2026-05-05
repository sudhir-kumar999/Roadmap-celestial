let arr = [1, 2, 3, 4, 5, 6, 7];
let arr1 = [2, 3, 4, 5, 6, 6];
// let str=arr.toString() //converts the given value into the string with each element separated by commas.
// console.log(str)
// console.log(arr)
// let newArr=arr.concat(arr1)
// console.log(newArr)
// let join=arr.join("|") // return a new string with concat aa element of array
// console.log(join)

// let splice=arr.splice(1,1,"k")
// console.log(splice)
// console.log(arr)

function mapMethod(arr, callback) {
    let newArr=[]
  for (let i = 0; i < arr.length; i++) {
        newArr[i]=callback(arr[i])
  }
  return newArr
}

function sum(ele){
    return ele*2
}
const res=mapMethod(arr,sum)
console.log(res)
