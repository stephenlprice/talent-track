const inquirer = require('inquirer');
const orm = require('../config/orm.js');

const departments = [];
const roles = [];
const managerRoles = [];

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
                managerRoles.splice(0, roles.length);
            
            default:
                managerRoles.splice(0, roles.length);
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
            'Delete Records', 
            'View Total Annualized Budget by Department', 
            new inquirer.Separator(), 
            'Return to Start'
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
            'View All',
            new inquirer.Separator(),
            'Return to Main Menu'
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
            'Return to Main Menu'
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
            message: 'Which Department ID will employ this new Role?',
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
            message: "What is the new employee's first name?"
        },
        {
            type: 'input',
            name: 'last',
            message: "What is the new employee's last name?"
        },
        {
            type: 'input',
            name: 'role',
            message: "What is the new employee's role ID?"
        },
        {
            type: 'input',
            name: 'manager',
            message: "What is the ID that belongs by the new employee's Manager?"
        }
    ]
};

const q = {
    choices,
    start,
    menu,
    view,
    insert
}

module.exports = q;