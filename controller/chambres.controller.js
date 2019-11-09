const Chambre = require('../models/chambre.models');

module.exports = {
    getAll:(rep,res,next)=>{
        Chambre.find({})
        .then((chambres)=>{
            res.statusCode = 200;
            res.setHeader("content-Type","application/json");
            res.json(chambres);
        }, (err)=>next(err))
        .catch (err => next(err));
    },

    addOne:(req,res,next)=>{
        Chambre.create(req.body)
           //then s'excute si tous va bien 
           .then(chambres =>{
               res.statusCode=200;
               res.setHeader("content-Type","application/json");
               res.json(chambres);
           }, (err)=>next(err)
           )
           .catch (err => next(err));
    },

    deleteAll:(rep,res,next)=>{
        Chambre.remove({})
        //then s'excute si tous va bien 
        .then ((resp) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(chambres);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },
    deleteOne:(rep,res,next)=>{
        Chambre.findByIdAndDelete(req.params.id)
        //then s'excute si tous va bien 
        .then ((resp) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(chambres);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },


    getOne:(rep,res,next)=>{
        Chambre.findById(req.params.id)
        //then s'excute si tous va bien 
        .then ((book) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(chambres);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },
    updateOne:(rep,res,next)=>{
        Chambre.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        //then s'excute si tous va bien 
        .then ((client) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(chambres);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },

    deleteOne:(rep,res,next)=>{
        Chambre.findByIdAndDelete(req.params.id)
        .then(
            resp => {
                res.statusCode = 200;
                res.setHeader("Content-Type","application/json");
                res.json(resp);
            },
            (err) => next(err))
        .catch(err=> next(err))  }
    }