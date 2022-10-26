const express = require ("express");

const router = require("express").Router();

const { mobileModel } = require ("./db");

const mobileRecord = mobileModel

router.use(express.json());

router.post('/create', async(req,res, next)=> {
    try{const newmobileModel= await mobilemodel.create(req.body);
        return res.status(201).json(newmobileModel);
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
        return res.json(mobileRecord);
    } catch (err) {

        return next(err);
    }
    
});

router.get("/getAll", (req, res, next) => res.send(mobileRecord));

router.delete('/delete/:id', async (req, res, next)=> {

    res.send(mobileModel.splice(req.param.modelNo, 1))

});

router.put('/update/:modelno', async(req, res, next) => {
   
    try{const newmobileModel= await mobilemodel.create(req.body);
        return res.status(201).json(newmobilemdel);
    } catch (err) {
    return next(err);
    }

});

module.exports = router;


