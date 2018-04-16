interface Phone {
    model : string;
    version : number;
    ring() : string;
}

class TraditionalPhone implements Phone {
    constructor (
        public model : string,
        public version : number
    ) { }

    ring() {
        return 'ring, ring';
    }
}

class ModernPhone implements Phone {
    constructor (
        public model : string,
        public version : number 
    ) { }
    ring() {
        return `ring tone`;
    }
}

let bellPhone = new TraditionalPhone("Bell", 11.0);
let modernPhone = new ModernPhone("Cell",6.1);

var phones : Phone[] = []
phones.push(bellPhone);
phones.push(modernPhone);

for (var phone of phones) { console.log(phone.ring());}

for (var phone of phones) { console.log(typeof phone); }

