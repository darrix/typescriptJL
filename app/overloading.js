function person(value) {
    var result = "";
    switch (typeof value) {
        case "string":
            result = "my name is " + value;
            break;
        case "number":
            result = "my age is " + value;
            break;
        case "boolean":
            var married = value ? "" : "not";
            result = "I'm " + married + " married";
    }
    return result;
}
console.log(person("mark"));
console.log(person(45));
console.log(person(false));
console.log(person(true));
//# sourceMappingURL=overloading.js.map