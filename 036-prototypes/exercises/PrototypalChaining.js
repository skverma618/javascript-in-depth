function Person(name) {
    this.name = name;
}

Person.prototype.setAge = function (age) {
    this.age = age;
    return this; // Enable chaining
};

Person.prototype.setJob = function (job) {
    this.job = job;
    return this; // Enable chaining
};

Person.prototype.getInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}, Job: ${this.job}`);
    return this; // Enable chaining
};

const user = new Person("Sushil")
    .setAge(25)
    .setJob("Fullstack Developer")
    .getInfo();
