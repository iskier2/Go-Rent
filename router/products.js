const express = require("express")
const multer = require("multer")
const products = require("../controller/products")

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.jpg')
    }
})

const upload = multer({ storage });

router.get("/", (req, res) => {res.send(products.getAll())})
router.post("/", upload.any("images"), (req, res) => {res.send(products.addImages(products.add(req.body), req.files))})
router.patch("/:id", (req, res) => {res.send(products.patch(req.body, req.params.id))})
router.delete("/:id", (req, res) => {res.send(products.delete(req.params.id))})
router.get("/:id",(req, res) => {res.send(products.getOne(req.params.id))})

module.exports = router