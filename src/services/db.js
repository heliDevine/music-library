/// before deploying with heroku///

const mysql = require('mysql2/promise');

const { DB_PASSWORD, DB_USER, DB_NAME, DB_HOST, DB_PORT, CLEARDB_DATABASE_URL } = process.env;

// module.exports = async () => {
//   const connection = await mysql.createConnection({
//     host: DB_HOST,
//     user: DB_USER,
//     password: DB_PASSWORD,
//     port: DB_PORT,
//     database: DB_NAME
//   });

//   return connection;
// };

/// after deploying with heroku///

const db = CLEARDB_DATABASE_URL
  ? await mysql.createConnection(CLEARDB_DATABASE_URL)
  : await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      port: DB_PORT,
      database: DB_NAME
    });

// create the database if it doesn't already exist
!CLEARDB_DATABASE_URL && (await db.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`));
!CLEARDB_DATABASE_URL && (await db.query(`USE ${DB_NAME}`));
await db.query(`CREATE TABLE IF NOT EXISTS Artist (
              id INT PRIMARY KEY auto_increment,
              name VARCHAR(25),
              genre VARCHAR(25)
             )`);
db.close();
