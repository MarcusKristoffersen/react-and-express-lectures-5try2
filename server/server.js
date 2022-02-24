import express from "express";

const app = express();

app.get("/api/login", (req, res, next) => {
  res.json({ username: "Marcus Jojo" });
});
app.post("/api/login", (req, res, next) => {
  res.sendStatus(401);
});

app.use(express.static("../client/dist"));

const server = app.listen(process.env.PORT || 2000, () => {
  console.log(`Started on http://localhost:${server.address().port}`);
});
