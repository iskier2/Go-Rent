const express = require("express")
const products = require("../controller/products")

const router = express.Router();

router.get("/", products.getAll)
router.post("/", products.post)
router.patch("/:id", products.patch)
router.delete("/:id", products.delete)
router.get("/:id", products.getOne)

module.exports = router