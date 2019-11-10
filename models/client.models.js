const mongoose = require ("mongoose");
 var bcrypt = require('bcrypt');
//var SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;
var client = this;
var passportLocalMongoose = require('passport-local-mongoose');

const clientSchema = new Schema
    ({
        nom: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z]+$/, 'is invalid']},
        // prenom: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid']},
        email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid']},
        password:{type: String, required: true, min: 8,max: 12 }//,
        // confirm_password:{type: String, required: true, min: 8,max: 12 },
        // date_naissance:{type: Date, required: true },
        // telephone:{type: String, required: true, match: [/^[+]?[0-9]+$/, 'is invalid'],max: 12},
        // Npass:{type: Number, required: true,match: [/^[0-9]+$/, 'is invalid'] }
    },
    {collection : "clients",
     timestamps : true}
);





// var confirm_password=this.confirm_password;
// clientSchema.methods.comparePassword = function(confirm_password,cb) {
//     bcrypt.compare(confirm_password, this.password, function(err, isMatch) {
//      if (err) return cb(err);
//      cb(null, isMatch);
//     });
// };


clientSchema.plugin(passportLocalMongoose);


// clientSchema.pre('save', function (next) {
//     bcrypt.hash(client.password, SALT_WORK_FACTOR, function (err, hash) {
//       if (err) {
//         return next(err);
//       }
//       client.password = hash;
//       next();
//     })
//   });


//   clientSchema.pre('save', function(next) {
//     const user = this;
//     bcrypt.hash(client.password, 10, function(err, hash) {
//        if (err) {
//        return next(err);
//        }
//        client.password = hash;
//        next();
//     })
//   });
module.exports=mongoose.model("Client",clientSchema);
