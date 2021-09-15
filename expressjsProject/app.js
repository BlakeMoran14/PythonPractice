const express = require("express")
const app = express()
const port = 8080

app.get("/", (req, res) => {
    res.sendFile('index.html', { root: "expressjsProject/public" });
})

app.get("/style.css", (req, res) => {
    res.sendFile('style.css', { root: "expressjsProject/public" });
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})