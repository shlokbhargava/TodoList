const express = require('express');

const router = express.Router();


router.use(express.urlencoded());


const listsHomeController = require('../controllers/lists_home_controller');
const listController = require('../controllers/lists_controller');
const deleteController = require('../controllers/delete_controller');

router.get('/', listsHomeController.lists);

router.post('/create-task', listController.tasks);

router.get('/delete-task', deleteController.delete);

module.exports = router;