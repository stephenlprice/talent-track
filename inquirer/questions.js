const inquirer = require('inquirer');
const orm = require('../config/orm.js');

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
            'Return to Start'
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
            'Add a new Manager',
            'Add a new Employee',
            new inquirer.Separator(),
            'Return to Start'
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
            type: 'input',
            name: 'department',
            message: 'Which Department ID will employ this new Role?'
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
            type: 'input',
            name: 'role',
            message: "What is the new Manager's role ID?"
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
    start,
    menu,
    view,
    insert
}

module.exports = q;