const express = require("express")
const products = require("./products")

const router = express.Router();

router.use("/products", products)
router.use("/images", express.static('./src/images'))
router.use("/", express.static('./src/html'))

module.exports = router