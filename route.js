const express = require ("express");

const mongoose = require("mongoose");

const router = require("express").Router();

const { mobileModel } = require ("./db");

router.use(express.json());

router.post('/create', async(req,res)=> {
         console.log('Received Create request');
         console.log(req.body.brand);
        const mobile = mongoose.model('mobiles', mobileModel);
        let newMobile=new mobile({
            brand:req.body.brand,
            modelNo:req.body.modelNo,
            review: req.body.review,
            year: req.body.year,
            price: req.body.price
        });
        const val = await newMobile.save();
        res.json(newMobile);
});

router.get('/get/:brand', async(req, res)=> {
    const mobile = mongoose.model('mobiles', mobileModel);
    mobile.findOne({brand:req.params.brand},(err, result) =>{
        if (err) {
            res.status(500).json({msg: "Cant find the record"})
        }else{
            res.send(result);
        }
    });
});

router.delete('/delete/:brand', async (req, res, next)=> {
    try{ 
        const mobile = mongoose.model('mobiles', mobileModel);
        mobile.deleteOne({brand:req.params.brand},(err, result) =>{
            if (err) {
                res.status(500).json({msg: "Cant delete the record"})
            }else{
                res.send(result);
            }
        });
    } catch (err) {
        return next(err);
    }   

});

router.put('/update/:brand', async (req, res) => {
    console.log('brnad parmas: ' + req.params.brand);
    console.log('Body: ' + req.body);
    console.log('Body brand: ' + req.body.brand);
    console.log('Body review: ' + req.body.review);
    const mobile = mongoose.model('mobiles', mobileModel);
    let data = await mobile.updateOne({brand: req.params.brand},{$set: req.body});
    res.send(data);
});

module.exports = router;


