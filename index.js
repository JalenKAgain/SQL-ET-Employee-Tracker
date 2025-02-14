import inquirer from 'inquirer';
import pg from 'pg';
const { Pool } = pg
 
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "my_company",
  password: "Yesicannext000",
})
 



const questions = [

    {
        type: 'list',
        message: 'Hi, What would you like to do?',
        name: 'action',
        choices: ['View All Departments', 'View All Roles', 'View Employees', 'View Salary']

    },
]
   





function mainMenu (){




  
     inquirer.prompt(questions).then((answers) => {
    switch (answers.action) {
      case 'View All Departments':
        return pool.query('SELECT * FROM department');
      case 'View All Roles':
        return pool.query('SELECT * FROM role_id');
      case 'View Employees':
        return pool.query('SELECT * FROM employee');
      case 'View Salary':
        return pool.query('SELECT first_name, last_name, salary FROM employee JOIN role_id ON employee.role_id = role_id.id');
      default:
        throw new Error('Invalid action selected.');
    }
  })
  .then((res) => {
    console.table(res.rows);
  })
  .catch((err) => {
    console.error('Error:', err);
  })
  
}

mainMenu()