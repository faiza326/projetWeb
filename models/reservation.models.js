const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema
    ({
        date_D:{type: Date, required: true },
        date_F:{type: Date, required: true },
        date_P:{type: Date, required: true },
        montant : {type: Number, required: true}

    },
    {collection : "reservations",
     timestamps : true}
);
module.exports=mongoose.model("Reservation",reservationSchema);