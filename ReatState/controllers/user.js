import user from "../models/users";
import bcrypt from "bcrypt";
import { response } from "express";


export let registration = async (req, res) =>{
    let errors = req.validationErrors();
    if(errors){
        res.json(errors);
    }
    user_data = req.matchedData(req);
    user_data.password = Bcrypt.hashSync(request.body.password, 10);
    let promise = new Promise((resolve,reject)=>{
        try{
            let newUser = new user(user_data);
            let newUser = await newUser.save();
            resolve ({
                user : newUser,
                msg  : "User created successfully",
                success : true
            })
        }catch(error){
            reject(error)
        }
    })
    return promise;
}

export let login = async (req, res)=>{
    let errors = req.validationErrors();

    if(errors){
        res.json(errors);
    }

    let user_name = req.body.username;
    let password  = req.body.password;

    var user = await user.findOne({ username: request.body.username }).exec();
    if(!user) {
        return res.status(400).send({ message: "The username does not exist" });
    }
    if(!Bcrypt.compareSync(request.body.password, user.password)) {
        return res.status(400).send({ message: "The password is invalid" });
    }
    req.logIn(user, function(err)
    {
      if (err) { return next(err); }
      res.render('index.html', { user : req.user });
    });


}