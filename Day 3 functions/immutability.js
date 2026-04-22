//! primitive data types are immutable it means when we reassign value to primitive data type it does not change that value at same address it create a new memory to store thr updated variable

let a=10;
a=20
console.log(a)
// here a is not override at same address the new value is assigned at the new address

let str="sudhir"
str+=" kumar"
console.log(str)


// ! non primitive data types are mutable because it can be modified lated at the same location it is stored 

let arr=[1,2,3,4,5,6]
arr[2]=0
console.log(arr)

let arr2=arr
arr2[2]=3  // mutable because it create a copy with their reference shallow copy
console.log(arr)
console.log(arr2)