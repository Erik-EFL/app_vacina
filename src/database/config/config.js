require('dotenv').config();

module.exports = {
  development: {
    database: process.env.POSTGRES_DB || 'db',
    username: process.env.POSTGRES_USER || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    dialect: 'postgres',
    logging: false,
  },
}
