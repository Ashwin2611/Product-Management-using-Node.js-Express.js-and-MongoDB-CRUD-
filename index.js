const express=require("express");
const mongoose=require("mongoose")
const Product=require("./Model/Product.model")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))//we can add data in DB using form in postman
const routers=require("./Router/Product.route")
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/hey',(req,res)=>{
    res.send("hey")
})

app.use("/api/v1/products",routers)

//create product
// app.post("/api/v1/products/addproduct",async(req,res)=>{
//     try {
//         const product=await Product.create(req.body);
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// })

// app.get("/api/v1/getAllProducts",async(req,res)=>{
//     try {
//         const product=await Product.find({})
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// })

// app.use((req, res, next) => {
//     console.log('Middleware running');
//     next();
//   });
  


// app.get("/api/v1/products/getproduct/:id",async(req,res)=>{
//     try {
//         const product=await Product.findById(req.params.id)
//         res.status(200).json(product)
//     } catch (error) {
//         res.status(500).json(error.message)
//     }
// })

//update

// app.put("/api/v1/products/updateproduct/:id",async(req,res)=>{
//     try {
//         const {id}=req.params;
//         const product=await Product.findByIdAndUpdate(id,req.body);
//         if(!product){
//             return res.status(404).json({message:"Product Not Found"});
//         }
//         const updatedProduct=await Product.findById(id);
//         res.status(200).json(updatedProduct);
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

//delete

// app.delete("/api/v1/products/deleteproduct/:id",async(req,res)=>{
//     try {
//         const {id}=req.params;
//         const product=await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(404).json({message:"Product Not Found"});
//         }
//         res.status(200).json({message:"Product Deleted Successfully"})
//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// })

mongoose.connect("mongodb+srv://ashwinmurugan818:<User Password>@backend.grhvx.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Backend")
.then(()=>{
    console.log("DB is Connected");
})
.catch(()=>{
    console.log("DB connection failed")
})

app.listen(3000,()=>{
    console.log(`Server is running on Port ${3000}`)
})
