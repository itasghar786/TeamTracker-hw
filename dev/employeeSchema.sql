
DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

USE employee_DB;



 CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT ,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL (10,2) NOT NULL,
    department_id INT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    department_id INT NULL,

    PRIMARY KEY(id)
);



INSERT INTO department (name)
VALUES ('Management'),('Sales'),('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES ('Regional Manager', 50000, 1),('Assistant to Regional Manager', 30000, 2),('Regional Manager', 70000, 3),('Accountant',50000,3);

INSERT INTO employee  (first_name, last_name, role_id,department_id)
VALUES ('Asghar', 'Sheikh', 1,NULL),('Sufyan','Sheikh',2, NULL),('Harry','Magal', 3, NULL),('Dwight ', 'deel', 3, NULL),('John ','Scott',4,NULL),('Mike', 'Pence',4,NULL);


SELECT employee.first_name, 
	employee.last_name,
	role.title AS Title,
    role.salary AS Salary,
    department.name AS Department
FROM employee 
	INNER JOIN role ON employee.role_id=role.role_id
    INNER JOIN department ON employee.role_id=department.department_id