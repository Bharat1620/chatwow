const mongoose = require('mongoose');

//To get objectId from userSchema
const {ObjectId}=mongoose.Schema.Types;
const postSchema = new mongoose.Schema({

	title:{
		type:String,
		required:true
	},
	body:{
		type:String,
		required:true
	},
	photo:{
		type:String,
		required:true
	},
	likes:[
		{
		type:ObjectId,
		ref:"User"
		}
	],
	 comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
	postedBy:{
		type:ObjectId,
		ref:"User"
	}

})

const Post = mongoose.model("Post",postSchema);
module.exports = Post;