const express = require('express');
const router = express.Router();

const controller = require('../../controller/goalsController');

router.get('/', controller.getGoals);
router.get('/:id', controller.getGoalById);
router.post('/', controller.insertGoal);

module.exports = router;
