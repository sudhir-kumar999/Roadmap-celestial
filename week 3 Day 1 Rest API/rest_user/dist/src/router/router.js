import express from "express";
import { getData } from "../controller/register.js";
const router = express.Router();
router.get("/getData", getData);
export default router;
//# sourceMappingURL=router.js.map