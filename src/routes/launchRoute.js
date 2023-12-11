const express = require('express');
const router = express.Router();


const launchController = require('../controllers/launchController');

router  
    .route('/')
    .get(launchController.listAllLaunches)
    .post(launchController.createLaunch)


module.exports = router;