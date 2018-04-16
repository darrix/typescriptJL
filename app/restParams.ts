function addseries(n1: number, n2: number, ...numbers: number[] ) : number 
{
    let result = n1 + n2;
    for(var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}

console.log(addseries(1,2,3,4,5));

