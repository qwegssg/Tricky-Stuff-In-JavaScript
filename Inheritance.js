function Person(firstName, lastName, age, gender) {
    this.name = {
        firstName,
        lastName
    };
    this.age = age;
    this.gender = gender;
}

Person.prototype.greeting = function() {
    alert("Hi, I\'m " + this.name.firstName + ".");
}

/* Inheritance: */
function Engineer(firstName, lastName, age, gender, position) {
    /* this points to Engineer function */
    Person.apply(this, [firstName, lastName, age, gender]);
    
    this.position = position;
}
/* ******** set Engineer()'s prototype and prototype's constructor reference: ******** */
Engineer.prototype = new Person();
Object.defineProperty(Engineer.prototype, 'constructor', { 
    value: Engineer, 
    enumerable: false, // so that it does not appear in 'for in' loop
    writable: true 
});
// Engineer.prototype.constructor = Engineer;


var p = new Person("Woody", "Allen", 55, "Male");
var e = new Engineer("Little", "Cute", 25, "Male", "Font-end");
p.greeting();
e.greeting();