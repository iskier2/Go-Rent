const express = require('express')
const app = express()
const port = 3000
const router = require("./router/main")
const bodyParser = require("body-parser")

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/", router)

app.listen(port, () => {
  console.log(`GolRent listening on port ${port}`)
})