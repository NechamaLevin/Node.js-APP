const {getAllProductsQ,addProductQ,updateProductQ,deleteProductQ,}= require("../queries/prodectQ");
const {addProductToOrderQ,deleteProductFromOrderQ}= require("../queries/productOrderQ");
const getAllProducts = async (q) => {
    const prodect = await getAllProductsQ();
    if (prodect != null) {
        return prodect;
    }
    else {
        const responseBody = { products: null, message:"Sorry, wrong details"};
        return responseBody;
    }
}
// ProductName, Description, Image, Price, InStock
const addProduct = async (productData) => {
    console.log(productData)
    const result = await addProductQ(
        productData.ProductName,
        productData.Description,
        productData.Image,
        productData.Price,
        productData.InStock
    );
         return result;
}

const updateProduct = async (productData,id) => {
    const result = await updateProductQ(
        id,
        productData.ProductName,
        productData.Description,
        productData.Image,
        productData.Price,
        productData.InStock
    );
    return result;
}

const addProductsToOrder=async (products,id) => {
    console.log("33333333333333")
    const result = await addProductToOrderQ(
        products,
        id
    );
    return result;
}

const dellproducts=async (id) => {
    const result=await deleteProductQ(id);
    return result;
}

const dellProductsFromOrder=async (id) => {
    const result = await deleteProductFromOrderQ(id);
    return result;
}
module.exports = {getAllProducts,addProduct,updateProduct,addProductsToOrder,dellproducts,dellProductsFromOrder};