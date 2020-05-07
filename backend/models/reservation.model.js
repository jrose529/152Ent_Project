const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resSchema = new Schema({
    stuResName: { type: String, required: true, trim: true },
    stuResEmail: { type: String, required: true, trim: true },
    stuResPhone: { type: String, required: true, trim: true },
    stuResDate: { type: Date, required: true },
    stuResHours: { type: Number, required: true }, 
}, {
    timestamps: true,
});

const Reservation = mongoose.model('Reservation', resSchema);

module.exports = Reservation;