import express from "express";
const app = express();

app.get("/api/name", (req, res) => {
  res.send("Pawan Mahajan");
});

export { app };
