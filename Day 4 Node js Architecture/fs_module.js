const fs=require("fs")


// ! All the methods of fs module return undefined except readfile method 


// ! Reading a file synchronously
// console.log("start")
// let res=fs.readFileSync("./test.txt","utf-8")
// console.log(res)
// console.log("end")

// ! Reading a file asynchronously
// console.log("start")
// let res2=fs.readFile("./test.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })
// console.log("end")

// ! writing to a file Synchronously it will delted the previoud content and overwrite with new content
// console.log("start")
// let res3=fs.writeFileSync("./test.txt","sudhir kumar singh")
// // console.log(res3)
// console.log("end")


// ! writing to a file asynchronously
// fs.writeFile("./test.txt","patna bihar india",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//     console.log("file saved data changed")
//     }
// })

// ! append to a file synchronously it will append the new text with the previous content
// console.log("start")
// fs.appendFileSync("./test.txt","sudhir kumar")
// console.log("done")

// ! appending to a file asynchronously
// console.log("start")
// fs.appendFile("./test.txt","sudhir kumar singh hajipur vaishali",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file write successfully")
//     }
// })
// console.log("end")

// ! delete a file synchronously
// console.log("start")
// fs.unlinkSync("./demo.txt")
// console.log("file deleted")

// ! delete a file asynchronously
// console.log("start")
// fs.unlink("./demo2.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log("file deleted")
//     }
// })
// console.log("end")

// ! Rename a file 

// fs.renameSync("./test.txt","pdf.txt")

// ! working with folder with fs module

// fs.mkdirSync("./backend")
// fs.mkdirSync("./backend/js")
// fs.mkdirSync("./backend/js/user.js")

// ! create a nested folder at one time
// fs.mkdirSync("./backend/js/user.js",{recursive:true})

// ! renaming a folder 
// fs.renameSync("./backend","server")

// ! Deleting a folder
// fs.rmdirSync("./server/js")



const fsp=require("fs/promises")
let writefile=fsp.mkdir("./back/user.js",{recursive:true});
writefile.then(()=>{
    console.log("file created")
}).catch((err)=>{
    console.log("error",err)
})

let writeFile=fsp.writeFile("./test.txt","text changed through promises")
writeFile.then(()=>{
    console.log("file changed")
}).catch((error)=>{
    console.log("error occured")
})