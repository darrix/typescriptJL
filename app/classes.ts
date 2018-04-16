class Person {
    public firstName : string;
    public lastName : string;
    public email : string;
    private age: number;

    constructor(
        fn: string,
        ln: string,
        email: string,
        age: number
    ){
        this.firstName = fn;
        this.lastName = ln;
        this.email = email;
        this.age = age;
    }

    greetMe() {
        console.log(`Hello ${this.firstName}`);
    }

}

let p = new Person('Daryl','Hendricks','me@me.com',44);
p.greetMe();

// or you can avoid having to map the constructor values by not declaring then in the class def

class Person2 {
    constructor(
        public firstName : string,
        public lastName : string,
        public email : string,
        private age : number
    ) { }

    greetMe() {
        console.log(`Hi there ${this.firstName} ${this.lastName}`);
    }
}

let px = new Person2('Daryl','Hendricks','me@me.com',54);
px.greetMe();


