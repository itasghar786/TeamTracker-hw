const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "root",
    database: "employee_DB"
});



function userPrompt(){
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

      function viewDepartments(){
        let query = connection.query(
          `SELECT * FROM department`,(err,res)=>{
            if (err) throw err;
            consol.table(res)
            console.log ('List of all departmets')
            initialPromt()
          }
        )
      }

      function viewRoles(){
        let query = connection.query(
          `SELECT * FROM role`, (err,res) =>{
            if (err) throw err;
            console.table(res);
            console.log("list of all Roles");
            initialPromt()
          }
        )
      }

      function viewEmployees(){
        let query = connection.query(
          `SELECT * FROM employee`,(err,res) =>{
            if (err) throw err;
            consol.log ("list all Employees")
            initialPromt()

          }
          
        )
      }

        function addDepartments(){
          inquirer.prompt ({
            type: 'input',
            message: 'What name of department would you like to add?',
            name: 'addDepartmentPromt'
          }) .then (data =>{
            connection.query(
              `INSERT INTO department SET ?`,{name: data.addDepartmentsPromt},(err,res)=>{
                if(err)throw err;
                console.log(res)
              }
            )
            connection.end()
          })
        }

        function addRoles(){
          inquirer.promt([{
            type: 'input',
            message: 'What is the title role?',
            name: 'titlePrompt'

          },{
            type:'input',
            message:'what is the salary of the role?',
            name:'salaryPrompt'

          },{
            type:'input',
            message:'What is the deparrtment ID',
            name: 'idPrompt'

          }])
          .then (data=>{
            connection.query(
              'INSERT INTO role SET ?', {title: data.roleTitlePrompt,salary:data.roleSalaryPromt, department_id: data.roleIDPrompt}, (err,res)=>{
                if (err) throw err;
                console.log(res)
              }
            )
            connection.end()
          })
          }

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
              message: 'What is the employee you would like to adds role ID?',
              name: 'employeeRoleIDPrompt'
            }])
            .then(data=>{
              connection.query(
                'INSERT INTO employee SET ?', {first_name: data.FnamePrompt, last_name: data.secondNamePrompt, role_id: data.employeeRoleIDPrompt},  (err, res)=>{
                  if(err) throw err;
                    console.log(res)
                }
              )
              connection.end()
            })
          }
          
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
                  UPDATE employeeDB.employee 
                  SET role_id = '${roles.indexOf(answers.role) + 1}' WHERE (id = '${employees.indexOf(answers.employee) + 1}');`,
                      (err, result) => {
                          if (err) throw err;
                          console.log(result);
                      })
              })
              connection.end()
          }
          
          
          function exit(){
            connection.end();
          }
          
          
         // initialPrompt()
        
        
        

    



    

