// ! Range Error
//  Range error is thrown when we pass a value as an argument inside function which is not in allowed range

function range(n){
    if(!(n>=500 &&n<=1000)){
        throw new RangeError("argument must be between 500 and 1000")
    }
}
try {
    // range(1200)
} catch (error) {
    if(error instanceof RangeError){
    console.log(error)
    }
}

// ! Reference Error

let x=10
function reference(){
    let a
    console.log(a)
    a=20
}

try {
// reference()

} catch (err) {
  if (err instanceof ReferenceError) {
    console.warn("Caught a reference error:", err.message);
  }
}


