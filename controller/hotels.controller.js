const Hotel = require('../models/hotel.models');

module.exports = {
    getAll:(rep,res,next)=>{
        Hotel.find({})
        .then((hotels)=>{
            res.statusCode = 200;
            res.setHeader("content-Type","application/json");
            res.json(hotels);
        }, (err)=>next(err))
        .catch (err => next(err));
    },

    addOne:(req,res,next)=>{
        Hotel.create(req.body)
           //then s'excute si tous va bien 
           .then(hotels =>{
               res.statusCode=200;
               res.setHeader("content-Type","application/json");
               res.json(hotels);
           }, (err)=>next(err)
           )
           .catch (err => next(err));
    },

    deleteAll:(rep,res,next)=>{
        Hotel.remove({})
        //then s'excute si tous va bien 
        .then ((resp) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(hotels);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },
    deleteOne:(rep,res,next)=>{
        Hotel.findByIdAndDelete(req.params.id)
        //then s'excute si tous va bien 
        .then ((resp) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(hotels);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },


    getOne:(rep,res,next)=>{
        Hotel.findById(req.params.id)
        //then s'excute si tous va bien 
        .then ((clients) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(hotels);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },
    updateOne:(rep,res,next)=>{
        Hotel.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        //then s'excute si tous va bien 
        .then ((hotels) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(hotels);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },

    deleteOne:(rep,res,next)=>{
        Hotel.findByIdAndDelete(req.params.id)
        .then(
            resp => {
                res.statusCode = 200;
                res.setHeader("Content-Type","application/json");
                res.json(resp);
            },
            (err) => next(err))
        .catch(err=> next(err))  }
    }
    