const { promiseQuery } = require("../sqlConection");


const getAllUserQ = async () => {
    const query = ` select * from shop.user;`;
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;

    return result 
}
const addUserQ = async (name, email, password, street, city, houseNumber, phoneNumber, status) => {
    console.log(houseNumber)
   const a=` INSERT INTO shop.user (UserName, Email, Password, Street, City, HouseNumber, PhoneNumber, Status) VALUES ('${name}', '${email}', '${password}','${street}','${city}','${houseNumber}', '${phoneNumber}','${status}');`
    const result = await promiseQuery(a, [name, email, password, street, city, houseNumber, phoneNumber, status]);
    return result;
};
const loginUserQ = async (email, password) => {
    const query = ` SELECT * FROM shop.user  WHERE Email = '${email}'  and Password = '${password}'; `;
    const result = await promiseQuery(query);
    if (result.length == 0)
        return null;

    return result[0];;
}


module.exports = { getAllUserQ ,addUserQ,loginUserQ}  