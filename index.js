const express = require ("express")
const app = express ()
const PORT = 1234
app.use (express.json())

const {productControl, findOneProduct, addProduct}  = require ("./productsController")

app.get ("/allproducts", productControl) 

app.get ("/username/:fullproduct", (req,res) => {
const name = req.params.fullproduct
res.status(200).json(`welcome to our product page mr ${name}`) })

app.get("/product/:productsid", findOneProduct)

app.post ("/newproduct", addProduct)

app.listen (PORT, () => {
console.log (`Server is actively running on port ${PORT}`)
}) 
