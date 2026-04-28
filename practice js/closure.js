function balance(){
    let balance=0;
    return function(deposite){
        balance+=deposite
        return balance
    }
}

let res=balance()
let bal=res(300)
console.log(bal)