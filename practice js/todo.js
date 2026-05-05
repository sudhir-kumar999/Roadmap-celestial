const fs=require("fs")
const { json } = require("stream/consumers")

function add(task){
    let read=fs.readFileSync("/Users/sudhirkumar/Roadmap-celestial/practice js/todo.json","utf-8")
    let arr=JSON.parse(read)
    let obj={
    id:Date.now(),
    tasks:task
    }
    arr.push(obj)
    let write=fs.writeFileSync("/Users/sudhirkumar/Roadmap-celestial/practice js/todo.json",JSON.stringify(arr))
    let read2=fs.readFileSync("/Users/sudhirkumar/Roadmap-celestial/practice js/todo.json","utf-8")
    console.log(JSON.parse(read2))
}
// add("sudhir")
// add(3)

function list(){
    let read=fs.readFileSync("/Users/sudhirkumar/Roadmap-celestial/practice js/todo.json","utf-8")
    console.log(JSON.parse(read))
}
// list()


function update(id,neww){
    let read=fs.readFileSync("/Users/sudhirkumar/Roadmap-celestial/practice js/todo.json","utf-8")
    let arr=JSON.parse(read)
    let item=arr.find((ele)=>ele.id==id)
    console.log(item)
    if(!item){
        console.log("no item found")
    }
    
    item.tasks=neww
    let write=fs.writeFileSync("/Users/sudhirkumar/Roadmap-celestial/practice js/todo.json",JSON.stringify(arr))
    let read2=fs.readFileSync("/Users/sudhirkumar/Roadmap-celestial/practice js/todo.json","utf-8")
    console.log(JSON.parse(read2))

}
update(1777791503045,"kumar")