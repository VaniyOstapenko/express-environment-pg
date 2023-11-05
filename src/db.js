const { Pool } = require('pg')

const pool = new Pool({
    password: "Vaniy122994",
    database: "skills",
    port: 5432,
    host: "localhost",
    user: 'postgres'
})

module.exports = pool;