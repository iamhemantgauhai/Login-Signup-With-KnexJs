require('dotenv').config()
const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user :'root',
      password : 'hemant@123',
      database : "user"
    }
  });

module.exports = knex
