const inquirer = require('inquirer')
const Manager = require('./lib/Manager')
const generateHTML = require('./utils/generate-html')

 
const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Please select a type of employee. (Required)',
            choices: ['Manager', 'Engineer', 'Intern'],
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log('Please select a type of employee.')
                    return false;
                } 
            }
        }, 
        {
            type:'input',
            name: 'employeeName',
            message: 'Please provide the name of your employee (Required).',
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log('Please provide the name of your employee')
                    return false
                }
            }
        },
        {
            type:'input',
            name: 'employeeEmail',
            message: 'Please provide the email of of your employee (Required).',
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log('Please provide the email of your employee')
                    return false
                }
            }
        }
       
        // {
        //     type: 'input',
        //     name: 'Manager',
        //     message: ''
        // }
    

         
    ])
}
    
// promptUser()
//     .then(generateHTML)

function init() {
    promptUser().then((userAnswers) => {
        const employeeType = userAnswers.employeeType
        if(employeeType === 'Manager') {

            const newManager = new Manager(userAnswers.employeeName, 1, userAnswers.employeeEmail, 24)
            generateHTML(newManager)
            
        }
        //check for type of employee\
        //function if employee is engineer, ask engineer. questions for engineer

        // generateHTML(userAnswers)
    })
}

init();