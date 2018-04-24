class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        // return "Hi, I am "+this.name+ "!"; //es5
        return `Hi, I am ${ this.name }!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name,age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `Their major is ${this.major}.`;
        }
        return description;
    }
}

let me = new Student('Sai Kumar', 25, 'Information Technoloy');
console.log(me.getDescription());
let other = new Student();
console.log(other.getDescription());
