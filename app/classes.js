var Person = /** @class */ (function () {
    function Person(fn, ln, email, age) {
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
    }
    Person.prototype.greetMe = function () {
        console.log("Hello " + this.firstName);
    };
    return Person;
}());
var p = new Person('Daryl', 'Hendricks', 'me@me.com', 44);
p.greetMe();
// or you can avoid having to map the constructor values by not declaring then in the class def
var Person2 = /** @class */ (function () {
    function Person2(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    Person2.prototype.greetMe = function () {
        console.log("Hi there " + this.firstName + " " + this.lastName);
    };
    return Person2;
}());
var px = new Person2('Daryl', 'Hendricks', 'me@me.com', 54);
px.greetMe();
//# sourceMappingURL=classes.js.map