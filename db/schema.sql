-- Create the database wish_saver_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table wishes.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured boolean not null default 0,
PRIMARY KEY (id)
);
