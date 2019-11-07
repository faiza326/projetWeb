const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const hotelSchema = new Schema
    ({
        nom:{type: String, required: true },
        adresse:{type: String, required: true },
        codePostal:{type: Number, required: true },
        telephone:{type: Number, required: true },
        pays:{type: String, required: true }
    },
    {collection : "hotels",
     timestamps : true}
);
module.exports=mongoose.model("Hotel",hotelSchema);