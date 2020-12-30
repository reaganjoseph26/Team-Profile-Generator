const inquirer = require('inquirer')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const generateHTML = require('./utils/generate-html')

const employeeArray = [];
const startPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'Please select a type of employee. (Required)',
            choices: ['Manager', 'Engineer', 'Intern', 'Exit'],
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please select a type of employee.')
                    return false;
                }
            }
        }
    ])
}

const createManager = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Please provide the name of your employee (Required).',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the name of your employee')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Please provide the email of of your employee (Required).',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the email address of your employee.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'Please enter the office number of the manager(Required).',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the office number of the manager')
                    return false
                }
            }
        },

    ]).then(answers => {
        const newManager = new Manager(answers.employeeName, 1, answers.employeeEmail, answers.managerOfficeNumber)
        
        employeeArray.push(newManager)
        init()


    })
}

const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Please provide the name of your employee (Required).',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the name of your employee')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Please provide the email of of your employee (Required).',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the email address of your employee.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Please provide the engineer's github username (Required).",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please provide the engineer's github account.")
                    return false
                }
            }
        },

    ]).then(answers => {
    
        const newEngineer = new Engineer(answers.employeeName, 1, answers.employeeEmail, answers.engineerGithub)   
        employeeArray.push(newEngineer)
        init();
    })
}

const createIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: 'Please provide the name of your employee (Required).',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the name of your employee')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Please provide the email of of your employee (Required).',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please provide the email address of your employee.')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'Please enter the school of the intern (Required).',
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log('Please enter the school of the intern.')
                    return false
                }
            }
        },
    ]).then(answers => {
        const newIntern = new Intern(answers.employeeName, 1, answers.employeeEmail, answers.internSchool)
        employeeArray.push(newIntern)
        init()
    })

}



function init() {
    startPrompt().then(userAnswers => {
        switch (userAnswers.employeeType) {
            case "Manager":
                createManager()
                // run Manager prompts func
                break;
            case "Engineer":
                // run Engineer prompts
                createEngineer();
                break;
            case "Intern":
                // run Intern prompts
                createIntern()
                break;
            default: // EXit
                generateHTML(employeeArray)
                console.log('finished!')
            // start building the team
        }
    })

}

init();