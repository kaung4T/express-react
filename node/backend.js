



let express = require("express")
let mysql = require("mysql")
let app = express()

app.use(express.json())

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "backend_item"
})

app.get("/item", (request, response) => {
    let item_query = "SELECT * FROM item"
    db.query(item_query, (error, data) => {
        if (error) {response.json(error)}
        response.json(data)
    })
})


app.post("/create_item", (request, response) => {
    let name = request.body.name
    let price = request.body.price
    let create_query = "INSERT INTO item (name, price) VALUES (?)"
    let values = [
        name,
        price
    ]
    db.query(create_query, [values], (error, data) => {
        if (error) {response.json(error)}
        response.json(data)
    })
})


app.put("/update/:id", (request, response) => {
    let id = request.params.id
    let name = request.body.name
    let price = request.body.price
    let update_query = "UPDATE item SET name=?, price=? WHERE id=?"
    let values = [
        name,
        price
    ]
    db.query(update_query, [...values, id], (error, data) => {
        if (error) {response.json(error)}
        response.json(data)
    })
})


app.post("/delete/:id", (request, response) => {
    let id = request.params.id

    let create_query = "DELETE FROM item WHERE id=?"

    db.query(create_query, [id], (error, data) => {
        if (error) {response.json(error)}
        response.json(data)
    })
})


app.listen(5000)
