const mysql = require('mysql');

// Connection settings
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'bootcamp',
  database: 'talent_trackerdb',
});

// Connect to the DB
connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});

module.exports = connection;