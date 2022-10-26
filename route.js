const express = require ("express");

const mongoose = require("mongoose");

const router = require("express").Router();

const { mobileModel } = require ("./db");

router.use(express.json());

router.post('/create', async(req,res, next)=> {
     try{
        const mobile = mongoose.model('mobiles', mobileModel);
        let newMobile=new mobile({
            brand:req.body.brand,
            modelNo:req.body.modelNo,
            review: req.body.review,
            year: req.body.year,
            price: req.body.price
        });
        newMobile.save();
        return res.status(201).json(newMobile);
    } catch (err) {
    return next(err);
}

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

router.put('/update/:modelno', async(req, res, next) => {
   
    try{
        const mobile = mongoose.model('mobiles', mobileModel);
        let newMobile=new mobile({
            brand:req.body.brand,
            modelNo:req.body.modelNo,
            review: req.body.review,
            year: req.body.year,
            price: req.body.price
        });
        let doc = mobile.findOneAndUpdate({modelNo: req.params.modelno},newMobile,{new: true});
        res.json(doc.review)
    } catch (err) {
        return next(err);
    }

});

module.exports = router;


