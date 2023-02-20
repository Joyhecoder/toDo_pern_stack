CREATE DATABASE pernstack;
CREATE TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    fName VARCHAR(30),
    lName VARCHAR(50),
    email VARCHAR,
    password VARCHAR
);