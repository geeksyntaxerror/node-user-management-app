const User = require('../models/user.model.js');

exports.createUser = (req, res)=>{

    if(!req.body.name || !req.body.age || !req.body.place){
        return res.status(400).send({
            message : "user information cannot be empty"
        })
    }

    const user = new User({
        name : req.body.name,
        age : req.body.age,
        place : req.body.place
    });

    user.save()
    .then((date)=>{
        return res.send(data);
    })
    .catch((err)=>{
        return res.status(500).send({
            message : err.message || "some error occured while creating user"
        })
    })

}

exports.getUsers = (req , res)=>{
    User.find()
    .then((data)=>{
        return res.send(data);
    })
    .catch((err)=>{
        return res.status(500).send({
            message : err.message || "error fetching user details"
        });
    })
}

exports.getUser = (req , res)=>{

    User.findById(req.params.userId)
    .then((data)=>{
        if(!data){
            return res.status(404).send({
                message : "error retreiving user with Id " + req.params.userId
            })
        }
        return res.send(data);
    })
    .catch((err)=>{
        return res.status(404).send({
            message : "error retreiving user with Id " + req.params.userId
        })
    })
}

exports.updateUser = (req , res)=>{
    if(!req.body.name || !req.body.age || !req.body.place){
        return res.status(400).send({
            message : "user information cannot be empty"
        })
    }
    User.findByIdAndUpdate(req.params.userId , {
        name : req.body.name,
        age : req.body.age,
        place : req.body.place
    },{new : true} )
    .then((data)=>{
        if(!data){
            return res.status(404).send({
                message : "user not found for this id " + req.params.userId
            });
        }
        return res.send(data);
    })
    .catch((err)=>{
        return res.status(404).send({
            message : err.message || "user not found for this id : " + req.params.userId
        });
    })
}

exports.deleteUser = (req , res)=>{

    User.findByIdAndRemove(req.params.userId)
    .then((data)=>{
        if(!data){
            return res.status(404).send({
                message : "user not found"
            });
        }
        return res.send({
            message : "user with ID : "+ req.params.userId + " is successfully deleted"
        });
    })
    .catch((err)=>{
        return res.status(404).send({
            message : "unable to delete user"
        })
    })

}