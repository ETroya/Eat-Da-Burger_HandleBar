CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int AUTO_INCREMENT PRIMARY KEY (id),
	burger_name varchar(100) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	date TIMESTAMP
	
);
