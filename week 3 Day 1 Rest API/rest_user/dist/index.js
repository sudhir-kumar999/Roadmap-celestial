import express from "express";
import router from "./src/router/router.js";
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.send("hello world");
});
app.use("/user", router);
app.listen(3005, () => {
    console.log("server is running on port 3005");
});
//# sourceMappingURL=index.js.map