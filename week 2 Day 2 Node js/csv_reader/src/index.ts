
import fs from "fs"
import { createReadStream,createWriteStream } from "fs"
import http from "http"


//!  direct read and write csv file

// const readStream=fs.createReadStream("./1mb.csv",{
//     highWaterMark:64*1024
// })


// const readStream:fs.ReadStream=fs.createReadStream("./1mb.csv","utf-8")
// const writeStream=fs.createWriteStream("./output.csv")
// readStream.on("data",(chunk)=>{
//     // console.log("chunck wise data 🤣🤣🤣🤣🤣🤣🤣 ",chunk)
//     console.log(chunk.length)
//     writeStream.write("chunck wise data 🤣🤣🤣🤣🤣🤣🤣 ")
//     writeStream.write(chunk)
// })

// readStream.on("end",()=>{
//     console.log("file read successfully🤣🤣🤣🤣🤣🤣🤣🤣")
//     writeStream.end()
// })


// ! with server read csv file

const server=http.createServer((req,res)=>{
    if(req.url==="/go" && req.method==="GET"){
        res.writeHead(200,{
            "content-type":"application/json"
        })
        res.write("hello from node server")
        res.end()
    }


    if(req.url==="/csv" && req.method==="POST"){
        const writeStream=fs.createWriteStream("./serverCSV.csv")

        req.on("data",(chunk)=>{
            console.log(chunk)
            writeStream.write(chunk)
        })
        
        res.end("data read")
    
}

})

server.listen(3000,()=>{
    console.log("Server is running on port 3001")
})