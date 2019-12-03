const express = require("express");
const PostModel = require('../model/post');

const router = express.Router();


router.post('', (req,res,next) => {
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

router.get('', (req, res, next) => {
    
    PostModel.find()
    .then(documents => {
        console.log('Posts retrieved from DB:', documents);
        res.status(200).json({
            message: 'posts retrieved successfully.',
            posts: documents
        });
    });
});

router.delete('/:id', (req, res, next) => {
    console.log(req.params.id);
    PostModel.deleteOne({_id: req.params.id})
    .then(result =>{
        console.log(result);
        res.status(200).json({
            message: "post deleted successfully !"
        });
    });    
});

module.exports= router;