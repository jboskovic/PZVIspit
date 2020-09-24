const mongoose = require('mongoose');
const Step = require('../models/stepsModel');

module.exports.getSteps = async (req, res, next) => {
    try {
        const steps = await Step.find({}).exec();
        res.status(200).json(steps);
    } catch (err) {
        next(err);
    }
}
module.exports.getStepsByGoal = async (req, res, next) => {
    try {
        const steps = await Step.find({ cilj: req.params.id }).exec();
        res.status(200).json(steps);
    } catch (err) {
        next(err);
    }
};

module.exports.insertStep = async (req, res, next) => {
    const step = new Step({
        _id: new mongoose.Types.ObjectId(),
        cilj: req.body.cilj,
        redniBroj: req.body.redniBroj,
        opis: req.body.opis,
    });
    try {
        const savedStep = await step.save();
        if (savedStep) {
            res.status(200).json(savedStep);
        } else {
            res.status(400).json({ message: 'cannot add step' });
        }
    } catch (err) {
        next(err);
    }
};