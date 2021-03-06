//requiring dependencies 
const inquirer = require('inquirer');
const mysql = require('mysql');
const chalk = require('chalk');
const figlet = require('figlet');
const consoleTable = require('console.table');

// connecting to MYSQL
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_DB" 
});

//first promt to user 

function initialPrompt(){

  figlet('EMPLOYEE TRACKER', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.green(data))
});



    inquirer.prompt({
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
    
      ]})
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
// functiong for vewing departments 
      function viewDepartments(){
         connection.query(
          `SELECT * FROM department`,(err,res)=>{
            if (err) throw err;

        console.table(res);
            console.log ('List of all departmets');
            initialPrompt()
          }
        )
      }
        // 
      function viewRoles(){
          connection.query(
          `SELECT * FROM role`, (err,res) =>{
            if (err) throw err;
            console.table(res);
            console.log("list of all Roles");
            initialPrompt()
          }
        )
      }

      function viewEmployees(){
         connection.query(
          `SELECT * FROM employee`,(err,res) =>{
            if (err) throw err;
              console.table(res);
            console.log ("list all Employees");
            initialPrompt()

          }
          
        )
      }

        function addDepartments(){
          inquirer.prompt ({
            type: 'input',
            message: 'What name of department would you like to add to departments?',
            name: 'addDepartmentPromt'
          }) .then (data =>{
            connection.query(
              `INSERT INTO department SET ?`,{name: data.addDepartmentPromt},(err,res)=>{
                if(err)throw err;
                console.log(res);
                initialPrompt()
              }

            )
            
            
          })
        }

        function addRoles(){
          inquirer.prompt([{
            type: 'input',
            message: 'What is the title of the role?',
            name: 'titlePrompt'

          },{
            type:'input',
            message:'what is the salary of the role?',
            name:'salaryPrompt'

          },{
            type:'input',
            message:'What is the department ID?',
            name: 'idPrompt'

          }])
          .then (data=>{
            connection.query(
              'INSERT INTO role SET ?', {title: data.titlePrompt,salary:data.salaryPrompt, department_id: data.idPrompt}, (err,res)=>{
                if (err) throw err;
                console.log(res);
                initialPrompt()
              }
            )
            
          })
          }
          //funnction promt user for adding employee
          function addEmployees(){
            inquirer.prompt([{
              type: 'input',
              message: 'What is the first name of the employee you would like to add?',
              name: 'FnamePrompt'
            },{
              type: 'input',
              message: 'What is the last name of the employee you would like to add',
              name: 'secondNamePrompt'
            },{
              type: 'input',
              message: 'What is the employee you would like to add role ID?',
              name: 'employeeRoleIDPrompt'
            }])
            .then(data=>{
              connection.query(
                'INSERT INTO employee SET ?', {first_name: data.FnamePrompt, last_name: data.secondNamePrompt, role_id: data.employeeRoleIDPrompt},  (err, res)=>{
                  if(err) throw err;
                    console.log(res);
                    initialPrompt()
                }
              )
              
            })
          }
          //updating employee role
          function updateEmployeeRole() {
            let employees = [
                'John Scott',
                'Dwight Deel',
                'Harry Migal',
                'Dick Word',
                'Mike Pence',
                'Sufyan Sheikh',
                'Asghar Sheikh'
            ];
          
            let roles = [
                'Regional Manager',
                'Assistant to Regional Manager',
                'Salesman',
                'Accountant',
                'test',
            ];
          
            inquirer.prompt([
                {
                    message: "Which Employee do you want  to update?",
                    type: 'list',
                    name: 'employeeUpdatePrompt',
                    choices: employees
                },
                {
                    message: "What is their new role?",
                    type: 'list',
                    name: 'employeeRoleUpdate',
                    choices: roles
                }
            ])
              .then(answers => {
                  connection.query(`
                  UPDATE employee 
                  SET role_id = '${roles.indexOf(answers.roles) + 1}' WHERE (id = '${employees.indexOf(answers.employees) + 1}');`,
                      (err, res) => {
                          if (err) throw err;
                          console.table(res);
                          console.log(res);
                          initialPrompt()

                      })
              })
              
          }
          // exiting the connection   
          function exit(){
            connection.end();
          }
          
          
         initialPrompt()
        
        
        

    



    

