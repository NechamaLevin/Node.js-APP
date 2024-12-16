const { red } = require("@mui/material/colors");
const {productListQ,orderByUserIdQ,countOrderQ,countOrdersQ,sumPayQ,AddOrderQ,deleteOrderQ, updeteAdressQ, orderAndProductListQ, ordersByDate, showQ}= require("../queries/orderQ");
const { addProductToOrderQ, deleteProductFromOrderQ } = require("../queries/productOrderQ");




const productList=async(id)=>{
    console.log(id);
    const result=await productListQ(id);
    return result;
}
const getOrderAndProductList=async(id)=>{
    console.log("22222222222222222222");
    const result1=await productListQ(id);
    console.log(result1);
    const  result2=await orderAndProductListQ(id);
    result2.productList = result1;
    return result2;
}
const getOrderAndProductList2=async(id)=>{
    console.log("22222222222222222222");
    const result1=await productListQ(id);
    console.log(result1);
    const  result2=await orderAndProductListQ(id);
    result2.productList = result1;
    console.log(result2)
    return result2;
}

const getOrderByUserId = async(id)=>{
    const result=await orderByUserIdQ(id);
    return result;
}

const getOrdersByDate=async(from,to)=>{
 const result=await ordersByDate(from,to);
 return result;
}
const countOrder= async(id)=>{
    const result=await countOrderQ(id);
    return result;
}

const countAllOrders=async()=>{
    const result=await countOrdersQ();
    return result;
}

const sumPay=async (id)=>{
const result=await sumPayQ(id);
    return result;
}
const AddOrder=async(data)=>{
    console.log("22222");
    
    const result=await AddOrderQ(
        data.OrderDate,
        data.TargetDate,
        data.UserID,
        data.Address,
        data.Phone,
        data.IsClosed,
        )
        const result2=await addProductToOrderQ(data.arrayProducts,result.insertId)
    return result2;

}

const dellOrder=async(orderid)=>{
    const result=await deleteProductFromOrderQ(orderid);
    const result2=await deleteOrderQ(orderid);
    return result2;
 
}

const uppdateAdressAndPhone=async(id,data)=>{
    const result=await updeteAdressQ(id,data.Address,data.Phone);
    return result;
}
const avgOrder=async(id)=>{
    const result1=await sumPayQ(id);
    const result2=await countOrdersQ(id.id);
     const avg=Object.values(result1[0])[0]/Object.values(result2[0])[0]
     
    console.log();
    return avg;
}

const show=async(id)=>{
    const result=await showQ(id);
    return result;
}
module.exports={productList,getOrderByUserId,countOrder,countAllOrders,sumPay,AddOrder,dellOrder,uppdateAdressAndPhone,getOrderAndProductList,getOrdersByDate,avgOrder,getOrderAndProductList2,show}