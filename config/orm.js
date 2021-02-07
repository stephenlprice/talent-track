const connection = require('./connection.js');

// Object Relational Mapper (ORM)
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

const view = {
    table(table, response) {
        const query = 'SELECT * FROM ??;';
        connection.query(
            query,
            [table],
            (err, res) => {
                if (err) throw err;
                response(res);
            }
        );
    },
    all(response) {
        const query = 
        'SELECT e.id, first_name, last_name, manager_id, e.role_id, title, salary, d.name AS department '
        + 'FROM talent_trackerdb.employee AS e '
        + 'INNER JOIN talent_trackerdb.job_role AS r '
        + 'ON e.role_id = r.id '
        + 'INNER JOIN talent_trackerdb.department AS d '
        + 'ON r.department_id = d.id '
        + 'ORDER BY e.id ASC;';
        connection.query(
            query,
            (err, res) => {
                if (err) throw err;
                response(res);
            }
        );
    },
    manager(response) {
        const query = 
        'SELECT e.id, e.first_name, e.last_name, e.role_id, r.title ' 
        + 'FROM talent_trackerdb.employee AS e '
        + 'INNER JOIN talent_trackerdb.job_role AS r '
        + 'ON e.role_id = r.id '
        + 'WHERE e.manager_id IS NULL '
        + 'ORDER BY e.manager_id ASC;';
        connection.query(
            query,
            (err, res) => {
                if (err) throw (err);
                response(res);
            }
        );

    },
    managerRole(response) {
        const query = 
        'SELECT r.id, r.title, e.role_id, e.manager_id ' 
        + 'FROM talent_trackerdb.job_role AS r '
        + 'INNER JOIN talent_trackerdb.employee as e '
        + 'ON r.id = e.role_id '
        + 'WHERE e.manager_id IS NULL '
        + 'ORDER BY r.title ASC;';
        connection.query(
            query,
            (err, res) => {
                if (err) throw (err);
                response(res);
            }
        );

    }
};

const insert = {
    department(name, response) {
        const query = 'INSERT INTO department(name) VALUES (?);'; 
        connection.query(
            query,
            [name],
            (err, res) => {
                if (err) throw err;
                response(res);
            }
        );
    },
    role(title, salary, department_id, response) {
        const query = 'INSERT INTO job_role(title, salary, department_id) VALUES (?, ?, ?);'; 
        connection.query(
            query,
            [title, salary, department_id],
            (err, res) => {
                if (err) throw err;
                response(res);
            }
        );
    },
    employee(first, last, role, manager, response) {
        const query = 'INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);'; 
        connection.query(
            query,
            [first, last, role, manager],
            (err, res) => {
                if (err) throw err;
                response(res);
            }
        );
    },
    manager(first, last, role, response) {
        const query = 'INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, NULL);'; 
        connection.query(
            query,
            [first, last, role],
            (err, res) => {
                if (err) throw err;
                response(res);
            }
        );
    }
};

const orm = {
    view,
    insert
};

module.exports = orm;