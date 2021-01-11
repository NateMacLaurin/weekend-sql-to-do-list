//localhost express server on port 5000, set up router and listener here

const express = require('express');
const bodyParser = require('body-parser');
const taskRouter = require('./routes/todo.router');

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.use('/tasks', taskRouter);

app.use(express.static('server/public'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('listening on port', PORT);
})