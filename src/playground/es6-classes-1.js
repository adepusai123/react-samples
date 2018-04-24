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
