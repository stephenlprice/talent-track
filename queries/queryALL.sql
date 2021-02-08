-- query for orm.view.all --
SELECT e.id, first_name, last_name, manager_id, e.role_id, title, salary, d.name AS department
FROM talent_trackerdb.employee AS e
INNER JOIN talent_trackerdb.job_role AS r
ON e.role_id = r.id 
INNER JOIN talent_trackerdb.department AS d 
ON r.department_id = d.id
ORDER BY e.id ASC;

-- Emulate a FULL OUTER JOIN --
SELECT *
FROM talent_trackerdb.employee AS e
RIGHT JOIN talent_trackerdb.job_role AS r
ON e.role_id = r.id 
RIGHT JOIN talent_trackerdb.department AS d 
ON r.department_id = d.id;

UNION

SELECT *
FROM talent_trackerdb.employee AS e
LEFT JOIN talent_trackerdb.job_role AS r
ON e.role_id = r.id 
LEFT JOIN talent_trackerdb.department AS d 
ON r.department_id = d.id;

-- query for managers --
SELECT *
FROM talent_trackerdb.employee AS e
WHERE e.manager_id IS NULL
ORDER BY e.manager_id ASC;

-- query for annual budget --
SELECT
d.name AS Department,
SUM(r.salary) AS 'Annual Budget'
FROM talent_trackerdb.department AS d
INNER JOIN talent_trackerdb.job_role AS r 
ON d.id = r.department_id
INNER JOIN talent_trackerdb.employee AS e
ON r.id = e.role_id
GROUP BY d.name
