const { promiseQuery } = require("../sqlConection");

const getAllProductsQ = async () => {
    const query = ` select * from shop.product;`;
   
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;
    else
    return result;
}
const addProductQ = async (ProductName, Description, Image, Price, InStock) => {
    console.log(ProductName)
   const query=` INSERT INTO shop.product (ProductName, Description, Image, Price, InStock) VALUES ('${ProductName}', '${Description}', '${Image}','${Price}',InStock);`
    const result = await promiseQuery(query, [ProductName, Description, Image, Price, InStock]);
    console.log(result);
    return result;
};
const updateProductQ =  async (id,ProductName, Description, Image, Price, InStock) => {
    console.log(ProductName)
    console.log(id)
   const query=` UPDATE shop.product SET ProductName='${ProductName}', Description='${Description}', Image='${Image}', Price='${Price}', InStock=InStock WHERE ProductId='${id}';`
    const result = await promiseQuery(query, [ProductName, Description, Image, Price, InStock]);
    return result;
}


const deleteProductQ = async (id) => {

    const query1 = `DELETE FROM shop.orderproducts WHERE ProductId='${id}';`;
    const quert2=`DELETE FROM shop.product WHERE ProductID='${id}'`;
    const result1 = await promiseQuery(query1, quert2);
    return result1;
   
}
module.exports = {getAllProductsQ,addProductQ,updateProductQ,deleteProductQ};