CREATE DATABASE talent_trackerdb;

USE talent_trackerdb;

CREATE TABLE department(
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NULL,
    PRIMARY KEY (id)
);

CREATE TABLE job_role(
    id INT AUTO_INCREMENT,
    title VARCHAR(50) NULL,
    salary DECIMAL(19,2) NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES job_role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- FULL OUTER JOIN ALL SCHEMAS --
-- SELECT * FROM employee e FULL OUTER JOIN role r ON e.role_id = r.id FULL OUTER JOIN department d ON r.department_id = d.id ORDER BY d.id ASC;