class person{
    constructor(name,age,city){
        this.name=name
        this.age=age
        this.city=city
    console.log(this.name)
    console.log(this.age)
    console.log(this.city)
    }
}
// let p1=new person("sudhir",22,"patna")
// let p2=new person("kumar",34,"noida")
// console.log(p1)

function calls(name){
    console.log(this.name)

}
let user={
    name:"sudhir"
}
// calls.call(user)

function sum(a,b){
    
    console.log(a+b)
}
sum.apply(null,[2,3])