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
        return res.status(201).json(newMobile);
    } catch (err) {
    return next(err);
}

});

router.get('/', async(req, res, next)=> {

    try{ 
        const mobile = mongoose.model('mobile', mobileModel);

        let newMobile=new mobile({
            brand:"Apple",
            modelNo:"iPhone 14 pro Max",
            review: " The best mobile you can buy in 2022",
            year: "2022",
            price: "£1,199"
            
        });
        return res.json(newMobile);
    } catch (err) {

        return next(err);
    }
    
});

router.delete('/delete/:id', async (req, res, next)=> {

    res.send(mobileModel.splice(req.param.modelNo, 1))

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
        mobile.findOneAndUpdate({modelNo: req.params.modelno},newMobile,{returnDocument: 'after'});
        return res.status(201).json(newMobile);
    } catch (err) {
    return next(err);
    }

});

module.exports = router;


