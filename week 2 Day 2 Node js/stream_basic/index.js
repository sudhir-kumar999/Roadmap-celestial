import fs from "fs"
// console.log(fs)

let writeStream=fs.createWriteStream("./sample.txt")
console.log(writeStream.write("hello"))