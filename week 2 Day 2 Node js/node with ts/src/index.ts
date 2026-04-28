// const obj=(name:string):string=>{
// return name
// }
// console.log(obj("hello"))// obj(10)
import fs from "fs"
import path from "path"
import {createReadStream, createWriteStream} from "fs"

// const inputFile:string=path.join(import.meta.dirname,"input.txt")
// const outputFile:string=path.join(import.meta.dirname,"output.txt")
// let data:fs.ReadStream=createReadStream(inputFile,{encoding:"utf-8",highWaterMark:10})

// const writeStream:fs.WriteStream=createWriteStream(outputFile)

// data.on("data",(chunk:string)=>{
//     console.log("Buffer chunk",Buffer.from(chunk))
//     console.log("received chunk",chunk)
//     writeStream.write(chunk)
// })

// data.on("end",()=>{
//     console.log("file completed")
//     writeStream.end()
// })

// data.on("error",(err)=>{
//     console.log("Error",err)
// })
// writeStream.on("error",(err)=>{
//     console.log("Error",err)
// })
// data.pipe(writeStream)





const inputFile:string=path.join(import.meta.dirname,"../song.mp3")
const outputFile:string=path.join(import.meta.dirname,"output.mp3")
let data:fs.ReadStream=createReadStream(inputFile,{highWaterMark:500})

const writeStream:fs.WriteStream=createWriteStream(outputFile)

data.on("data",(chunk:string)=>{
    console.log("Buffer chunk",Buffer.from(chunk))
    console.log("received chunk",chunk)
    writeStream.write(chunk)
})

data.on("end",()=>{
    console.log("file completed")
    writeStream.end()
})

data.on("error",(err)=>{
    console.log("Error",err)
})
writeStream.on("error",(err)=>{
    console.log("Error",err)
})