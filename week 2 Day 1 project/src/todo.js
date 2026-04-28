import fs from "fs";
// const chalk=require("chalk")
// import chalk from "chalk"
const action = process.argv[2];
const todo = process.argv[3];
let updateTask = process.argv[4];
let todoItems = [];
function add() {
    let obj = {
        "id": Date.now(),
        "tasks": todo,
        "status": "pending",
        "dueDate": updateTask
    };
    if (!updateTask) {
        console.log("plz enter due date");
        return;
    }
    // todoItems.push(obj)
    let result = fs.readFileSync("./src/todo.json", "utf-8");
    if (result.length != 0) {
        // console.log(JSON.parse(result))
        let parseResult = JSON.parse(result);
        let newObj = [...parseResult, obj];
        fs.writeFileSync("./src/todo.json", JSON.stringify(newObj));
        // console.log(chalk.green("data added"))
    }
    else {
        todoItems.push(obj);
        fs.writeFileSync("./src/todo.json", JSON.stringify(todoItems));
        // console.log(chalk.green("data added"))
    }
}
function list() {
    // console.log(chalk.bgYellow("list run"))
    let nowDate = new Date();
    // console.log(nowDate)
    let result = fs.readFileSync("./src/todo.json", "utf-8");
    if (result.length === 0) {
        console.log("No data found");
    }
    else {
        let arrayData = JSON.parse(result);
        // console.log(arrayData)
        arrayData.forEach((ele) => {
            // if(ele.dueDate <nowDate){
            if (!ele.dueDate)
                return;
            if (new Date(ele.dueDate) < nowDate) {
                // console.log(chalk.bgRed("warning"))
                ele.message = "overdue detected";
            }
        });
        console.log(arrayData);
    }
    // console.log(chalk.bgYellow("list end"))
}
function statusChange() {
    let result = fs.readFileSync("./todo.json", "utf-8");
    let parseResult = JSON.parse(result);
    // console.log(parseResult)
    let item = parseResult.find((ele) => (ele.id) == todo);
    if (item) {
        item.status = "done";
        // console.log("item",item)
        let newItem = parseResult.filter((ele) => ele.id != todo);
        // console.log(newItem)
        let finalData = [...newItem, item];
        console.log("finaldata", finalData);
        fs.writeFileSync("./todo.json", JSON.stringify(finalData));
        // console.log(chalk.bgRed("status changed"))
    }
    else {
        console.log("item not found");
    }
}
if (action == "add") {
    add();
}
if (action == "list" && todo != "--status=pending" && todo != "--status=done") {
    list();
}
if (action === "status") {
    statusChange();
}
// if(action==="update"){
//     update()
// }
// if(action==="delete"){
//     deleteTask()
// }
// if(action==="list" && todo=="--status=pending"){
//     filter()
// }
// if(action==="list" && todo=="--status=done"){
//     filterDone()
// }
// if(action==="search"){
//     search()
// }
// if(action=="help"){
//     help()
// }
