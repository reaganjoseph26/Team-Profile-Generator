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
            const newManager = new Manager('John,', 1, 'test@yahoo', 24)
            generateHTML(newManager)
            
        }
        //check for type of employee\
        //function if employee is engineer, ask engineer. questions for engineer

        // generateHTML(userAnswers)
    })
}

init();