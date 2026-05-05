function fibo(){
    let n=4
    let a=0;
    let b=1
    for(let i=1;i<=n;i++){
        // console.log(a)
        let temp=a+b
        a=b
        b=temp
    }
    console.log(b)
}
fibo()