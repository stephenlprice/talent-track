const inquirer = require('inquirer');

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
            'Add a new Employee',
            new inquirer.Separator(),
            'Return to Start'
        ]
    },
    department: {
        type: 'input',
        name: 'department',
        message: 'What will be the name of the new Department?'
    }
};

const q = {
    start,
    menu,
    view,
    insert
}

module.exports = q;