const Product = require("../models/Product");

const createProduct = async(req,res)=>{
    try {
        const newProduct = new Product(req.body);

        const product = await newProduct.save()

        res.status(200).json(product)
    } catch (error) {
        res.status(403).json(error)
    }
}


const updateProduct = async(req,res)=>{
    try {
        const product = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        

        res.status(200).json(product)
    } catch (error) {
        res.status(403).json(error)
    }
}

const deleteProduct = async(req,res)=>{
    try {
        await Product.findByIdAndDelete(req.params.id);
        
        res.status(200).json("The product has been deleted sucessfully" )
    } catch (error) {
        res.status(403).json(error)
    }
}


const getProductById = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id)

        res.status(200).json(product)
    } catch (error) {
        res.status(403).json(error)
    }
}

const getAllProducts = async(req,res)=>{
    const newQuery = req.query.new ;
    const categoryQuery = req.query.category ;
    let products = [] ;
    try {
        if(newQuery){
             products = await Product.find().sort({createdAt:-1}).limit(1);
            // products.push(newProducts)
        }else if(categoryQuery){
             products = await Product.find({
                categories:{
                    $in:[categoryQuery]
                }
            })
        }else{
             products = await Product.find();
        }
        

        res.status(200).json(products)
    } catch (error) {
        res.status(403).json(error)
    }
}

module.exports ={createProduct, updateProduct, deleteProduct, getProductById, getAllProducts}