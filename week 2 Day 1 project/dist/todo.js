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
    let result = fs.readFileSync("./src/todo.json", "utf-8");
    let parseResult = JSON.parse(result);
    // console.log(parseResult)
    const id = Number(todo);
    let item = parseResult.find((ele) => (ele.id) == id);
    if (item) {
        item.status = "done";
        console.log("item", item);
        let newItem = parseResult.filter((ele) => ele.id != todo);
        // console.log(newItem)
        let finalData = [...newItem, item];
        console.log("finaldata", finalData);
        fs.writeFileSync("./src/todo.json", JSON.stringify(finalData));
        // console.log(chalk.bgRed("status changed"))
    }
    else {
        console.log("item not found");
    }
}
function update() {
    let result = fs.readFileSync("./src/todo.json", "utf-8");
    // console.log(JSON.parse(result))
    let parseResult = JSON.parse(result);
    // console.log(parseResult)
    const id = Number(todo);
    let item = parseResult.find((ele) => ele.id == id);
    console.log(item);
    if (!item) {
        console.log("No item found with the provided id");
        return;
    }
    item.tasks = updateTask;
    // console.log(item)
    let newItem = parseResult.filter((ele) => ele.id != id);
    console.log(newItem);
    let final = [...newItem, item];
    console.log(final);
    fs.writeFileSync("./src/todo.json", JSON.stringify(final));
}
function deleteTask() {
    let result = fs.readFileSync("./src/todo.json", "utf-8");
    // console.log(JSON.parse(result))
    let parseResult = JSON.parse(result);
    // console.log(parseResult)
    let filter = parseResult.filter((ele) => ele.id != todo);
    // console.log(filter)
    if (filter.length == 0) {
        console.log("no item found with given id");
    }
    else {
        // filter.pop()
        // console.log(chalk.bgRed("Task deleted"))
        fs.writeFileSync("./src/todo.json", JSON.stringify(filter));
    }
}
function filter() {
    console.log("filter run");
    let result = fs.readFileSync("./src/todo.json", "utf-8");
    // console.log(JSON.parse(result))
    let parseResult = JSON.parse(result);
    let filterData = parseResult.filter((ele) => ele.status == "pending");
    // console.log(chalk.bgRed("Status Pending Tasks"))
    console.log(filterData);
}
function filterDone() {
    console.log("filter run");
    let result = fs.readFileSync("./src/todo.json", "utf-8");
    // console.log(JSON.parse(result))
    let parseResult = JSON.parse(result);
    let filterData = parseResult.filter((ele) => ele.status == "done");
    // console.log(chalk.bgRed("Status done Tasks"))
    console.log(filterData);
}
function search() {
    let result = fs.readFileSync("./src/todo.json", "utf-8");
    let parseResult = JSON.parse(result);
    // console.log(parseResult)
    let search = parseResult.filter((ele) => ele.tasks === todo);
    console.log(search);
}
function help() {
    console.log("1. Add task => node file.js add task_name date");
    console.log("1. Edit task => node file.js update task_id new Task");
    console.log("1. change status of task => node file.js status task_id");
    console.log("1. Delete task => node file.js delete task_id");
    console.log("1. filter pending task => node file.js list --status=pending");
    console.log("1. filter done task => node file.js list --status=done");
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
if (action === "update") {
    update();
}
if (action === "delete") {
    deleteTask();
}
if (action === "list" && todo == "--status=pending") {
    filter();
}
if (action === "list" && todo == "--status=done") {
    filterDone();
}
if (action === "search") {
    search();
}
if (action == "help") {
    help();
}
//# sourceMappingURL=todo.js.map