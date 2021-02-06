const startQ = [
    {
        type: 'confirm',
        name: 'start',
        message: 'Do you wish to query the Talent Track - Employee Database? (y/n)',
        default: false
    }
];

const menuQ = [
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

const viewQ = [
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



module.exports = startQ, menuQ, viewQ;