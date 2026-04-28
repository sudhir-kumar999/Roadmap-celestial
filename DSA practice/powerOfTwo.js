function powerOfTwo(n){
    // console.log(2**4)
    // let x=2**n
    while(n>=2){
        n=n/2
        console.log(n)
    }
    if(n==1){
        console.log(true)
    }else{
        console.log(false)
    }
    
}
let n=17
powerOfTwo(n)