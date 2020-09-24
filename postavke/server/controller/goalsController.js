const mongoose = require('mongoose');
const Goal = require('../models/goalsModel');

module.exports.getGoals = async (req, res, next) => {
    try {
        const goals = await Goal.find({}).exec();
        res.status(200).json(goals);
    } catch (err) {
        next(err);
    }
};

module.exports.getGoalById = async (req, res, next) => {
    try {
        const goal = await Goal.findById(req.params.id).exec();
        if (goal) {
            res.status(200).json(goal);
        } else {
            res.status(404).json({ message: 'Goal with that id doesnt exists' });
        }
    } catch (err) {
        next(err);
    }
};

module.exports.insertGoal = async (req, res, next) => {
    const goal = new Goal({
        _id: new mongoose.Types.ObjectId(),
        naziv: req.body.naziv,
        opis: req.body.opis,
        vrednost: req.body.vrednost
    });
    try {
        const savedGoal = await goal.save();
        if (savedGoal) {
            res.status(201).json(goal);
        } else {
            res.status(400).json({ message: "cannto add goal" });
        }
    } catch (err) {
        next(err);
    }
};