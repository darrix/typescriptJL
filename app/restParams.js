function addseries(n1, n2) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    var result = n1 + n2;
    for (var i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return result;
}
console.log(addseries(1, 2, 3, 4, 5));
//# sourceMappingURL=restParams.js.map