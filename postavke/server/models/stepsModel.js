const mongoose = require('mongoose');

const stepsSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    cilj: {
        type: mongoose.Types.ObjectId,
        ref: 'Goal',
        required: true
    },
    redniBroj: {
        type: Number,
    },
    opis: {
        type: String,
    }
});

const stepsModel = mongoose.model('Step', stepsSchema);
module.exports = stepsModel;