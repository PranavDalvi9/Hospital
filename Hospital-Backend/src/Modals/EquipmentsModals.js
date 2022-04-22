const mongoose = require("mongoose");

const equipmentsSchema = new mongoose.Schema({
    Ventilator: {type: Number, require: true},
    Oxygen_Cylinder: {type: Number, require: true},
    Normal_Masks: {type: Number, require: true},
    Non_rebreather_masks: {type: Number, require: true}
},
{
    versionKey: false,
    timestamps: true,
})

const EquipmentsSchema = mongoose.model("equipments",equipmentsSchema );
module.exports = EquipmentsSchema;

