const mongoose = require("mongoose");

const bedSchema = new mongoose.Schema({
    Flat_Beds: {type: Number, require: true},
    Recliner_Beds: {type: Number, require: true}
},
{
    versionKey: false,
    timestamps: true,
})

const BedSchema = mongoose.model("bed",bedSchema );
module.exports = BedSchema;

