const Manager = require("./Employee");

class Manager extends Employee {
constructor(name, role, id, email, officeNumber) {
    super(name, role, id, email);
    this.officeNumber = officeNumber;
}

getRole() {
    return "Manager";

}

getOfficeNum() {
    return this.officeNumber;
}

            }
module.export = Manager;

        

    



