const express = require('express');

const router = express.Router();

const listsController = require('../controllers/lists_controller');

router.get('/', listsController.lists);


router.post('/create-task', listsController.lists);

module.exports = router;