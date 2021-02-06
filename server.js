const inquirer = require('inquirer');
const cTable = require('console.table');
const q = require('./inquirer/questions.js');
const orm = require('./config/orm.js');
const connection = require('./config/connection.js');

const start = () => {
  inquirer
    .prompt(q.start)
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
      }
    });
};

const menu = () => {
  inquirer
    .prompt(q.menu)
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
          start();
          break;
        
        default:
          menu();
      }
    });
};

const view = () => {
  inquirer
    .prompt(q.view)
    .then((answer) => {
      switch (answer.view) {
        case 'View Departments':
          console.log('Querying all Departments...');
          orm.viewAll('department', (response) => {
            console.table(response);
            view();
          });
          break;
        
        case 'View Roles':
          console.log('Querying all Roles...');
          orm.viewAll('job_role', (response) => {
            console.table(response);
            view();
          });
          break;
        
        case 'View Employees':
          console.log('Querying all Employees...');
          orm.viewAll('employee', (response) => {
            console.table(response);
            view();
          });
          break;

        case 'View All':
          console.log('Querying all Records...');
          operations('select', '*', 'all');
          break;
        
        case 'Return to Start':
          console.log('Returning to start menu...');
          start();
          break;
        
        default:
          view();
      }
    });
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
  console.log("Welcome to Talent Track!");
  start();
};

// initialize the program
init();