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

router.post("/:productId", upload.any("images"), (req, res) => {res.send(products.addImages(req.params.productId, req.files))})
router.delete("/:productId/:index", (req, res)=>res.send(products.delteImage(req.params.productId, req.params.index)))
router.use("/", express.static("./src/images"))

module.exports = router