const mongoose = require ("mongoose");
var bcrypt = require('bcrypt');
var SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;
var client = this;
// var uniqueValidator = require('mongoose-unique-validator');
const clientSchema = new Schema
    ({
        nom: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid']},
        prenom: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid']},
        email: {type: String, lowercase: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid']},
        password:{type: String, required: true, min: 8,max: 12 },
        confirm_password:{type: String, required: true, min: 8,max: 12 },
        date_naissance:{type: Date, required: true },
        telephone:{type: String, required: true, match: [/^[+]?[0-9]+$/, 'is invalid'],max: 12},
        Npass:{type: Number, required: true,match: [/^[0-9]+$/, 'is invalid'] }
    },
    {collection : "clients",
     timestamps : true}
);

clientSchema.pre('save', function(next){
//    if (!client.isModified('password')) return next();
 
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);
 
        bcrypt.hash(client.password, salt, function(err, hash){
            if(err) return next(err);
            client.password = hash;
            next();
        });
        bcrypt.hash(client.confirm_password, salt, function(err, hash){
            if(err) return next(err);
            client.confirm_password = hash;
            next();
        });
    });
});
// var confirm_password=this.confirm_password;
// clientSchema.methods.comparePassword = function(confirm_password,cb) {
//     bcrypt.compare(confirm_password, this.password, function(err, isMatch) {
//      if (err) return cb(err);
//      cb(null, isMatch);
//     });
// };
// var crypto = require('crypto');
// clientSchema.methods.validPassword = function(password) {
//     var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
//          return this.hash === hash;
// };
// UserSchema.methods.setPassword = function(password){
//     this.salt = crypto.randomBytes(16).toString('hex');
//     this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
// };
module.exports=mongoose.model("Client",clientSchema);
