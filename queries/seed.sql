CREATE DATABASE talent_trackerdb;

USE talent_trackerdb;

CREATE TABLE talent_trackerdb.department(
    id INT AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE talent_trackerdb.job_role(
    id INT AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    salary DECIMAL(19,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE talent_trackerdb.employee(
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES job_role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- Clear the DB to reseed with fresh tables --
DROP TABLE talent_trackerdb.employee;
DROP TABLE talent_trackerdb.job_role;
DROP TABLE talent_trackerdb.department;

-- testing --
SELECT * FROM talent_trackerdb.employee;
SELECT * FROM talent_trackerdb.job_role;
SELECT * FROM talent_trackerdb.department;