var multiply = function (n1: number, n2: number) { return n1 * n2; }

var multiplyL = (n1: number, n2: number) => n1 * n2;

console.log(multiply(2,3));
console.log(multiplyL(4,3));

var echoNumber : (n1 : number) => void;

echoNumber = function (n1: number) { console.log(n1); }

console.log('------------------------------');

echoNumber(25);
echoNumber(50);






