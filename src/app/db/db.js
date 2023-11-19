const { Client } = require('pg');

const client = new Client({

    host: 'postgres',
    user: 'user',
    password: 'user',
    port: 5432,
    database: 'users'

});

module.exports = client;