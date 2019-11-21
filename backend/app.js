const express = require('express');
const bodyParser = require('body-parser');
const PostModel = require('./model/post');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://postUser:oSvd5bkcJSSmpE1S@cluster0-wiopp.mongodb.net/node-angular?retryWrites=true&w=majority')
.then(()=>{
    console.log("MongoDB connected successfully");
})
.catch(()=>{
console.log("MongoDB connection Failed");
});

app.use(bodyParser.json());

app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, PATCH, DELETE, PUT, POST, OPTIONS");
    next();
});

app.post('/api/posts', (req,res,next) => {
    const post = new PostModel({
        title: req.body.title,
        content: req.body.content
    });
    console.log('post call request body', post);
    post.save().then( createdPost => {
        res.status(201).json({
            message: 'Post added successfully !',
            postId: createdPost._id
        });
    });        
});

app.get('/api/posts', (req, res, next) => {
    
    PostModel.find()
    .then(documents => {
        console.log('Posts retrieved from DB:', documents);
        res.status(200).json({
            message: 'posts retrieved successfully.',
            posts: documents
        });
    });
});

app.delete('/api/posts/:id', (req, res, next) => {
    console.log(req.params.id);
    PostModel.deleteOne({_id: req.params.id})
    .then(result =>{
        console.log(result);
        res.status(200).json({
            message: "post deleted successfully !"
        });
    });    
});

module.exports = app;