class Employee {
    constructor(name, role, id, email) {
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
    }


//methods to get employee name, role, id and email
getName() {
       console.log(`${this.name}`);
       return this.name;
    }

    

    getRole() {
        console.log(`${this.role}`);
        return this.role;
    }
    

    getId() {
        console.log(`Employee ID: ${this.id}`);
        return this.id;
    }
    

    getEmail() {
        console.log(`Email: ${this.email}`);
        return this.email;
    }
    
}


module.export = Employee;
