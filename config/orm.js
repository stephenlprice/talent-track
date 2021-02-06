const connection = require('./connection.js');

// Object Relational Mapper (ORM)
// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values

const viewAll = (table, response) => {
    const query = 'SELECT * FROM ??;';
    connection.query(
        query,
        [table],
        (err, res) => {
            if (err) throw err;
            response(res);
        }
    );
};



const orm = {
    viewAll
};

module.exports = orm;