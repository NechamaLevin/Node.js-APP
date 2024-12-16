const { promiseQuery } = require("../sqlConection");

const addProductToOrderQ = async(arrayPtouct,orderId)=>{
    console.log(arrayPtouct);
    console.log("!");
 const query=`INSERT INTO orderproducts(ProductID, OrderID, Quantity)
VALUES
 ${arrayPtouct.map(p=>`( '${p.id}', '${orderId}', '${p.quantity}')`).join(', ')}
 `;
    const result = await promiseQuery(query);
    return result;

}

 const deleteProductFromOrderQ = async(orderId)=>{
    const query=`DELETE FROM orderproducts WHERE OrderID=${orderId};`;
    const result = await promiseQuery(query);
    return result;
 }
module.exports = {addProductToOrderQ,deleteProductFromOrderQ};