

import fs from "fs"
// const chalk=require("chalk")
// import chalk from "chalk"
const action:string | undefined=process.argv[2]
const todo:string | undefined |number=process.argv[3]
let updateTask:Date |undefined|number|string=process.argv[4]


// console.log(action)
// console.log(typeof(action))
// console.log(todo)
// console.log(typeof(todo))
// console.log(updateTask)
// console.log(typeof(updateTask))

type User={
    id:number;
    tasks:string | undefined |number|Date;
    status:"pending" | "done"
    dueDate:string | undefined |Date |number
    message?:string
}
let todoItems:User[]=[]
function add(){
    let obj:User={
        "id":Date.now(),
        "tasks":todo,
        "status":"pending",
        "dueDate":updateTask
    }
    if(!updateTask){
        console.log("plz enter due date")
        return 
    }
    // todoItems.push(obj)
    let result:string=fs.readFileSync("./src/todo.json","utf-8")

    if(result.length!=0){
    // console.log(JSON.parse(result))
    let parseResult: User[]=JSON.parse(result)
    let newObj:User[]=[...parseResult,obj]
    fs.writeFileSync("./src/todo.json",JSON.stringify(newObj))
    // console.log(chalk.green("data added"))

    }else{
        todoItems.push(obj)
        fs.writeFileSync("./src/todo.json",JSON.stringify(todoItems))
    // console.log(chalk.green("data added"))

    }
}


function list():void{
    // console.log(chalk.bgYellow("list run"))
    let nowDate:Date=new Date()
    // console.log(nowDate)
    let result:string=fs.readFileSync("./src/todo.json","utf-8")
    if(result.length===0){
        console.log("No data found")
    }else{
    let arrayData:User[]=JSON.parse(result)
    // console.log(arrayData)
    arrayData.forEach((ele)=>{
        // if(ele.dueDate <nowDate){
        if (!ele.dueDate) return
        if (new Date(ele.dueDate) < nowDate) {
    // console.log(chalk.bgRed("warning"))

            ele.message="overdue detected"
        }
    })
    console.log(arrayData)
    }
    
    // console.log(chalk.bgYellow("list end"))
}


function statusChange():void{
    let result:string=fs.readFileSync("./src/todo.json","utf-8")
    let parseResult:User[]=JSON.parse(result)
    // console.log(parseResult)
    const id=Number(todo)
    let item :User |undefined=parseResult.find((ele)=>(ele.id)==id)
    if(item){
      
        item.status="done"

    
    console.log("item",item)
    let newItem:User[]=parseResult.filter((ele)=>ele.id!=todo)
    // console.log(newItem)
    let finalData:User[]=[...newItem,item]
    console.log("finaldata",finalData)
    fs.writeFileSync("./src/todo.json",JSON.stringify(finalData))
    // console.log(chalk.bgRed("status changed"))
    }else{
        console.log("item not found")
    }

}


function update():void{
    let result:string= fs.readFileSync("./src/todo.json","utf-8")
    // console.log(JSON.parse(result))
    let parseResult:User[]=JSON.parse(result)
    // console.log(parseResult)
    const id=Number(todo)

    let item:User | undefined=parseResult.find((ele)=>ele.id==id)
    console.log(item)
    if(!item){
        console.log("No item found with the provided id")
        return
    }
        item.tasks=updateTask

    
    // console.log(item)
    let newItem:User[]=parseResult.filter((ele)=>ele.id!=id)
    console.log(newItem)

    let final:User[]=[...newItem,item]
    console.log(final)
    fs.writeFileSync("./src/todo.json",JSON.stringify(final))

}

function deleteTask():void{
    let result:string=fs.readFileSync("./src/todo.json","utf-8")
    // console.log(JSON.parse(result))
    let parseResult:User[]=JSON.parse(result)
    // console.log(parseResult)
    let filter:User[]=parseResult.filter((ele)=>ele.id!=todo)
    // console.log(filter)
    if(filter.length==0){
        console.log("no item found with given id")

    }else{
        // filter.pop()
        // console.log(chalk.bgRed("Task deleted"))
    fs.writeFileSync("./src/todo.json",JSON.stringify(filter))

    }
}



function filter():void{
    console.log("filter run")
    let result:string=fs.readFileSync("./src/todo.json","utf-8")
    // console.log(JSON.parse(result))
    let parseResult:User[]=JSON.parse(result)
    let filterData:User[]=parseResult.filter((ele)=>ele.status=="pending")
    // console.log(chalk.bgRed("Status Pending Tasks"))
    console.log(filterData)
}

function filterDone(){
    console.log("filter run")
    let result:string=fs.readFileSync("./src/todo.json","utf-8")
    // console.log(JSON.parse(result))
    let parseResult:User[]=JSON.parse(result)
    let filterData:User[]=parseResult.filter((ele)=>ele.status=="done")
    // console.log(chalk.bgRed("Status done Tasks"))
    console.log(filterData)
}

function search(){
    let result:string=fs.readFileSync("./src/todo.json","utf-8")
    let parseResult:User[]=JSON.parse(result)
    // console.log(parseResult)
    let search:User[]=parseResult.filter((ele)=>ele.tasks===todo)
    console.log(search)
}

function help(){
    console.log("1. Add task => node file.js add task_name date")
    console.log("2. Edit task => node file.js update task_id new Task")
    console.log("3. change status of task => node file.js status task_id")
    console.log("4. Delete task => node file.js delete task_id")
    console.log("5. filter pending task => node file.js list --status=pending")
    console.log("6. filter done task => node file.js list --status=done")
}



if(action=="add"){
    add()
}
if(action=="list" && todo!="--status=pending" && todo!="--status=done"){
    list()
}
if(action==="status"){
    statusChange()
}
if(action==="update"){
    update()
}
if(action==="delete"){
    deleteTask()
}
if(action==="list" && todo=="--status=pending"){
    filter()
}
if(action==="list" && todo=="--status=done"){
    filterDone()
}
if(action==="search"){
    search()
}
if(action=="help"){
    help()
}