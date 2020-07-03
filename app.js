const express = require('express');
const app = express();
const {mongoURL} = require('./keys');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')
const userRoute = require('./routes/user')
var dotenv = require('dotenv');
dotenv.config();

//connecting to database
mongoose.connect(mongoURL,{ useNewUrlParser: true,useUnifiedTopology: true });

mongoose.connection.on('connected',()=>{
	console.log("connected to mongodb atlas");
})
mongoose.connection.on('error',(error)=>{
	console.log("error connecting to database"+error);
})

//just to remove warning of findByIdAndUpdate
mongoose.set('useFindAndModify', false);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
//accessing routes
app.use(authRoute);
app.use(postRoute);
app.use(userRoute);

const Examplemiddleware=(req,res,next)=>{
	console.log("I will execute first");
	next();
}

//to apply middleware to all the routes
//app.use(Examplemiddleware);

if(process.env.NODE_ENV=="production"){
    app.use(express.static('success-client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'success-client','build','index.html'))
    })
}


var PORT = process.env.PORT || 3000;

app.listen(3000,process.env.IP,()=>{
	console.log("Server Has Started");
})