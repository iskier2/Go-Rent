const express = require('express')
const app = express()
const port = 3000
const router = require("./router/main")

app.use("/", router)

app.listen(port, () => {
  console.log(`GolRent listening on port ${port}`)
})