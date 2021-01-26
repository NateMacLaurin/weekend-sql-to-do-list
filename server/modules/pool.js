//pg pool config on localhost at database todo_list at 5432 on postgres

const pg = require('pg');

const config = {
    database : 'to_do_list',
    host : 'localhost',
    port : 5432,
};

const pool = new pg.Pool(config);

pool.on("connect", () => {
    console.log("Connected to postgres database");
});

pool.on("error", (err) => {
    console.log("error connecting to postgres", err);
});

//node export
module.exports = pool;
