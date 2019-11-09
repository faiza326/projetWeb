const Client = require('../models/client.models');
 
module.exports = {
    getAll:(rep,res,next)=>{
        Client.find({})
        .then((clients)=>{
            res.statusCode = 200;
            res.setHeader("content-Type","application/json");
            res.json(clients);
        }, (err)=>next(err))
        .catch (err => next(err));
    },

    addOne:(req,res,next)=>{ 
        // const email=req.body;
        // const foundClient=Client.findOne({email:email});
        // if(foundClient){
        //     return res.status(403).json({error:'ce compte existe deja'});
        // }
     
        Client.findOne({ email: req.body.email  }, function(err, client) {
            if(err) {
                return res.status(403).json({error:'il y a un probleme'});
            }
         
            //if a user was found, that means the user's email matches the entered email
            if (client) {
                 return res.status(403).json({error:'A user with that email has already registered. Please use a different email..'});
            } else {
                //code if no user with entered email was found
                Client.create(req.body)
                //then s'excute si tous va bien 
                .then(clients =>{
                    res.statusCode=200;
                    res.setHeader("content-Type","application/json");
                    res.json(clients);
                }, (err)=>next(err)
                )
                .catch (err => next(err));
            }
         }); 

            





        // else{
        // Client.create(req.body)
        //    //then s'excute si tous va bien 
        //    .then(clients =>{
        //        res.statusCode=200;
        //        res.setHeader("content-Type","application/json");
        //        res.json(clients);
        //    }, (err)=>next(err)
        //    )
        //    .catch (err => next(err));
        // }
  
    },



    /*function findById(id) {
        return new Promise((resolve, reject) => {
            let items = db.collection('items');
            items.findOne({ _id: new mongodb.ObjectID(id) }).then((document) => {
                if (document) {
                    resolve({ data: JSON.stringify(document), statusCode: 200});
                } else {
                    let message = 'No document matching id: ' + id + ' could be found!';
                    logger.error(message, 'findById()');
                    reject(message);
                }
            }).catch((err) => {
                logger.error('Error occurred: ' + err.message, 'findById()');
                reject(err);
            });
        });
    }
    


    create(req,res){

        const name = req.body;
        const age = req.body;
        const poste = req.body;
        const salaire = req.body;

        const user = new User({name});

        user.save().then(()=>{
            res.send({result : "Un user ajouté : " + user}) 
        })*/













    deleteAll:(rep,res,next)=>{
        Client.remove({})
        //then s'excute si tous va bien 
        .then ((resp) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(clients);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },
    deleteOne:(rep,res,next)=>{
        Client.findByIdAndDelete(req.params.id)
        //then s'excute si tous va bien 
        .then ((resp) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(clients);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },


    getOne:(rep,res,next)=>{
        Client.findById(req.params.id)
        //then s'excute si tous va bien 
        .then ((clients) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(clients);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },
    updateOne:(rep,res,next)=>{
        Client.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true})
        //then s'excute si tous va bien 
        .then ((clients) => {
            res.statusCode=200;
            res.setHeader("content-Type","application/json");
            res.json(clients);
        }, err => next(err)   
        ) 
        .catch (err => next(err));
    },

    deleteOne:(rep,res,next)=>{
        Client.findByIdAndDelete(req.params.id)
        .then(
            resp => {
                res.statusCode = 200;
                res.setHeader("Content-Type","application/json");
                res.json(resp);
            },
            (err) => next(err))
        .catch(err=> next(err))  }
  
    }
    
   