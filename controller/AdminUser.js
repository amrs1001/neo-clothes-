const path=require("path")
const User=require("../models/userSchema")

const getUsers=(req,res)=>{
    User.find()
    .then(result=>{
        res.render('usersss',{usersss:result});
    })
    .catch(err=>{
        console.error(err);
        res.status(500).send('Error retrieving users');
    })

    }
