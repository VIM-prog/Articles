const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "123",
    host: "localhost",
    port: 5432,
    database: 'database_development'
})

pool.connect()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Connection error', err.stack);
    });


module.exports = pool