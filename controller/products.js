const fs = require('fs');

const products = {
    getOne(id){
        const products = this.getAll()
        return products.find(product => product.id == id)
    },
    getAll(){
        return JSON.parse(fs.readFileSync("./src/data/products.json", 'utf8'));
    },
    post(product){
        const products = this.getAll()
        product.id = Date.now().toString(36) + Math.random().toString(36).substr(2)
        products.push(product)
        const data = JSON.stringify(products)
        fs.writeFile("./src/data/products.json", data, (err) => {if (err) console.log(err)})
    },
    patch(product, id){
        const products = this.getAll()
        product.id = id
        products[products.index(product => product.id == id)] = product
        const data = JSON.stringify(products)
        fs.writeFile("./src/data/products.json", data, (err) => {if (err) console.log(err)})
    },
    delete(id){
        const products = this.getAll()
        const data = JSON.stringify(products.filter(product => product.id != id))
        fs.writeFile("./src/data/products.json", data, (err) => {if (err) console.log(err)})
    },
}
module.exports = products