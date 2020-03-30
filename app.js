const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_DB"
})



function userPrompt(){
    inquirer.prompt([{
      type: "list",
      message: "What would you like to do?",
      name:"initialQuestion", 
      choices : [
        'View Departments',
        'View Roles',
        'View Employees',
        'Add Departments',
        'Add Roles',
        'Add Employees',
        'Update Employee Role',
        'Exit'
    
      ]}])
      .then(data=>{
        const choice = data.initialQuestion
        switch(choice){
          case 'View Departments':
            viewDepartments();
              break;
          case 'View Roles':
            viewRoles();
              break;
          case 'View Employees':
            viewEmployees();
              break;
          case 'Add Departments':
            addDepartments();
              break;
          case 'Add Roles':
              addRoles();
                break;
          case 'Add Employees':
              addEmployees();
                break;
          case 'Update Employee Role':
            updateEmployeeRole();
              break;
          case 'Exit':
            exit();
              break;
        }
      })
    }

    

    

connection.connect((err) => {
    if (err) {
        console.error(`error connecting`, err.stack);
        return
    }
    console.log(`connected as id ${connection.threadId}`);
})