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

const crypto = require('crypto');

const verifyToken = require('../middleware/verifyToken')

//nodemailer
//const nodemailer = require('nodemailer');
//const sendgridTransport = require('nodemailer-sendgrid-transport');

// const transporter = nodemailer.createTransport(sendgridTransport({
// 	auth:{
// 		api_key: "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"
// 	}
// }))

var SENDGRID_API_KEY = "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";

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

//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


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
				.then(user=>{

					//code to send a mail when user is successfully signed up
					const msg = {
  					to: user.email,
  					from: 'chatwowapp@gmail.com',
				  	subject: 'Welcome to chatwow',
  					text: 'We are happy to have you onboard with us!',
  					html: '<strong>Engage and Explore with us!</strong>'
					};
					sgMail.send(msg);
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


// router.post('/reset-password',(req,res)=>{
// 	crypto.randomBytes(36,(err,buffer)=>{
// 		if(err) console.log(err);

// 						//conveting hexadecimal to string
// 		const token = buffer.toString("hex");
// 		User.find({email: req.body.email})
// 		.then((user)=>{
// 			if(!user)
// 				return res.status(422).json({error:"user don't exist with this email"});
			
// 			user.resetToken = token;
// 			user.expireToken = Date.now() + (3600*1000);
// 			user.save().then((result)=>{
// 				const msg = {
//   					to: user.email,
//   					from: 'chatwowapp@gmail.com',
// 				  	subject: 'Welcome to chatwow',
//   					html: '<b>Your Request for Reset password!</b><h5>click on this <a href="http://localhost:3001/reset/${token}">link</a> to change the password</h5>'
// 					};
// 					sgMail.send(msg);
// 					res.json({message:"check your email"})
// 			})
// 			.catch(err=>{
// 				res.json({message:"some error occured"})	
// 			})

// 		})
// 	})
// })


module.exports=router