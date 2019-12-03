const express = require("express");
const bcrypt = require('bcryptjs');
const User = require('../model/user');

const router = express.Router();

router.post('/signup', (req, res, next) => {
    // bcrypt.hash(req.body.password, 2, null)
    //     .then(hashedPassword => {
    //         console.log('hashedPW:', hashedPassword)
    //         const user = new User({
    //             email: req.body.email,
    //             password: hashedPassword
    //         });
    //         user.save()
    //         .then(result => {
    //             res.status(201).json({
    //                 message: "User created successfully !",
    //                 result: result
    //             })
    //         })
    //         .catch(err => {
    //             res.status(500).json({
    //                 error: err
    //             });
    //         });
    //     });

    bcrypt.hash(req.body.password, 10)
        .then(hashedPassword => {
            console.log('hashedPW:', hashedPassword)
            const user = new User({
                email: req.body.email,
                password: hashedPassword
            });
            user.save()
            .then(result => {
                res.status(201).json({
                    message: "User created successfully !",
                    result: result
                })
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                });
            });
        });

});


module.exports = router;

