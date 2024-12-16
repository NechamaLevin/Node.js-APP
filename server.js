const express = require("express");
const cors = require("cors");
const {usersRouter} = require('./routers/userRouter');
const {productRouter} = require('./routers/productRouter');
const { mySqlConnection } = require("./sqlConection");
const { orderRouter } = require("./routers/orderrOUTER.JS");

const app = express();
const PORT = 8080;
app.use(express.json());
app.use(cors());
app.use('/users', usersRouter);
app.use('/product', productRouter);
app.use('/orders',orderRouter);
app.listen(PORT, (err) => {
    if (err) {
        console.log('error while runing server', err);
    }
    else
        console.log('server is runing in port', PORT);
});

mySqlConnection.connect((err) => {
    if (err)
        console.log(err);
    else
        console.log("success");
})

app.get("/hello", async (req, res) => {
    res.send("hello1")
}
);

