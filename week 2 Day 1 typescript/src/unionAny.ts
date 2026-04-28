
// union means it can store either number or string
let details :number | string=10

const orders=[1,2,3,4,5,6,7]

// let currOrder;
let currOrder:number | undefined;

for(let order of orders){
    if(order===3){
        currOrder=order
        break
    }
}

console.log(currOrder)