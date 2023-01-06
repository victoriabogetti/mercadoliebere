const express = require("express")
const app = express()
const path = require("path")
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))


app.use(express.static(path.join(__dirname, "/public")))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/home.html"))
})

app.get("/registro", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/registro.html"))
})

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/login.html"))
})
