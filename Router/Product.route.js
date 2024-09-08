const express=require('express')
const ProductController=require("../Controller/Product.controller")
const router=express.Router();

router.route("/getAllProducts").get(ProductController.getAllProducts);
router.route("/addNewProduct").post(ProductController.addNewProduct);
router.route("/getproduct/:id").get(ProductController.getProduct);
router.route("/updateproduct/:id").put(ProductController.updateproduct);
router.route("/deleteproduct/:id").delete(ProductController.deleteproduct);

module.exports=router;