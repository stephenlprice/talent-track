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