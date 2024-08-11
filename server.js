// this data has been generated from https://mockaroo.com/

const express = require("express")
const fs = require("fs")
const users = require("./MOCK_DATA.json")


const app = express()

app.use(express.urlencoded({extended: false}))

// Servers should be made hybrid means 
// they should be able to respond with different formats for data against same URL
// For web client render HTML and for mobile clients just send data as JSON
app.get("/users", (req, res) => {
    data = `
    <ul>
    ${users.map((user) => `<li>${user.first_name}<li/>`)}
    </ul>
    `
    res.status(200).send(data)
})

app.get("/api/users", (req, res) => {
    fs.readFile("./MOCK_DATA.json", "utf-8", (err, data) => {
        if(err){
            res.status(404)
        }else{
            res.status(200).json(JSON.parse(data))
        }
    })
    
})

app.post("/api/users", (req, res) => {
    const data = req.body
    const new_user = {...data, id: (users.length + 1)}
    users.push(new_user)
    console.log(new_user)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err) => {
        if(err){
            console.log(err)
            res.status(500).json({message: err})
        }else{
            res.status(201).json({message: "created successfully"})
        }
    })
    
})

// Shortcut for handling multiple HTTP verbs on same URL 
app.route("/api/users/:user_id").get((req, res) => {
    const id = req.params.user_id
    console.log(req.params)
    const user = users.find((user) => user.id === Number(id))
    res.status(200).json(user)
}).put((res, req) => {
    req.status(200).json({message: "pending"})
}).delete((res, req) => {
    const user_id = res.params.user_id
    const updated_users = users.filter((user) => Number(user_id) !== user.id)
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(updated_users), (err) => {
        if(err){
            console.log(err)
            res.status(500).json({message: err})
        }else{
            req.status(200).json({message: `Successfully deleted user with ID: ${user_id}`})
        }
    })
})

app.listen(8000, () => console.log("app listening on port 8000"))