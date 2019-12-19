const inqurirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Employee");

//Need a file to store the answers
const writeFileAsync = util.promisify(fs.writeFile);

//Prompts for employees
function promptUser() {
    return inqurirer.prompt([
        {
         type: "input",
         name: "name",
         message: "What is the employee name?"  
        },
        {
        type: "list",
         name: "role",
         message: "What is the employee title or role?" ,
         choices: [
           "Manager",
           "Engineer"
           ]
        },
        {
        type: "input",
         name: "Id",
         message: "What is the employee id number?" 
        },
        {
        type: "input",
        name: "email",
         message: "What is the email?"   
        },
        {
          type: "input",
          name: "office",
          message: "What is your office number?"
        }
    ])
}

//Write answers to html

function generateHTML(answers) {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Manager</title>
  </head>
  <body>
    <div class="jumbotron jumbotron-fluid"><h1>Managers</h1></div>
    <div class="container">
    <div class="card">
      <h3 class="card-header">${answers.name}</h3>
      <h4 class="card-body">${answers.role}</h4>
      <p class="card-body">Employee ID: ${answers.Id}</p>
      <p class="card-body">Email: ${answers.email}</p>
      <p class="card-body">Office Number: ${answers.office}</p>
      </div>
  </div>
  </body>
  </html>`;
  }
  promptUser()
    .then(function(answers) {
      const html = generateHTML(answers);
      return writeFileAsync("/Users/Serina Harris/test/Employee-Generator/Html-templates/Manager.html", html);
    })
    .then(function() {
      console.log("Successfully wrote to Manager.html");
    })
    .catch(function(err) {
      console.log(err);
    });
