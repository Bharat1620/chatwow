const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//we use this to encrypt the password provided by the user
const bcrypt = require('bcryptjs')
//accesing database schema and models
const User = require('../models/user');

//assigning jwt tokens to users signing in
const jwt = require('jsonwebtoken'); 
const {JWT_TOKEN} = require('../keys')

const verifyToken = require('../middleware/verifyToken')



router.get('/protected',verifyToken,(req,res,next)=>{
	res.send("Hello there");
})

router.post('/signup',(req,res,next)=>{
	const {name,email,password,pic}=req.body;

	if(!name || !email || !password)
		return res.status(422).json({error:"Please add all the fields"})

	User.findOne({email:email}).then(savedUser=>{
		if(savedUser){
			return res.status(422).json({error:"user with the same Id already exists"});		
		}
		else{
			//encrypting the password to string size 12
			bcrypt.hash(password,12)
			.then(hashedPassword=>{

				User.create({
					name:name,
					password:hashedPassword,
					email:email,
					pic:pic
				})
				.then(name=>{
					res.json({message:"Successfully signed up"})
				})
				.catch(error=>{
					res.json({error:"Error signing up"})	
				})
			
			})

			
		}
	})
	.catch(err=>{
		res.json({error:"Something went wrong"})
	})
	
	
})



router.post('/signin',(req,res,next)=>{
	const {email,password}=req.body;

	if(!email || !password)
		return res.status(422).json({error:"Correct fields required"})

	User.findOne({email:email}).then(savedUser=>{
		if(!savedUser){
			return res.status(422).json({error:"user does not exist"});		
		}
		else{
			bcrypt.compare(password,savedUser.password)
			.then(passwordMatch=>{
				if(passwordMatch){
					//res.json({message:"Successfully signed in"});
					const token = jwt.sign({_id:savedUser._id},JWT_TOKEN);
					const {_id,name,email,pic}=savedUser;
					res.json({token:token,user:{_id,name,email,pic}});
				}
				else
					res.json({message:"Email or Password is incorrect"});
			})
			.catch(err=>{
				console.log(err);
			})
			
		}
	})
	.catch(err=>{
		res.json({error:"Something went wrong"})
	})
	
	
})

module.exports=router