const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const chambreSchema = new Schema
    ({
        type:{type: Number, required: true },
        prix:{type: Number, required: true },
        telephone:{type: String, required: true },
    },
    {collection : "chambres",
     timestamps : true}
);
module.exports=mongoose.model("Chambre",chambreSchema);