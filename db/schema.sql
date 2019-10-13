DROP DATABASE IF EXISTS burgers;

CREATE DATABASE burgers;

USE burgers;

CREATE TABLE burgers (
	id INT auto_increment PRIMARY KEY,
    burger_name VARCHAR(50) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE
)

