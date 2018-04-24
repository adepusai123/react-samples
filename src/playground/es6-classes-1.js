class Person {
    constructor(name = 'Anonymous'){
        this.name = name;
    }
    getGreeting(){
        // return "Hi, I am "+this.name+ "!"; //es5
        return `Hi, I am ${ this.name }!`;
    }
}

let me = new Person('Sai Kumar');
console.log(me.getGreeting());
let other = new Person();
console.log(other.getGreeting());
//challenge task
// setup constructor to take name and age (default - 0)
//get description - Sai is 25 years old!;

class HelpMe {
    constructor(name, age = 0){
        this.name = name;
        this.age = age;
    }
    getDescription(){
        return `${this.name} is ${this.age} years old!`
    }
}

let my = new HelpMe('Sai',25);
console.log(my.getDescription());