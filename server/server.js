import express from "express";

const app = express();

app.get("/login", (req, res, next) => {
    res.json({username: "Marcus Jojo"})
})
app.post("/login", (req, res, next) => {
    res.sendStatus(401);
})

app.listen(2000);