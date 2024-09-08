const Product=require("../Model/Product.model")
exports.getAllProducts=async(req,res)=>{
    try {
        const product=await Product.find({})
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
exports.addNewProduct=async(req,res)=>{
    try {
        const product=await Product.create(req.body);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
exports.getProduct=async(req,res)=>{
    try {
        console.log(req.params.id)
        const product=await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

exports.updateproduct=async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndUpdate(id,req.body);
        if(!product){
            return res.status(404).json({message:"Product Not Found"});
        }
        const updatedProduct=await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

exports.deleteproduct=async(req,res)=>{
    try {
        const {id}=req.params;
        const product=await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:"Product Not Found"});
        }
        res.status(200).json({message:"Product Deleted Successfully"})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}