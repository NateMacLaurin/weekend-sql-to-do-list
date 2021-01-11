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
router.post('/',  (req, res) => {
    let newTask = req.body;
    console.log(`POST`, newTask);
  
    const queryText = `INSERT INTO "todo" ("task")
                     VALUES ($1);`;
    pool.query(queryText, [newTask.task])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new task`, error);
        res.sendStatus(500);
      });
  });

//DELETE
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('DELETE -', id);
    const queryText = `DELETE FROM "todo" WHERE "id" = $1;`;

    pool.query(queryText, [id])
    .then(result => {
        console.log('Deleted successfully');
        res.sendStatus(204);
    }).catch(error => {
        console.log('Error deleting a task', error);
        res.sendStatus(500);
    });
});
//PUT

//NPM export
module.exports = router;