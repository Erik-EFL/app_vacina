require('dotenv').config();

const config = {
  username: process.env.POSTGRES_USER,
  password: 'postgres',
  dialect: 'postgres',
}

module.exports = config;
