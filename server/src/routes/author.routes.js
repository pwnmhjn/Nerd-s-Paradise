import { Router } from "express";
import { verifyJwt } from "../middleware/auth.middleware.js";
import { getAuthors } from "../controllers/author.controller.js";



const router = Router()

router.route("/get-authors", verifyJwt, getAuthors)



export default router;