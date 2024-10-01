const express = require("express")
const products = require("../controller/products")

const router = express.Router();

router.get("/", (req, res) => {res.send(products.getAll())})
router.post("/", (req, res) => {res.send(products.post(req.body))})
router.patch("/:id", (req, res) => {res.send(products.patch(req.body, req.params.id))})
router.delete("/:id", (req, res) => {res.send(products.delete(req.params.id))})
router.get("/:id",(req, res) => {res.send(products.getOne(req.params.id))})

module.exports = router