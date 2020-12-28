const inquirer = require('inquirer')
 
const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: list,
            name: 'name',
            message: 'Please select a type of employee. (Required)',
            choices: ['Engineer', 'Intern', 'Manager'],
            validate: nameInput => {
                if(nameInput) {
                    return true
                } else {
                    console.log('Please select a type of employee.')
                    return false;
                } 
            }
         },
         
])
}