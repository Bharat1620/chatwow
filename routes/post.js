const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
//we use this to encrypt the password provided by the user
const bcrypt = require('bcryptjs')
//accesing database schema and models
const Post = require('../models/post');
const verifyToken = require('../middleware/verifyToken');


router.post('/createpost',verifyToken,(req,res)=>{
	const {title,body,photo}=req.body;
	console.log(title,body,photo);
	if(!title || !body || !photo){
		return res.status(422).json({error:"Please Provide all the fields"})
	}
	//console.log(req.user);
	// because we don't want to save password
	req.user.password=undefined;
	Post.create({
		title:title,
		body:body,
		photo:photo,
		postedBy:req.user
	})
	.then(result=>{
		res.json({message:"Post Created Successfully",
				  post:result
				})
	})
	.catch(error=>{
		console.log(error);
		res.json({error:"Error Occured while creating a post"})	
	})
})


router.get('/allpost',verifyToken,(req,res)=>{
	Post.find({})
	//populate is used to expand postedBy object and show only "_id" and "name"
	//as specified
	.populate("postedBy","_id name")
	.populate("comments.postedBy","_id name")
	.then(result=>{
		res.json({
				posts:result
				})
	})
	.catch(error=>{
		console.log(error);
		res.json({error:"Error Occured while creating a post"})	
	})
})


router.get('/mypost',verifyToken,(req,res)=>{
	Post.find({postedBy:req.user._id})
	.populate("postedBy","_id name")
	.then(result=>{
		res.json({
				posts:result
				})
	})
	.catch(error=>{
		console.log(error);
		res.json({error:"Error Occured while showing the post"})	
	})
})

router.put('/like',verifyToken,(req,res)=>{
	Post.findByIdAndUpdate(req.body.postId,{
		//push the preson in the likes array who has lisked the post
		$push:{
			likes:req.user._id
			}
	},{
		//to get a updated recrd from mongodb
		new:true
	}).exec((err,result)=>{
		if (err) 
			return res.status(422).json({error:err});
		else
			return result;
	})
})

router.put('/unlike',verifyToken,(req,res)=>{
	Post.findByIdAndUpdate(req.body.postId,{
		//pull the preson in the likes array who has lisked the post
		$pull:{
			likes:req.user._id
			}
	},{
		//to get a updated recrd from mongodb
		new:true
	}).exec((err,result)=>{
		if (err) 
			return res.status(422).json({error:err});
		else
			return result;
	})
})

router.put('/comment',verifyToken,(req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    },{
        new:true
    })
    .populate("comments.postedBy","_id name")
    .populate("postedBy","_id name")
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

router.delete('/deletepost/:postId',verifyToken,(req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedBy","_id")
    .exec((err,post)=>{
        if(err || !post){
            return res.status(422).json({error:err})
        }
        //delete only if person who created the post and who is signed in is same
        if(post.postedBy._id.toString() === req.user._id.toString()){
              post.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})


module.exports=router;