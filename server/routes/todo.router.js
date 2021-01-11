//express routes here, use the router to call pg pool for database interfacing

const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

//GET
router.get('/', (req, res) => {
    console.log('GET');

    const queryText = `SELECT * FROM "todo";`;

    pool.query(queryText).then(result => {
        res.send(result.rows);
    }).catch(error => {
        console.log('PG Error on GET', error);
        res.sendStatus(500);
    });

});

//POST

//DELETE

//PUT

//NPM export
module.exports = router;