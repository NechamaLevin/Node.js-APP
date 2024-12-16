
const {productList,getOrderByUserId,countOrder,countAllOrders,sumPay, AddOrder,dellOrder, uppdateAdressAndPhone, getOrderAndProductList,getOrdersByDate, avgOrder, show}=require('../actions/orderAction');
const { Router } = require("express");
const orderRouter=Router();

orderRouter.get('/productList/:id', async (req, res) => {
    try {
        console.log(req.params);
        const result = await productList(req.params);
        if (result != null)
            res.status(200).send({success:true, productList:result});
        else
            res.status(401).send({success:false, productList:null});
    } catch (err) {
        res.status(500).send(err);
    }
});

orderRouter.get('/orderAndPList/:id', async (req, res) => {
    try{
        const result=await getOrderAndProductList(req.params);
        console.log("result: " + JSON.stringify(result));
        console.log(result)

        if(result!=null){
            res.status(200).send({success:true, orderAndProductList:result});
        }else{
            res.status(401).send({success:false, orderAndProductList:null});
        }
    }
catch(err){
    res.status(500).send(err);
}
});

orderRouter.get('/getOrdersByUser/:id', async (req, res) =>{
 
    try {
        console.log(req.params);
        const result = await getOrderByUserId(req.params.id);
        console.log(result);

        if (result!= null)
            res.status(200).send({success:true, orders:result});
        else
            res.status(401).send({success:false, orders:null});
    } 
    catch (err) {
        res.status(500).send(err);
    }

}
);


orderRouter.get('/countOrders/:id', async (req, res) => {
try{
    console.log(req.params);
    const result = await countOrder(req.params.id);
    if (result!= null){
        console.log(result);
        res.status(200).send(result);
    }
    else
        res.status(401).send({success:false, count:null});
}
    catch (err) {
        res.status(500).send(err);
    }
});

orderRouter.get('/countAllOrders', async (req, res) => {
    try{
        const result = await countAllOrders();
        if (result!= null)
            res.status(200).send({success:true, count:result});
        else
            res.status(401).send({success:false, count:null});
    }
    catch (err) {
        res.status(500).send(err);
    }
});


orderRouter.get('/sumPay/:id',async (req, res) => {
    try{
        console.log(req.params);
        const result = await sumPay(req.params.id);
        if (result!= null)
            res.status(200).send({success:true, sum:result});
        else
            res.status(401).send({success:false, sum:null});
    }
    catch (err) {
        res.status(500).send(err);
    }
});


orderRouter.post('/addOrder', async (req, res) => {
    try {
        const orderData = req.body;
        const result = await AddOrder(orderData);
        res.status(201).send({ success: true, result: result });
    } catch (err) {
        res.status(500).send(err);
    }
});

orderRouter.delete('/deleteOrder/:orderID', async (req, res) => {
    try {
        console.log(req.params);
        const result = await dellOrder(req.params.orderID);
        if (result!= null)
            res.status(200).send({success:true, result: result});
        else
            res.status(401).send({success:false, result: null});
    } catch (err) {
        res.status(500).send(err);
    }
});

orderRouter.put('/opdateOrder/:orderID', async (req, res) => {
    try {
        console.log(req.params);
        console.log(req.body);
        const result = await uppdateAdressAndPhone(req.params.orderID,req.body);
        if (result!= null)
            res.status(200).send({success:true, result: result});
        else
            res.status(401).send({success:false, result: null});
    } catch (err) {
        res.status(500).send(err);
    }
});

orderRouter.get('/getOrdersByDate/:from/:to', async (req, res) => {
    try {
        console.log(req.params);
        const result = await getOrdersByDate(req.params.from,req.params.to);
        if (result!= null)
            res.status(200).send({success:true, orders:result});
        else
            res.status(401).send({success:false, orders:null});
    } catch (err) {
        res.status(500).send(err);
    }
});
 
orderRouter.get('/avgOrder/:id',async(req,res)=>{
    try{
        console.log(req.params);
        const result = await avgOrder(req.params.id);
        if (result!= null)
            res.status(200).send({success:true, avg:result});
        else
            res.status(401).send({success:false, avg:null});
    }
    catch(err){
        res.status(500).send(err);
    }
 });
 orderRouter.get('/show/:id', async (req, res) => {7
    try {
        console.log(req.params);
        const result = await show(req.params.id);
        if (result!= null)
            res.status(200).send({success:true, orders:result});
        else
            res.status(401).send({success:false, orders:null});
    } catch (err) {
        res.status(500).send(err);
    }
});
module.exports = {orderRouter};