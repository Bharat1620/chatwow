const jwt = require('jsonwebtoken');
const {JWT_TOKEN} = require('../keys');
const mongoose = require('mongoose');
const User = require('../models/user');

const verifyToken = (req,res,next)=>{
		
		const {authorization} = req.headers;

			if(!authorization){
				return res.status(401).json({
				"err":"You should be logged in"
				})
			}

		//authorization == Bearer lkjhgvdhjmdkjnhg
		//after authorization.replace("Bearer ","")
		//authorization == lkjhgvdhjmdkjnhg
		//const token = authorization.replace("Bearer ","");
		var token = req.headers.authorization.split(' ')[1];
		//verifying user token with JWT_SECRET key 
		jwt.verify(token,JWT_TOKEN,(err,payload)=>{

			if(err){
				console.log(err);
				return res.status(401).json({
				"err":"Something went wrong, Please Log in again"
				})
			}
			else{
				//destucturing const _id = payload._id
				const{_id}=payload;
				User.findById(_id).then(userData=>{
					req.user = userData;
					next();
				})
			}
		})
		
	}

module.exports = verifyToken;

