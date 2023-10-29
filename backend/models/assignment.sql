=================================================
CREATE DATABASE tblReservations;
USE tblReservations;

-- CUSTOMERS will CRUD users
CREATE TABLE `users` (
  `user_id` INT(11) AUTO_INCREMENT NOT NULL,
  `user_type` VARCHAR(20) NOT NULL, -- customer, admin, employee
  `username` VARCHAR(255) UNIQUE NOT NULL,
  `email` VARCHAR(100) UNIQUE NOT NULL,
  `password` VARCHAR(25) NOT NULL,
  `firstName` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `mobile_number` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`user_id`)
);

-- ADMIN will CRUD diningTables
CREATE TABLE `diningtables` (
  `dt_id` INT(11) AUTO_INCREMENT NOT NULL,
  `capacity` INT(11) NOT NULL, 
  `min_cap` INT(11) NOT NULL, 
  `max_cap` INT(11) NOT NULL, 
  PRIMARY KEY (dt_id)
  );

-- CUSTOMERS will CRUD reservations
CREATE TABLE `reservations` (
  `res_id` INT(11) AUTO_INCREMENT NOT NULL,
  `no_of_guest` INT NOT NULL,
  `res_date` DATE NOT NULL,
  `res_time` DATETIME NOT NULL,
  `cust_notes` varchar(100),
  `user_id` INT(11) NOT NULL,
  `dt_id` INT(11) NOT NULL,
     PRIMARY KEY (`res_id`)
);

ALTER TABLE `reservations` MODIFY `cust_notes` varchar(200);
ALTER TABLE `reservations` MODIFY `res_time` varchar(50);

UPDATE `reservations`
SET res_time = '14:00:00'
WHERE res_id = 1;


=================================================

ALTER TABLE diningtables
  DROP COLUMN dtStatus_id;

ALTER TABLE diningtables DROP FOREIGN KEY diningtables_ibfk_1;

ALTER TABLE diningtables
ADD min_cap INT(11) NOT NULL; 

ALTER TABLE diningtables
ADD max_cap INT(11) NOT NULL; 

INSERT INTO reservations (no_of_guest, res_date, res_time, cust_notes, user_id, dt_id)
    VALUES
        (3, '2023-10-29', '2023-10-31 12:00:00', 'Grandma in wheelchair', 1, 5);
+--------+-------------+------------+---------------------+-----------------------+---------+-------+
| res_id | no_of_guest | res_date   | res_time            | cust_notes            | user_id | dt_id |
+--------+-------------+------------+---------------------+-----------------------+---------+-------+
|      1 |           3 | 2023-10-29 | 2023-10-31 12:00:00 | Grandma in wheelchair |       1 |     5 |
+--------+-------------+------------+---------------------+-----------------------+---------+-------+

=================================================
=================================================
-- Get tables that fit headcount where headcount = 5
-- How do I get the headcount to the seqluelize
-- HEADCOUNT
select dt_id from diningtables 
where 3 >= min_cap and 
3 <= max_cap
;

-- RESERVATION DATE & TIME
-- Retrieve tables reserved for that day and time
select dt_id from reservations 
where res_date = '2023-10-29' and res_time = '14:00:00'
=================================================
=================================================
INSERT INTO diningtables (capacity, min_cap, max_cap)
    VALUES
        (6, 4, 6),
        (6, 4, 6),
        (6, 4, 6),
        (8, 6, 8),
        (4, 1, 4),
        (4, 1, 4),
        (4, 1, 4),
        (4, 1, 4),
        (4, 1, 4),
        (8, 6, 8)
;







SELECT c.name, a.user_id, a.country_id
    FROM countries c 
    JOIN addresses a
    ON a.user_id = c.id
    WHERE a.user = 2; 
