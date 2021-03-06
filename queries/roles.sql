USE talent_trackerdb;

-- Inserting Engineering Roles --
INSERT INTO talent_trackerdb.job_role(title, salary, department_id)
VALUES 
("engineering manager", 135000, 1),
("principal software engineer", 140000, 1),
("lead software engineer", 130000, 1),
("senior software engineer", 115000, 1),
("software engineer", 100000, 1),
("junior software engineer", 85000, 1),
("software engineering intern", 70000, 1);

-- Inserting Support Roles --
INSERT INTO talent_trackerdb.job_role(title, salary, department_id)
VALUES 
("support manager", 120000, 2),
("principal support engineer", 120000, 2),
("lead support engineer", 110000, 2),
("senior support engineer", 100000, 2),
("support engineer", 80000, 2),
("associate support engineer", 65000, 2);

-- Inserting Presales Roles --
INSERT INTO talent_trackerdb.job_role(title, salary, department_id)
VALUES 
("sales engineering manager", 135000, 3),
("principal sales engineer", 130000, 3),
("lead sales engineer", 120000, 3),
("senior sales engineer", 110000, 3),
("sales engineer", 90000, 3),
("associate sales engineer", 70000, 3);

-- Inserting Sales Roles --
INSERT INTO talent_trackerdb.job_role(title, salary, department_id)
VALUES 
("sales manager", 135000, 4),
("account executive", 135000, 4),
("enterprise sales executive", 120000, 4),
("commercial sales executive", 80000, 4),
("business development representative", 65000, 4);

-- Inserting Marketing Roles --
INSERT INTO talent_trackerdb.job_role(title, salary, department_id)
VALUES 
("marketing manager", 110000, 5),
("marketing specialist", 95000, 5),
("marketing coordinator", 75000, 5),
("marketing representative", 65000, 5);

-- Inserting Finance Roles --
INSERT INTO talent_trackerdb.job_role(title, salary, department_id)
VALUES 
("finance manager", 125000, 6),
("accounting specialist", 95000, 6),
("accounting coordinator", 85000, 6),
("finance analyst", 75000, 6);

-- Inserting Human Resources Roles --
INSERT INTO talent_trackerdb.job_role(title, salary, department_id)
VALUES 
("human resources manager", 125000, 7),
("human resources specialist", 95000, 7),
("human resources coordinator", 85000, 7),
("human resources analyst", 75000, 7);

SELECT * FROM talent_trackerdb.job_role;

-- Only returns manager roles --
SELECT r.title FROM talent_trackerdb.job_role AS r
WHERE r.title LIKE '%manager%'
ORDER BY r.title ASC;

-- query for orm.manager --
SELECT e.id, e.first_name, e.last_name, e.role_id, r.title, e.manager_id
FROM talent_trackerdb.employee AS e
INNER JOIN talent_trackerdb.job_role AS r
ON e.role_id = r.id
WHERE e.manager_id IS NULL
ORDER BY e.id ASC;

-- query for orm.managerRole --
SELECT r.id, r.title, e.role_id, e.manager_id
FROM talent_trackerdb.job_role AS r
INNER JOIN talent_trackerdb.employee as e
ON r.id = e.role_id
WHERE e.manager_id IS NULL
ORDER BY r.title ASC;