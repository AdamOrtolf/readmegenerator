var inquirer = require("inquirer");
var fs = require("fs");
var api = require("./utils/api");
const path = require("path");
const markdown = require("./utils/generatemarkdown")

function init () {
      inquirer.prompt([
    {
      type: "input",
      message: "What is your GitHub username?",
      name: "username",
    },
    {
      type: "input",
      message: "What is the project Title?",
      name: "title",
    },
    {
      type: "input",
      message: "Describe the project.",
      name: "description",
    },
    {
      type: "input",
      message: "Any installation dependencies?",
      name: "installation"
    },
    {
      type: "input",
      message: "Usages?",
      name: "usage",
    },
    {
      type: "input",
      message: "Licenses to include?",
      name: "license",
    },
    {
      type: "input",
      message: "Contributing",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests",
      name: "tests"
    }
  ]).then(response => {
        api.getUser(response.username)
        .then(( { data } )=> { 
              writeToFile("readme1.md", markdown({...response, ...data}))
        });

  })
}


function writeToFile (filename, data) {
      return fs.writeFileSync(path.join(process.cwd(), filename), data)
      
}




init()