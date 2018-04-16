function add(num1: number, num2: number, num3?: number ) : number 
{
    let total = num1 + num2;
    if (num3 != undefined) {
        total += num3;
    }
    return total;
}

let answer = add(14, 13, 100);
console.log(answer);


let answer1 = add(14, 13);
console.log(answer1);

function addsome(n1: number, n2: number, n3: number = 0) : number {
    return n1 + n2 + n3;
}

console.log(addsome(1,2,3));
console.log(addsome(1,2));



