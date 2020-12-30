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
            message: "Please provide the manager's name (Required).",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please provide the manager's name.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please provide the manager's id (Required).",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please provide the manager's id.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Please provide the manager's email address (Required).",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please provide the manager's email address.")
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
        const newManager = new Manager(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.managerOfficeNumber)
        
        employeeArray.push(newManager)
        init()


    })
}

const createEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "Please provide the engineer's name (Required).",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please provide the engineer's name.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please provide the engineer's id (Required).",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please provide the engineer's id")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Please provide the engineer's email address (Required).",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please provide the engineer's email address")
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
                    console.log("Please provide the engineer's github username.")
                    return false
                }
            }
        },

    ]).then(answers => {
    
        const newEngineer = new Engineer(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.engineerGithub)   
        employeeArray.push(newEngineer)
        init();
    })
}

const createIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeName',
            message: "Please provide the intern's name (Required).",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please provide the intern's name.")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: "Please provide the intern's id (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please provide the intern's id")
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "Please provide the intern's email address (Required).",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please provide the intern's email address")
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
        const newIntern = new Intern(answers.employeeName, answers.employeeID, answers.employeeEmail, answers.internSchool)
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
                // run Engineer prompts func
                createEngineer();
                break;
            case "Intern":
                // run Intern prompts func
                createIntern()
                break;
            default: // EXit
                generateHTML(employeeArray)
                console.log('Congratulations, your team is complete!')
            
        }
    })

}

init();