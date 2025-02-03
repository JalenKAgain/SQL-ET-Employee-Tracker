import inquirer from 'inquirer';


const questions = [

    {
        type: 'list',
        message: 'Hi, What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View Employees', 'View Salary']

    },

    {
        type: 'list',
        message: 'What is the name of the department?',
        choices: ['Customer_Service', 'Culinary', 'Hospitality', 'Entertainment', 'Protective_Service']
    },

    {
        type: 'list',
        message: 'What is the name of the role?',
        choices: ['Cashier', 'Cook', 'Bartender', 'DJ', 'Security']
    },

    {
        type: 'list',
        message: 'Select Employee.',
        choices: ['Angelica Pickles', 'Chuckie Finster', 'Susie Carmichael', 'Philip DeVille', 'Jason Bourne']
    },

    {
        type: 'list',
        message: 'Choose Salary.',
        choices: ['15000', '16000', '19000', '20000', '22500']
    },

    {
        type: 'list',
        message: 'Who is the manager?',
        choices: ['Jason Bourne']
    }
];

client.connect()
  .then(() => {
    return inquirer.prompt(questions);
  })
  .then((answers) => {
    switch (answers.action) {
      case 'View All Departments':
        return client.query('SELECT * FROM department');
      case 'View All Roles':
        return client.query('SELECT * FROM role_id');
      case 'View Employees':
        return client.query('SELECT * FROM employee');
      case 'View Salary':
        return client.query('SELECT first_name, last_name, salary FROM employee JOIN role_id ON employee.role_id = role_id.id');
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
  .finally(() => {
    client.end();
  });
    

