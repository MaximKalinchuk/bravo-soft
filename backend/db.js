const Pool = require('pg').Pool
const pool = new Pool({
    user: 'ashby',
    password: 'root',
    host: 'localhost',
    port: 5432,
    database: 'node_postgres'
})

module.exports = pool