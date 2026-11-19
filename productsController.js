const productShow = require ("./products")

const productControl = (req,res) => {
res.status(200).json(productShow)}

const findOneProduct = (req,res) => {
const id = req.params.productsid 

const matchedProduct = productShow.find ((p) => p.id ==id)
if (!matchedProduct) {
    return res.status(404).json("404 student with the id does not exist")}

res.status(200).json(matchedProduct) 
}

const addProduct = (req,res) => {
console.log (req.body) 

const productProfile = {
    id: productShow.length + 1,
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    quantity: req.body.quantity
}
productShow.push(productProfile)
res.status(201).json("new products have been successfully created")
}

module.exports = {productControl, findOneProduct, addProduct}