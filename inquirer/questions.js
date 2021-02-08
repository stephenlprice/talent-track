const inquirer = require('inquirer');
const orm = require('../config/orm.js');

const departments = [];
const roles = [];
const managerRoles = [];
const managers = [];
const employees = [];

const choices = {
    departments(operation) {
        switch (operation) {
            case 'set':
                orm.view.table('department', (response) => {
                    for (let i = 0; i < response.length; i++) {
                        departments.push(response[i].name);
                    }
                });
                break;
            
            case 'reset':
                departments.splice(0, departments.length);
                break;
            
            default:
                departments.splice(0, departments.length);
        }
    },
    managerRoles(operation) {
        switch (operation) {
            case 'set':
                orm.view.managerRole((response) => {
                    for (let i = 0; i < response.length; i++) {
                        managerRoles.push(response[i].title);
                    }
                });
                break;
            
            case 'reset':
                managerRoles.splice(0, managerRoles.length);
                break;
            
            default:
                managerRoles.splice(0, managerRoles.length);
        }
    },
    managers(operation) {
        switch (operation) {
            case 'set':
                orm.view.manager((response) => {
                    for (let i = 0; i < response.length; i++) {
                        managers.push(response[i].id + ': ' + response[i].first_name 
                        + ' ' + response[i].last_name + ', ' + response[i].title);
                    }
                });
                break;
            
            case 'reset':
                managers.splice(0, managers.length);
                break;
            
            default:
                managers.splice(0, managers.length);
        }
    },
    roles(operation) {
        switch (operation) {
            case 'set':
                orm.view.table('job_role', (response) => {
                    for (let i = 0; i < response.length; i++) {
                        roles.push(response[i].title);
                    }
                });
                break;
            
            case 'reset':
                roles.splice(0, roles.length);
                break;
            
            default:
                roles.splice(0, roles.length);
        }
    },
    employees(operation) {
        switch (operation) {
            case 'set':
                orm.view.all((response) => {
                    for (let i = 0; i < response.length; i++) {
                        employees.push(response[i].id + ': ' + response[i].first_name 
                        + ' ' + response[i].last_name + ', ' + response[i].title);
                    }
                });
                break;
            
            case 'reset':
                employees.splice(0, employees.length);
                break;
            
            default:
                employees.splice(0, employees.length);
        }
    }
};

const start = [
    {
        type: 'confirm',
        name: 'start',
        message: 'Do you wish to query the Talent Track - Employee Database? (y/n)',
        default: true
    }
];

const menu = [
    {
        type: 'list',
        name: 'menu',
        message: 'What kind of query would you like to perform?',
        choices: [
            'View Records',
            'Insert New Records', 
            'Update Records', 
            'View Total Annualized Budget by Department', 
            new inquirer.Separator(), 
            'Return to Start',
            new inquirer.Separator()
        ]
    }
];

const view = [
    {
        type: 'list',
        name: 'view',
        message: 'What kind of records would you like to view?',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
            'View Employees by Manager',
            'View Total Annualized Budget by Department',
            'View All',
            new inquirer.Separator(),
            'Return to Main Menu',
            new inquirer.Separator()
        ]
    }
];

const insert = {
    menu: {
        type: 'list',
        name: 'menu',
        message: 'What kind of records would you like to add to the database?',
        choices: [
            'Add a new Department',
            'Add a new Role',
            'Add a new Manager to an existing Role',
            'Add a new Employee to an existing Role',
            new inquirer.Separator(),
            'Return to Main Menu',
            new inquirer.Separator()
        ]
    },
    department: {
        type: 'input',
        name: 'department',
        message: 'What will be the name of the new Department?'
    },
    role: [
        {
            type: 'input',
            name: 'title',
            message: 'What will be the title for the new Role?'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What will be the salary for the new Role?'
        },
        {
            type: 'list',
            name: 'department',
            message: 'Which Department will employ this new Role?',
            choices: departments
        }
    ],
    manager: [
        {
            type: 'input',
            name: 'first',
            message: "What is the new Manager's first name?"
        },
        {
            type: 'input',
            name: 'last',
            message: "What is the new Manager's last name?"
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the new Manager's role?",
            choices: managerRoles
        }
    ],
    employee: [
        {
            type: 'input',
            name: 'first',
            message: "What is the new Employee's first name?"
        },
        {
            type: 'input',
            name: 'last',
            message: "What is the new Employee's last name?"
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the new Employee's Role?",
            choices: roles
        },
        {
            type: 'list',
            name: 'manager',
            message: "Who is the new Employee's Manager?",
            choices: managers
        }
    ]
};

const update = {
    menu: {
        type: 'list',
        name: 'menu',
        message: 'What kind of records would you like to update?',
        choices: [
            "Update an Employee's records",
            new inquirer.Separator(),
            "Return to Main Menu",
            new inquirer.Separator()
        ]
    }, 
    employee: [
        {
            type: 'list',
            name: 'employee',
            message: 'Which Employee do you wish to update?',
            choices: employees
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the Employee's new Role?",
            choices: roles
        },
        {
            type: 'list',
            name: 'manager',
            message: "Who is the Employee's new Manager?",
            choices: managers
        }
    ] 
};

const q = {
    choices,
    start,
    menu,
    view,
    insert,
    update
}

module.exports = q;