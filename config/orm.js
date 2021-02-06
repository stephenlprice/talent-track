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
        'SELECT e.id, first_name, last_name, manager_id, title, salary, d.name AS department '
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
    }
};

const insert = {
    department(name, response) {
        const query = 'INSERT INTO department(name) VALUES (?)'; 
        connection.query(
            query,
            [name],
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