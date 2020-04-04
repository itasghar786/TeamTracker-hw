
DROP DATABASE IF EXISTS emplaoyee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;



 CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT ,
    name VARCHAR(30) NOT NULL
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT ,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL 10,2 NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY(id)
)

INSERT INTO department (name)
VALUES ('Management'),('Sales'),('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES ('Regional Manager', 50000, 1),('Assistant to Regional Manager', 30000, 2),('Salesman', 70000, 3),('Accountant',50000,4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Asghar', 'Sheikh', 1, null),('Sufyan','Sheikh',2,null),('Harry','Magal', 3, null),('Dwight ', 'deel', 3,null),('John ','Scott',4,null),('Mike', 'Pence',4,null);