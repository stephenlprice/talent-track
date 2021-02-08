USE talent_trackerdb;

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


SELECT * FROM talent_trackerdb.employee;

-- query for orm.employeesByManager --
SELECT 
CONCAT(m.first_name, ' ', m.last_name) AS Manager,
CONCAT(e.first_name, ' ', e.last_name, ', ', r.title) AS 'Direct Report'
FROM talent_trackerdb.employee AS e
INNER JOIN talent_trackerdb.employee AS m
ON m.id = e.manager_id
INNER JOIN talent_trackerdb.job_role AS r 
ON e.role_id = r.id
ORDER BY m.id ASC