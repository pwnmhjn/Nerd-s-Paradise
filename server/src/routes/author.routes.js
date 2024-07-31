import { Router } from "express";
import { verifyJwt } from "../middleware/auth.middleware.js";
import { getAuthors } from "../controllers/author.controller.js";



const router = Router()

router.route("/get-authors").get(verifyJwt, getAuthors)



export default router;