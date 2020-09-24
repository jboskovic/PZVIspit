const express = require('express');
const router = express.Router();

const controller = require('../../controller/stepsController');

router.get('/', controller.getSteps);
router.get('/:id', controller.getStepsByGoal);

router.post('/', controller.insertStep);

module.exports = router;