const Engineer = require("./Employee");

class Engineer extends Employee {
constructor(name, role, id, email, github) {
    super(name, rol, id, email);
    this.github = github;
}

getRole() {
    return "Engineer";

}

getGithub() {
    return this.github;
}


            }
            module.exports = Engineer;
        

    
