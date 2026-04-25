const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/go" && req.method === "GET") {
    res.write("go hello from get api from node server");
    res.end()
  }

  if (req.url === "/post" && req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      console.log("chunks",chunk.toString())
      console.log(chunk.length)
      body += chunk
      
      
    });

    req.on("end", () => {
    console.log("Final Body:", body);
    res.write(body);
    res.end();
  });
  }
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
