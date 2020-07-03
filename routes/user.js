const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//we use this to encrypt the password provided by the user
const bcrypt = require('bcryptjs')
//accesing database schema and models
const Post = require('../models/post');
const User = require('../models/user');

const verifyToken = require('../middleware/verifyToken');


router.get('/profile/:id',verifyToken,(req,res)=>{
	User.findOne({_id:req.params.id})
	.select("-password")
	.then(user=>{
		Post.find({
			postedBy: req.params.id
		})
		.populate("postedBy","_id name")
		.exec((err,posts)=>{
			if (err)
				return res.status(422).json({error:err})
			else
				res.json({user,posts});
		})
	})
	.catch(err=>{
		return res.status(404).json({
			error:"User Not Found"
		})
	})
})


router.put('/updatepic',verifyToken,(req,res)=>{
    User.findByIdAndUpdate(req.user._id,{$set:{pic:req.body.pic}},{new:true},
        (err,result)=>{
         if(err){
             return res.status(422).json({error:"pic can not be posted"})
         }
         res.json(result)
    })
})






module.exports = router;