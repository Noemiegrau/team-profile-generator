// Packages
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHtmlPage');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

class Prompt{
    constructor() {
        this.teamArray = [];
    }

    /**
     * @returns the array of all Employee objects
     */

    getTeamArray() {
        return this.teamArray;
    }

    // {
    //     type: 'list',
    //     name: 'employeeType',
    //     message: "Which type of employee would you like to add to the team?",
    //     choices: ['Engineer', 'Intern', 'I finished building my team']
    // }


// Questions
questions() {
    inquirer.prompt(
    {
     type: 'list',
     name: 'employeeType',
     message: "Which type of employee would you like to add to the team?",
     choices: ['Manager', 'Engineer', 'Intern', 'I finished entering my team info']
    })
    .then(({employeeType}) => {
        if(employeeType === 'Manager'){
        inquirer.prompt([
    {
     type: 'input',
     name: 'name',
     message: "Please enter the manager's name",
     validate: nameInput => {
         if (nameInput) {
             return true;
         } else {
             console.log("Please enter the manager's name!");
             return false;
         }
     }
    },
    {
        type: 'number',
        name: 'id',
        message: "Please enter the manager's employee id",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter a correct answer, the employee id should be a number!");
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter the correct manager's email!");
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: "Please enter the manager's office number",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter a correct answer, the office number should be a number!");
                return false;
            }
        }
    },
    ])

    .then( (templateData) => {
        this.teamArray.push(new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber));
        this.questions();
    });

    } else if (employeeType === 'Engineer') {
            inquirer.prompt([
                    {
                     type: 'input',
                     name: 'name',
                     message: "Please enter the engineer's name",
                     validate: nameInput => {
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's name!");
                            return false;
                        }
                    }
                    },
                    {
                     type: 'number',
                     name: 'id',
                     message: "Please enter the engineer's employee id",
                     validate: idInput => {
                        if (idInput) {
                            return true;
                        } else {
                            console.log("Please enter a correct answer, the employee id should be a number!");
                            return false;
                        }
                    } 
                    },
                    {
                     type: 'input',
                     name: 'email',
                     message: "Please enter the engineer's email",
                     validate: emailInput => {
                        if (emailInput) {
                            return true;
                        } else {
                            console.log("Please enter the correct engineer's email!");
                            return false;
                        }
                    }
                    },
                    {
                     type: 'input',
                     name: 'github',
                     message: "Please enter the engineer's github username",
                     validate: githubInput => {
                        if (githubInput) {
                            return true;
                        } else {
                            console.log("Please enter the correct engineer's github username!");
                            return false;
                        }
                    }  
                    }

                ]).then( templateData => {
                    this.teamArray.push(new Engineer(templateData.name, templateData.id, templateData.email, templateData.github));
                    this.questions();
                });

        } else if (employeeType === 'Intern') {
            inquirer.prompt([
                {
                 type: 'input',
                 name: 'name',
                 message: "Please enter the intern's name",
                 validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the intern's name!");
                        return false;
                    }
                }
                },
                {
                 type: 'number',
                 name: 'id',
                 message: "Please enter the intern's employee id",
                 validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log("Please enter a correct answer, the employee id should be a number!");
                        return false;
                    }
                } 
                },
                {
                 type: 'input',
                 name: 'email',
                 message: "Please enter the intern's email",
                 validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the correct intern's email!");
                        return false;
                    }
                }
                },
                {
                 type: 'input',
                 name: 'school',
                 message: "Please enter the intern's school name",
                 validate: schoolInput => {
                    if (schoolInput) {
                        return true;
                    } else {
                        console.log("Please enter the correct intern school's name!");
                        return false;
                    }
                }  
                }

            ]).then( templateData => {
                this.teamArray.push(new Intern(templateData.name, templateData.id, templateData.email, templateData.school));
                this.questions();
            });

        } else if (employeeType === 'I finished entering my team info') {
            return writeFile(generatePage(this.getTeamArray()));
        }
    });

}
};

const prompt = new Prompt();
prompt.questions();


// var ifAddIntern = ["intern’s name", "ID", "email address", "school"];
// // --> go back to menu 

// var ifFinishTeam --> HTML Generated, console.log() where to find the generated html




// var questionsSet1 = ["manager's name", "employee ID", "email address", "office number"]; 

// var menu = ["add an engineer", "add an intern", "finish building my team"];

// var ifAddEngineer = ["engineer’s name", "ID", "email address", "GitHub username"];
// // --> go back to menu 
