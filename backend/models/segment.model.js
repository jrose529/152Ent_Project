const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const segSchema = new Schema({
    segName: { type: String, required: true },
    segArtist: { type: String, required: true },
    segDesc: { type: String, required: true },
    segDate: { type: Date, required: true },
    segLink: { type: String, required: true },
}, {
    timestamps: true,
});

const Segment = mongoose.model('Segment', segSchema);

module.exports = Segment;