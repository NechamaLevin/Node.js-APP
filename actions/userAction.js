
const { getAllUserQ ,addUserQ,loginUserQ} = require("../queries/userQ");


const getAllUser = async () => {

    const user = await getAllUserQ();
    if (user != null) {
        return user;
    }
    else {
        const responseBody = { user: null, message:"Sorry, wrong details"};
        return responseBody;
    }


}
const addUser = async (userData) => {
    console.log(userData);
    const result = await addUserQ(
        userData.UserName,
        userData.Email,
        userData.Password,
        userData.Street,
        userData.City,
        userData.HouseNumber,
        userData.PhoneNumber,
        userData.Status
    );
    return result;
};

const loginUser =async (Email,Password)=>{
    console.log(Email,Password)
    const user = await loginUserQ(Email, Password);
        return user;
 
}


// const loginUser = async (email, password) => {

//     const user = await findUserQuery(email, password);
//     if (user != null) {
//         //יצירת מפתח - טוקן שיאפשר בהמשך למתמש שהתחבר לבקש בקשות מהשרת
//         //יצירת הטוקן בדגומא מורבת משני חלקים שמוצפנים במחרוזת - הקוד של המשתמש ומחרוזת סודית שהגדרנו בשרת
//         const token = jwt.sign({ id: user.id }, JWT_SECRET_KEY);  
//         const responseBody = { user: user, token: token };
//         return responseBody;
//     }
//     else {
//         const responseBody = { user: null, message:"Sorry, wrong details"};
//         return responseBody;
//     }


module.exports = {getAllUser,addUser,loginUser}