const fs = require('fs');
// const employee = require('../lib/Employee')

function renderEmployee(employeeData) {
    let employeeContent

    console.log(employeeData)
    if (employeeData.getRole() === 'Manager') {
      employeeContent = 
      `<div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2>${employeeData.getName()}</h2>
            <h4><i class="fas fa-mug-hot"></i> ${employeeData.getRole()}</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item border">ID: ${employeeData.getId()}</li>
            <li class="list-group-item border">Email: <a href="mailto:${employeeData.getEmail()}">${employeeData.getEmail()}</a></li>
            <li class="list-group-item border">Office Number: ${employeeData.officeNumber}</li>
          </ul>
        </div>
      </div>
      ` 
    } else if  (employeeData.getRole() === 'Engineer') {
      employeeContent = 
      `<div class="col-4">
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h2>${employeeData.getName()}</h2>
              <h4><i class="fas fa-glasses"></i> ${employeeData.getRole()}</h4>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item border">ID: ${employeeData.getId()}</li>
              <li class="list-group-item border">Email: <a href="mailto:${employeeData.getEmail()}">${employeeData.getEmail()}</a></li>
              <li class="list-group-item border">Gitub: <a href="https://github.com/${employeeData.getGithub()}">${employeeData.getGithub()}</a></li>
            </ul>
          </div>
        </div>
      ` 
    } else if (employeeData.getRole() === 'Intern') {
      employeeContent = 
      `
      <div class="col-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h2>${employeeData.getName()}</h2>
            <h4><i class="fas fa-user-graduate"></i> ${employeeData.getRole()}</h4>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item border">ID: ${employeeData.getId()}</li>
            <li class="list-group-item border">Email: <a href="mailto:${employeeData.getEmail()}">${employeeData.getEmail()}</a></li>
            <li class="list-group-item border">School: ${employeeData.getSchool()}</li>
          </ul>
        </div>
      </div>
      ` 
    }

    return employeeContent;
};

function generateHTML(data) {
  console.log(data)

  let generatedContent = '';

  data.forEach(employee => {
    console.log(employee.getName())
    
    generatedContent += renderEmployee(employee);
    
  })

  let content =  `

  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profiles</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous"/>
    <link rel="stylesheet" href="../src/stylesheet.css">
  </head>


  <header>My Team</header>

  <main>
    <div class="container">
      <div class="row">
     
      ${generatedContent}

      </div>
    </div>  
  </main>
`

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