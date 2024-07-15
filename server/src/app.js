import express from 'express';
import userRouter from './routes/user.routes.js';
import adminRouter from './routes/admin.routes.js';
import cookieParser from 'cookie-parser';

import { ResponseAPI } from './utils/ResponseAPI.js';
const app = express();

app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.json({ limit: '16kb' }));
app.use(cookieParser());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/admin', adminRouter);

app.use((err, req, res, next) => {
  console.log(err);
  let { statusCode = 500, message } = err;
  res.status(statusCode).json(new ResponseAPI(500, null, message));
});
export { app };
