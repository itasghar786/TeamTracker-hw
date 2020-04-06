-- NOTE: Before seeding employees into SQL Workbench, SEED first the roles and department first.
INSERT INTO department(name) VALUES('Management');
INSERT INTO department(name) VALUES('Accounting');
INSERT INTO department(name) VALUES('Sales');

INSERT INTO role(title, salary) VALUES ('Regional Manager', 50000);
INSERT INTO role(title, salary) VALUES ('Assistant to Regional Manager', 3000);
INSERT INTO role(title, salary) VALUES ('Regional Manager', 7000);
INSERT INTO role(title, salary) VALUES ('Accountant', 50000);


INSERT INTO employee (first_name, last_name, role_id) VALUES ("Asghar","Sheikh", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Sufyan","Sheikh", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Harry","Magal", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Dwight","Deel", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("John","Scott", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Mike","Pence", 4);

