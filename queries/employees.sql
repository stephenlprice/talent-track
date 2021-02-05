USE talent_trackerdb;

-- Inserting Management --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("Raheem", "Bohjani", 1, NULL),
("Daniel", "Berlin", 8, NULL),
("Nena", "Ballas", 14, NULL),
("Sebastian", "Briceño", 20, NULL),
("Paula", "Tulis", 25, NULL),
("Carlos", "Mancheno", 29, NULL),
("Jim", "Wehmeyer", 33, NULL);


-- Inserting Software Engineers --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("Deep", "Patel", 2, 1),
("Christian", "Henry", 2, 1),
("Stephen", "Price", 3, 1),
("Phil", "Sturgeon", 3, 1),
("Vincenzo", "Chianese", 3, 1),
("Ross", "McDonald", 4, 1),
("Chris", "Lott", 4, 1),
("Dave", "Threlkeld", 5, 1),
("Jose", "Cordova", 5, 1),
("Angel", "Cooper", 5, 1),
("Dana", "Corona", 5, 1),
("David", "Rojo", 6, 1),
("Tafseer", "Khan", 6, 1),
("Cole", "Ballard", 6, 1),
("Trevor", "Smith", 6, 1),
("Carlos", "Cantu", 7, 1),
("Dan", "Bushong", 7, 1),
("Richard", "Gabaree", 7, 1);

-- Inserting Support Engineers --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("Josh", "Davis", 9, 2),
("Criss", "Mariñelarena", 10, 2),
("Nicole", "Pank", 10, 2),
("Shivam", "Naik", 11, 2),
("Alfredo", "Noboa", 11, 2),
("Michael", "Tran", 12, 2),
("Jacob", "Duden", 12, 2),
("Brice", "Whitefield", 12, 2),
("Diego", "Arguello", 13, 2),
("Esther", "Schenau", 13, 2),
("Zach", "Wood", 13, 2);

-- Inserting Sales Engineers --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("Bryant", "Howell", 15, 3),
("Gordon", "Rose", 16, 3),
("Tri", "Tu", 16, 3),
("Jeremy", "Mayo", 17, 3),
("Alex", "Cortez", 17, 3),
("Michael", "Hizny", 18, 3),
("Sasha", "Singh", 18, 3),
("Alicino", "Moura", 19, 3),
("Luiz", "Silva", 19, 3),
("Grant", "Joseph", 19, 3);

-- Inserting Sales --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("Guilherme", "Baglioli", 21, 4),
("Gonzalo", "Gutierrez", 21, 4),
("Carlos", "Lobera", 22, 4),
("Brenda", "Bitar", 22, 4),
("JC", "Gallo", 23, 4),
("Caroline", "Garza", 23, 4),
("Margarete", "Baylin", 23, 4),
("Holly", "Anfinson", 23, 4),
("Annie", "Noboa", 24, 4),
("Breno", "Soares", 24, 4),
("Lizette", "Flores", 24, 4),
("Breno", "Soares", 24, 4),
("Tonia", "Roberts", 24, 4),
("Tamina", "Zaheri", 24, 4);

-- Inserting Marketing --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("Evan", "Le", 26, 5),
("Kristen", "White", 27, 5),
("Brandon", "Gatica", 27, 5),
("Harrison", "Yeagor", 28, 5),
("Manuel", "Burbano", 28, 5);

-- Inserting Finance --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("Eric", "Landivar", 30, 6),
("Carlos", "Cardenas", 31, 6),
("Brandon", "Sommers", 31, 6),
("Robert", "Wallach", 32, 6),
("Nathaly", "Guevara", 32, 6);

-- Inserting Human Resources --
INSERT INTO talent_trackerdb.employee(first_name, last_name, role_id, manager_id)
VALUES 
("Grecia", "Treviño", 34, 7),
("Audrey", "Rodríguez", 35, 7),
("Emily", "Chu", 35, 7),
("Najoua", "Nabil", 36, 7),
("Jeff", "Mehalek", 36, 7);


SELECT * FROM talent_trackerdb.employee;