const mongoose = require('mongoose');

const goalsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    naziv: {
        type: String,
        required: true,
    },
    opis: {
        type: String,
        required: true,
    },
    vaznost: {
        type: Number,
        required: true,
    }

});

const goalsModel = mongoose.model('Goal', goalsSchema);
module.exports = goalsModel;