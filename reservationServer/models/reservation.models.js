const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema
    ({
        dateD:{type: Date, required: true },
        dateF:{type: Date, required: true },
        dateP:{type: Date, required: true },
        password:{type: String, required: true },
        date_naissance:{type: String, required: true },
        telephone:{type: Number , default: -1},
        montant : {type: Number, required: true}

    },
    {collection : "reservations",
     timestamps : true}
);
module.exports=mongoose.model("Reservation",reservationSchema);