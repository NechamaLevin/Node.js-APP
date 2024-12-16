const {getAllProducts,addProduct,updateProduct,addProductsToOrder,dellproducts,dellProductsFromOrder}=require('../actions/productAction')
const { Router } = require("express");
const productRouter = Router();

productRouter.get('/getAllProduct', async (req, res) => {
    const user=await getAllProducts();
    if(user!=null) {
        res.status(200).send({success:true, product:user});
    } else {
        res.status(401).send({success:false, product:null});
    }
});
productRouter.post('/addProduct', async (req, res) => {
    const productData = req.body;
    const product = await addProduct(productData);
    if(product!=null) {
        res.status(201).send({success:true, product:product});
    } else {
        res.status(401).send({success:false, product:null});
    }
});
productRouter.put('/updateProduct/:id', async (req, res) => {
    const {id}=req.params;
    const productData = req.body;
    const product = await updateProduct(productData,id);
    if(product!=null) {
        res.status(200).send({success:true, product:product});
    } else {
        res.status(401).send({success:false, product:null});
    }
});

productRouter.post('/addProductsToOrder/:id', async (req, res) => {
    const {id}=req.params;
    const productList = req.body;
    const result = await addProductsToOrder(productList,id);
    if(result!=null) {
        res.status(200).send({success:true, result:result});
    } else {
        res.status(401).send({success:false, result:null});
    }
});

productRouter.delete('/dellproduct/:id',async(req,res)=>{
  try{
    const {id}=req.params;
    const result=await dellproducts(id);
    if(result!=null){
      res.status(200).send({success:true,message:"product deleted successfully"})
    }else{
      res.status(401).send({success:false,message:"product not found"})
    }
  }
  catch(err){
    res.status(500).send(err)
  }
});

productRouter.delete('/dellProductsFromOrder/:id',async(req,res)=>{
    try{
      const {id}=req.params;
      const result=await dellProductsFromOrder(id);
      if(result!=null){
        res.status(200).send({success:true,message:"product deleted from order successfully"})
      }else{
        res.status(401).send({success:false,message:"product not found in the order"})
      }
    }
    catch(err){
      res.status(500).send(err)
    }
  });


module.exports ={productRouter} ;