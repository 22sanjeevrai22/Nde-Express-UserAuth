const UserModel = require('../modle/modle')

const UserController = {

    checkUserAuthorisation : (req, res) =>{
        const user = UserModel.getUser();
        
        if (user.username === req.body.username && user.password === req.body.password){
            return res.status(200).send("Login Successful");
         } 

         else {
                return res.status(403).send("Incorrect Credentials");
         }
        } 
    }

