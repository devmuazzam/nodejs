const http = require('http')
const url = require("url")
const reqHandler = function(req, res){
    const up = url.parse(req.url, true)
    if(up.pathname === "/home"){
        console.log(up.query)
        res.end(`At Home Page with ${req.method} and ${up.query.q} and pathname: ${up.pathname}`)
    }else{
        console.log(up.query)
        res.end(`pathname did not match: ${req}`)
    }
}
const server = http.createServer(reqHandler)
server.listen(8000, () => console.log("Server started listening on port 8000!"))
