
import http from "http"
import fs from "fs"
import { createReadStream , createWriteStream } from "fs"

const server=http.createServer((req,res)=>{
    // res.write("helllo")
    // res.end()

    if(req.url==="/get" && req.method==="GET"){
        res.writeHead(200,{
            "content-type":"application/json"
        })
        res.end("working get")
    }
    if(req.url==="/post" && req.method==="POST"){
        let body = "";
        const writeStream=fs.createWriteStream("./output.mp3")
    req.on("data", (chunk) => {
      console.log("chunks",chunk.toString())
      console.log(chunk.length)
        writeStream.write(chunk)

    //   res.end(readStream)
      
      
    });

    req.on("end", () => {
      let readStream:fs.ReadStream=fs.createReadStream("./output.mp3")

    // console.log("Final Body:", readStream);
    // res.write(body);
    res.writeHead(200,{
        "content-type":"audio/mpeg"
    })
    readStream.on("data",(chunk)=>{
    res.write(chunk)

    })
    readStream.on("end",()=>{
        console.log("file send to response")
    })
    res.end()
    })
    }

})

server.listen(3000,()=>{
    console.log("server is running on port 3000")
})