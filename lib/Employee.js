class Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
        // this.github = github;
        // this.school = school;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    } 

    getRole() {
        return this.title;
    }   
}

module.exports = Employee;