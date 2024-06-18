import express from "express";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();

app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());
app.use("/api/v1/users", userRouter);
export { app };
