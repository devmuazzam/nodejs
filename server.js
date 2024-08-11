
const express = require("express")
const http = require('http')
const url = require("url")

// express returns a request handler
const app = express()
console.log(app)


app.get("/home", (req, res) => {
    res.send(`Home Page with query string: ${req.query.q}`) 
})

// Can be replaced with below code. Express can also spin up Http server
// const server = http.createServer(app)
// server.listen(8000, () => console.log("Server started listening on port 8000!"))

app.listen(8000, () => console.log("Server started listening on port 8000!"))

