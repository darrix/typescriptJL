class Person3 {
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

class Student extends Person3 {
    constructor (
        firstName : string,
        lastName : string,
        email: string,
        age: number,
        private grade : string
    ) {
        super(firstName,lastName,email,age);
    }

    greetMe(){
        super.greetMe();
        console.log(`I am in the ${this.grade} grade`);
    }
}

let pz = new Student('Daryl','Hendricks','xxxx',10,'3rd');
pz.greetMe();



