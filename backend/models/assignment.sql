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
  `dtStatus_id` INT(11),
  PRIMARY KEY (dt_id),
   FOREIGN KEY (dtStatus_id) 
   REFERENCES diningtablesstatus(dtStatus_id)
);

-- ADMIN will CRUD status
CREATE TABLE `diningtablesstatus` (
  `dtStatus_id` INT(11) AUTO_INCREMENT NOT NULL,
  `status` VARCHAR(25) NOT NULL, -- (reserved, available, hold)
    PRIMARY KEY (`dtStatus_id`)
);

-- CUSTOMERS will CRUD reservations
CREATE TABLE `reservations` (
  `res_id` INT(11) AUTO_INCREMENT NOT NULL,
  `no_of_guest` INT NOT NULL,
  `res_date` varchar(100) NOT NULL,
  `res_time` varchar(100) NOT NULL,
  `cust_notes` varchar(100) NOT NULL,
  `user_id` INT(11) NOT NULL,
  `dt_id` INT(11) NOT NULL,
     PRIMARY KEY (`res_id`)
);

ALTER TABLE reservations
MODIFY COLUMN res_date DATE NOT NULL;

ALTER TABLE reservations
MODIFY COLUMN res_time DATETIME NOT NULL;






-- user_id: 1 & country_id: 1
INSERT INTO users (username, password, email, firstName, lastName)
    VALUES
        ('jault', 'Skagen21', 'jault@w3schools.com', 'John', 'Ault'),
        ('cault', 'Gateve15', 'cault@w3schools.com', 'Christian', 'Ault');
INSERT INTO countries (name)
    VALUES
        ('United States'),
        ('Canada'),
        ('Mexico');

SELECT c.name, a.user_id, a.country_id
    FROM countries c 
    JOIN addresses a
    ON a.user_id = c.id
    WHERE a.user = 2; 
