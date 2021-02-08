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

-- Inserting Deparments --
INSERT INTO talent_trackerdb.department(name)
VALUES 
("engineering"),
("support"),
("presales"),
("sales"),
("marketing"),
("finance"),
("human resources");

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

-- Inserting Management --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("raheem", "bohjani", 1, NULL),
("daniel", "berlin", 8, NULL),
("nena", "ballas", 14, NULL),
("sebastian", "briceño", 20, NULL),
("paula", "tulis", 25, NULL),
("carlos", "mancheno", 29, NULL),
("jim", "wehmeyer", 33, NULL);


-- Inserting Software Engineers --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("deep", "patel", 2, 1),
("christian", "henry", 2, 1),
("stephen", "price", 3, 1),
("phil", "sturgeon", 3, 1),
("vincenzo", "chianese", 3, 1),
("ross", "mcdonald", 4, 1),
("chris", "lott", 4, 1),
("dave", "threlkeld", 5, 1),
("jose", "cordova", 5, 1),
("angel", "cooper", 5, 1),
("dana", "corona", 5, 1),
("david", "rojo", 6, 1),
("tafseer", "khan", 6, 1),
("cole", "ballard", 6, 1),
("trevor", "smith", 6, 1),
("carlos", "cantu", 7, 1),
("dan", "bushong", 7, 1),
("richard", "gabaree", 7, 1);

-- Inserting Support Engineers --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("josh", "davis", 9, 2),
("criss", "mariñelarena", 10, 2),
("nicole", "pank", 10, 2),
("shivam", "naik", 11, 2),
("alfredo", "noboa", 11, 2),
("michael", "tran", 12, 2),
("jacob", "duden", 12, 2),
("brice", "whitefield", 12, 2),
("diego", "arguello", 13, 2),
("esther", "schenau", 13, 2),
("zach", "wood", 13, 2);

-- Inserting Sales Engineers --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("bryant", "howell", 15, 3),
("gordon", "rose", 16, 3),
("tri", "tu", 16, 3),
("jeremy", "mayo", 17, 3),
("alex", "cortez", 17, 3),
("michael", "hizny", 18, 3),
("sasha", "singh", 18, 3),
("alicino", "moura", 19, 3),
("luiz", "silva", 19, 3),
("grant", "joseph", 19, 3);

-- Inserting Sales --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("guilherme", "baglioli", 21, 4),
("gonzalo", "gutierrez", 21, 4),
("carlos", "lobera", 22, 4),
("brenda", "bitar", 22, 4),
("jc", "gallo", 23, 4),
("caroline", "garza", 23, 4),
("margarete", "baylin", 23, 4),
("holly", "anfinson", 23, 4),
("annie", "noboa", 24, 4),
("breno", "soares", 24, 4),
("lizette", "flores", 24, 4),
("breno", "soares", 24, 4),
("tonia", "roberts", 24, 4),
("tamina", "zaheri", 24, 4);

-- Inserting Marketing --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("evan", "le", 26, 5),
("kristen", "white", 27, 5),
("brandon", "gatica", 27, 5),
("harrison", "yeagor", 28, 5),
("manuel", "burbano", 28, 5);

-- Inserting Finance --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("eric", "landivar", 30, 6),
("carlos", "cardenas", 31, 6),
("brandon", "sommers", 31, 6),
("robert", "wallach", 32, 6),
("nathaly", "guevara", 32, 6);

-- Inserting Human Resources --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("grecia", "treviño", 34, 7),
("audrey", "rodríguez", 35, 7),
("emily", "chu", 35, 7),
("najoua", "nabil", 36, 7),
("jeff", "mehalek", 36, 7);

-- query to see all records --
SELECT e.id, first_name, last_name, manager_id, e.role_id, title, salary, d.name AS department
FROM talent_trackerdb.employee AS e
INNER JOIN talent_trackerdb.job_role AS r
ON e.role_id = r.id 
INNER JOIN talent_trackerdb.department AS d 
ON r.department_id = d.id
ORDER BY e.id ASC;

-- Clear the DB to reseed with fresh tables --
-- DROP TABLE talent_trackerdb.employee;
-- DROP TABLE talent_trackerdb.job_role;
-- DROP TABLE talent_trackerdb.department;