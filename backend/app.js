const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

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

app.use('/api/posts', postRoutes);
app.use('/api/user', userRoutes);

module.exports = app;