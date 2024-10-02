const fs = require('fs');

const products = {
    getOne(id){
        return this.getAll().find(product => product.id == id)
    },
    getAll(){
        return JSON.parse(fs.readFileSync("./src/data/products.json", 'utf8'));
    },
    add(product){
        const products = this.getAll()
        product.id = Date.now().toString(36) + Math.random().toString(36).substr(2)
        product.images = []
        products.push(product)
        this.save(products)
        return product.id
    },
    patch(key, value, id){
        const products = this.getAll()
        products[products.findIndex(product => product.id == id)][key] = value
        return this.save(products)
    },
    delete(id){
        return this.save(this.getAll().filter(product => product.id != id))
    },
    addImages(id, files){
        const products = this.getAll()
        const index = products.findIndex(product => product.id == id)
        files.forEach(file => products[index].images.push(file.filename))
        return this.save(products)
    },
    delteImage(id, index){
        const products = this.getAll()
        const productIndex = products.findIndex(product => product.id == id)
        fs.unlinkSync("./src/images/" + products[productIndex].images[index]);
        products[productIndex].images.splice(index, 1)
        return this.save(products)
    },
    save(products){
        if(process.env.PORT) return "no permission"
        fs.writeFileSync("./src/data/products.json", JSON.stringify(products), (err) => { if (err) console.log(err); })
        return "success"
    }
}
module.exports = products