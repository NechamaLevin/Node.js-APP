const { promiseQuery } = require("../sqlConection");
const { deleteProductQ } = require("./prodectQ");
const { addProductToOrder } = require("./productOrderQ");

const productListQ =async (id)=>{
    console.log("3333333333333333333");
console.log(id);
    const query = `select *
from orderproducts o join product p on p.ProductID=O.ProductID
where OrderID='${id.id}'`;
console.log(query);
    const result = await promiseQuery(query);
    return result;
}   


const orderAndProductListQ = async (id)=>{
    console.log("44444444444444");
    const query = `select *
from orders 
where OrderID='${id.id}'`
    const result = await promiseQuery(query);
    return result[0];
}

const ordersByDate = async (from, to)=>{
    const query = `select *
                  from orders 
                 where TargetDate between '${from}' and '${to}'`
                  const result = await promiseQuery(query);
    return result;
}

const orderByUserIdQ=async ( id)=> {
    const query=`select *
from orders
where userId='${id}'`
    const result = await promiseQuery(query);
    return result;
}
const countOrderQ= async(id)=>{
const query=`SELECT count(*) 
from orders
where UserID =${id} and isClosed=1
group by UserID`
    const result = await promiseQuery(query);
    console.log(result);
    return result[0];
}

const countOrdersQ= async()=>{
    const query=`select count(*)
                    from orders
                    where isClosed=1`
    const result = await promiseQuery(query);
    return result;
}


const sumPayQ=async (id)=> {
    const query=`select sum(u.quantity*p.price)
from product p join (
select *
from orderproducts 
where orderId In(
select orderid
from orders where userID='${id}'))u on u.ProductID=p.ProductID`
    const result = await promiseQuery(query);
    return result;
}

const AddOrderQ=async (OrderDate, TargetDate, UserID, Address, Phone, IsClosed)=> {
    const query=`INSERT INTO shop.orders(OrderDate,TargetDate,UserID,Address,Phone,IsClosed) VALUES ('${OrderDate}', '${TargetDate}', '${UserID}', '${Address}','${Phone}',${IsClosed.data})`

    const result = await promiseQuery(query,[OrderDate, TargetDate, UserID, Address, Phone,IsClosed]);
    return result;

}

const deleteOrderQ = async(orderId)=>{
    const query=`DELETE FROM orders  WHERE OrderID=${orderId} and TargetDate<=NOW();`;
    const result = await promiseQuery(query);
    return result;
 }

 const updeteAdressQ =  async (id,Address,Phone) => {
    const query=` UPDATE shop.orders SET Address='${Address}', Phone='${Phone}' WHERE OrderID='${id}' and TargetDate>=NOW();`
     const result = await promiseQuery(query, [Address, Phone]);
     return result;
 }

 const showQ=async ( id)=> {
    const query=`select *
from orders
where userId='${id}' and IsClosed=0`
    const result = await promiseQuery(query);
    return result;
}
module.exports={productListQ,orderByUserIdQ,countOrderQ,countOrdersQ,sumPayQ,AddOrderQ,deleteOrderQ,updeteAdressQ,orderAndProductListQ,ordersByDate,showQ}