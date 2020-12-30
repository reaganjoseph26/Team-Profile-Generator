const fs = require('fs');
// const employee = require('../lib/Employee')

function renderEmployee(employeeData) {
    let employeeContent

    console.log(employeeData)
    if (employeeData.getRole() === 'Manager') {
      employeeContent = 
      `<div class="employee-card">
        <h3>${employeeData.getRole()}</h3>
        <p>${employeeData.getName()}</p>
        <p>${employeeData.getEmail()}</p>
        <p>${employeeData.officeNumber}</p>
      </div>` 
    } else if  (employeeData.getRole() === 'Engineer') {
      employeeContent = 
      `<div class="employee-card">
        <h3>${employeeData.getRole()}</h3>
        <p>${employeeData.getName()}</p>
        <p><a href="mailto:${employeeData.getEmail()}">email: ${employeeData.getEmail()}</a></p>
        <a href="https://github.com/${employeeData.getGithub()}">Gitub: ${employeeData.getGithub()}</a>
      </div>` 
    }

    return employeeContent;
};

function generateHTML(data) {
    console.log(data)
    let content =  `

   ${renderEmployee(data)}

`;
writeToFile('./dist/index.html', content);
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }
  
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'Success!'
            })
        })
    })
  }
  

module.exports = generateHTML