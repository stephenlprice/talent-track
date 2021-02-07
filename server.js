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
          q.choices.roles('set');
          q.choices.managers('set');
          console.log("Preparing data insertion module...");
          setTimeout(() => {
            inquirer
              .prompt(q.insert.employee)
              .then((answer) => {
                console.log('Inserting a new Employee...');
                orm.view.all((response) => {
                  for (let i = 0; i < response.length; i++) {
                    if(answer.role === response[i].title) {
                      let role = response[i].role_id;
                      let manager = response[i].manager_id;
                      console.log('Confirming if selected Manager belongs to the same department...');
                      orm.insert.employee(answer.first.toLowerCase(), answer.last.toLowerCase(), role, manager, (response) => {
                        orm.view.table('employee', (response) => {
                          console.table(response);
                          insert();
                        });
                      });
                      return;
                    }
                  }
                });
              });
          }, 1000);
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
  inquirer
    .prompt(q.update.menu)
    .then((answer) => {
      switch (answer.menu) {
        case "Update an Employee's records":
          q.choices.managers('set');
          q.choices.roles('set');
          q.choices.employees('set');
          console.log("Preparing data update module...");
          setTimeout(() => {
            inquirer
              .prompt(q.update.employee)
              .then((answer) => {
                console.log('Updating Employee records...');
                let role;
                let manager;
                let employee;
                orm.view.table('job_role', (response) => {
                  for (let i = 0; i < response.length; i++) {
                    if(answer.role === response[i].title) {
                      role = response[i].role_id;
                      return;
                    }
                  }
                });
                orm.view.manager((response) => {
                  for (let i = 0; i < response.length; i++) {
                    if(answer.manager.includes(response[i].id + ': ' + response[i].first_name 
                    + ' ' + response[i].last_name + ', ' + response[i].title)) {
                      manager = response[i].id;
                      return;
                    }
                  }
                });
                orm.view.table('employee', (response) => {
                  for (let i = 0; i < response.length; i++) {
                    if(answer.employee.includes(response[i].id + ': ' + response[i].first_name 
                    + ' ' + response[i].last_name + ', ' + response[i].title)) {
                      employee = response[i].id;
                      return;
                    }
                  }
                });
                console.log("role: " + role,"manager: " + manager,"employee: " + employee);
                orm.update.employee.role(role, manager, employee, (response) => {
                  orm.view.all((response) => {
                    console.table(response);
                    update();
                  });
                });
              });
          }, 1000);
          break;
        
        case 'Return to Main Menu':
          console.log('Returning to main menu...');
          menu();
          break;
        
        default:
          update();
      }

    });
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