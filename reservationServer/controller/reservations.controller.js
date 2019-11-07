const Client = require('../models/reservation.models');

module.exports = {
    getAll:(rep,res,next)=>{
        Reservation.find({})
        .then((clients)=>{
            res.statusCode = 200;
            res.setHeader("content-Type","application/json");
            res.json(reservations);
        }, (err)=>next(err))
        .catch (err => next(err));
    },

    addOne:(req,res,next)=>{
        Reservation.create(req.body)
           //then s'excute si tous va bien 
           .then(Reservationss =>{
               res.statusCode=200;
               res.setHeader("content-Type","application/json");
               res.json(Reservationss);
           }, (err)=>next(err)
           )
           .catch (err => next(err));
    },

    deleteAll:(rep,res,next)=>{
        Reservation.remove({})
        //then s'excute si tous va bien 
        .then ((resp) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(reservations);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },
    deleteOne:(rep,res,next)=>{
        Reservation.findByIdAndDelete(req.params.id)
        //then s'excute si tous va bien 
        .then ((resp) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(reservations);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },


    getOne:(rep,res,next)=>{
        Reservation.findById(req.params.id)
        //then s'excute si tous va bien 
        .then ((clients) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(reservations);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },
    updateOne:(rep,res,next)=>{
        Reservation.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        //then s'excute si tous va bien 
        .then ((reservations) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(reservations);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },

    deleteOne:(rep,res,next)=>{
        Reservation.findByIdAndDelete(req.params.id)
        .then(
            resp => {
                res.statusCode = 200;
                res.setHeader("Content-Type","application/json");
                res.json(resp);
            },
            (err) => next(err))
        .catch(err=> next(err))  }
    }
    