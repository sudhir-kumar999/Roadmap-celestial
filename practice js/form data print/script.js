

const data=[]
// console.log(data)


function userSubmit(e){
    e.preventDefault()

    const fname=document.getElementById("fname")
const lname=document.getElementById("lname")
const age=document.getElementById("age")
const userData={
    Name:fname.value +" "+ lname.value,
    Age: age.value
}
console.log(userData)
data.push(userData)
console.log(data)
render()
}

const list = document.getElementById("list")
function render(){
    list.innerHTML = "";
data.forEach((ele,index)=>{
const li=document.createElement("li")
    li.innerText=`${ele.Name} Age=${ele.Age} `
    list.append(li)
})
}