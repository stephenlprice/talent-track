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
          orm.view.table('department', (response) => {
            console.table(response);
            view();
          });
          break;
        
        case 'View Roles':
          console.log('Querying all Roles...');
          orm.view.table('job_role', (response) => {
            console.table(response);
            view();
          });
          break;
        
        case 'View Employees':
          console.log('Querying all Employees...');
          orm.view.table('employee', (response) => {
            console.table(response);
            view();
          });
          break;

        case 'View All':
          console.log('Querying all Records...');
          orm.view.all((response) => {
            console.table(response);
            view();
          });
          break;
        
        case 'Return to Main Menu':
          console.log('Returning to main menu...');
          menu();
          break;
        
        default:
          view();
      }
    });
};

const insert = () => {
  inquirer
    .prompt(q.insert.menu)
    .then((answer) => {
      switch (answer.menu) {
        case 'Add a new Department':
          inquirer
            .prompt(q.insert.department)
            .then((answer) => {
              console.log('Inserting a new Department...');
              orm.insert.department(answer.department.toLowerCase(), (response) => {
                orm.view.table('department', (response) => {
                  console.table(response);
                  insert();
                });
              });
            });
          break;
        
        case 'Add a new Role':
          q.choices.departments('set');
          console.log("Preparing data insertion module...");
          setTimeout(() => {
            inquirer
              .prompt(q.insert.role)
              .then((answer) => {
                console.log('Inserting a new Role...');
                orm.view.table('department', (response) => {
                  for (let i = 0; i < response.length; i++) {
                    if(answer.department === response[i].name) {
                      const id = response[i].id;
                      orm.insert.role(answer.title.toLowerCase(), answer.salary, id, (response) => {
                        orm.view.table('job_role', (response) => {
                          console.table(response);
                          insert();
                        });
                      });
                    }
                  }
                });
              });
          }, 1000);
          break;

        case 'Add a new Manager to an existing Role':
          q.choices.managerRoles('set');
          console.log("Preparing data insertion module...");
          setTimeout(() => {
            inquirer
              .prompt(q.insert.manager)
              .then((answer) => {
                console.log('Inserting a new Manager...');
                orm.view.table('job_role', (response) => {
                  for (let i = 0; i < response.length; i++) {
                    if(answer.role === response[i].title) {
                      const id = response[i].id;
                      orm.insert.manager(answer.first.toLowerCase(), answer.last.toLowerCase(), id, (response) => {
                        orm.view.manager((response) => {
                          console.table(response);
                          insert();
                        });
                      });
                    }
                  }
                });
              });
          }, 1000);
          break;
        
        case 'Add a new Employee to an existing Role':
          orm.view.table('job_role', (response) => {
            console.table(response);
            console.log('Use the above table to assign the new Employee to a Role by ID!');

            inquirer
            .prompt(q.insert.employee)
            .then((answer) => {
              console.log('Inserting a new Employee...');
              orm.insert.employee(answer.first, answer.last, answer.role, answer.manager, (response) => {
                orm.view.table('employee', (response) => {
                  console.table(response);
                  insert();
                });
              });
            });
          });
          break;
        
        case 'Return to Main Menu':
          console.log('Returning to main menu...');
          menu();
          break;
        
        default:
          insert();
      }
    });
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