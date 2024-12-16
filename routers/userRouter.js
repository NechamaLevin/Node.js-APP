const { Router } = require("express");

const { getAllUser,addUser,loginUser } = require("../actions/userAction");

const usersRouter = Router();


usersRouter.get('/getAllUsers', async (req, res) => {
    try {
        const user = await getAllUser();

        if (user != null)
            res.status(200).send({success:true, user:user});
        else
            res.status(401).send({success:false, user:null});
    }
    catch (err) {
        res.status(500).send(err);
    }

})

usersRouter.post('/addUser', async (req, res) => {
    try {
        const userData = req.body;
        const result = await addUser(userData);
        res.status(201).send({ success: true, result: result });
    } catch (err) {
        res.status(500).send(err);
    }
});

usersRouter.post('/loginUser', async (req, res) => {
    console.log(req.body)
    const { Email, Password } = req.body;
  
    try {
        const user = await loginUser(Email, Password );
        if (user != null)
            res.status(200).send({success:true, user:user});
        else
            res.status(401).send({success:false, user:null});
        
    } 
    catch (err) {
        res.status(500).send(err);
    }
});



usersRouter.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await loginUser(email, password);

        if (user != null)
            res.status(200).send({success:true, user:user});
        else
            res.status(401).send({success:false, user:null});
    }
    catch (err) {
        res.status(500).send(err);
    }

})
module.exports = { usersRouter };