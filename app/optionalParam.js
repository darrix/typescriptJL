function add(num1, num2, num3) {
    var total = num1 + num2;
    if (num3 != undefined) {
        total += num3;
    }
    return total;
}
var answer = add(14, 13, 100);
console.log(answer);
var answer1 = add(14, 13);
console.log(answer1);
function addsome(n1, n2, n3) {
    if (n3 === void 0) { n3 = 0; }
    return n1 + n2 + n3;
}
console.log(addsome(1, 2, 3));
console.log(addsome(1, 2));
//# sourceMappingURL=optionalParam.js.map