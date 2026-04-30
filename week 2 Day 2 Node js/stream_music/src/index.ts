
import http from "http"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const server = http.createServer((req, res) => {

    if (req.url === "/get" && req.method === "GET") {
        res.writeHead(200, {
            "content-type": "application/json"
        });
        res.end("working get");
    }

    if (req.url === "/post" && req.method === "POST") {

        const filePath:string = path.join(__dirname, "output.mp3")

        const writeStream:fs.WriteStream = fs.createWriteStream(filePath)


        req.on("data", (chunk:Buffer) => {
            console.log("chunks", chunk.toString());
            console.log(chunk.length);
            writeStream.write(chunk);
        });

        req.on("end", () => {
            writeStream.end();
            console.log(" File saved:", filePath)

            res.writeHead(200)
            res.end("File uploaded successfully")
        })
    }

    if (req.url === "/music" && req.method === "GET") {

        const filePath = path.join(__dirname, "output.mp3")

         res.writeHead(200, {
        "Content-Type": "audio/mpeg"
    });

    const readStream = fs.createReadStream(filePath);

    readStream.on("data", (chunk) => {
        console.log("Sending chunk:", chunk.length);
        res.write(chunk);  
    });

    readStream.on("end", () => {
        res.end(); 
    });
    }

})

server.listen(3000, () => {
    console.log("Server is running on port 3000")
})
