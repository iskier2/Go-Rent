const express = require("express")
const products = require("./products")
const images = require("./images")

const router = express.Router();

router.use("/products", products)
router.use("/images", images)
router.use("/", express.static('./src/html'))

module.exports = router