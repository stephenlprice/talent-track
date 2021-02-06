const inquirer = require('inquirer');
const mysql = require('mysql');
const table = require('console.table');
const q = require('./inquirer/questions.js');

// Connection settings
const connection = mysql.createConnection({
    host: 'localhost',
  
    port: 3306,
  
    user: 'root',
  
    password: 'bootcamp',
    database: 'talent_trackerdb',
});

const start = () => {
  inquirer
    .prompt(q.startQ)
    .then((answer) => {
      switch (answer.start) {
        case true:
          console.log('Initiating the start menu...');
          menu();
          break;

        case false:
          console.log('Thank you for using Talent Track, goodbye!');
          connection.end();
          break;
        
        default:
          start();
      }
    });
};

const menu = () => {
  inquirer
    .prompt(q.menuQ)
    .then((answer) => {
      switch (answer.menu) {
        case 'View Records':
          console.log('Initiating the SELECT query menu...');
          view();
          break;
        
        case 'Insert New Records':
          console.log('Initiating the INSERT query menu...');
          insert();
          break;

        case 'Update Records':
          console.log('Initiating the UPDATE query menu...');
          update();
          break;

        case 'Delete Records':
          console.log('Initiating the DELETE query menu...');
          del();
          break;
        
        case 'View Total Annualized Budget by Department':
          console.log('Initiating the budget query...');
          budget();
          break;
        
        case 'Return to Start':
          console.log('Returning to start menu...');
          budget();
          break;
        
        default:
          menu();
      }
    });
};

const view = () => {
};

const insert = () => {
};

const update = () => {
};

const del = () => {
};

const budget = () => {
};

// function to initialize program
function init() {
  start();
};

// Connect to the DB and launch the app
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    // initialize the program
    init();
});