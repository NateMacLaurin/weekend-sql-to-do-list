//express routes here, use the router to call pg pool for database interfacing

const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
    console.log('GET');
    
    res.sendStatus(500);
});

//POST

//DELETE

//PUT

//NPM export
module.exports = router;