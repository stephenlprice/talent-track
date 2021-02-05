const inquirer = require('inquirer');
const mysql = require('mysql');
const table = require('console.table');

// Connection settings
const connection = mysql.createConnection({
    host: 'localhost',
  
    port: 3306,
  
    user: 'root',
  
    password: 'bootcamp',
    database: 'talent_trackerdb',
  });
  


// Connect to the DB and launch the app
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    menu();
  });