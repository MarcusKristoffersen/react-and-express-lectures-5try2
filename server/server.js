import express from "express";

const app = express();

app.get("/login", (req, res, next) => {
    res.json({username: "Marcus Jojo"})
})
app.post("/login", (req, res, next) => {
    res.sendStatus(401);
})

const server = app.listen(process.env.port || 2000, () => {
    console.log(`Started on http://localhost:${server.address().port}`)
})