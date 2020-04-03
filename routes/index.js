const express = require('express');

const router = express.Router();

const db = require('../config/mongoose');


const listsHomeController = require('../controllers/lists_home_controller');

const listController = require('../controllers/lists_controller');

router.get('/', listsHomeController.lists);

router.post('/create-task', listController.tasks);


module.exports = router;