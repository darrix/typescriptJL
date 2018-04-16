var TraditionalPhone = /** @class */ (function () {
    function TraditionalPhone(model, version) {
        this.model = model;
        this.version = version;
    }
    TraditionalPhone.prototype.ring = function () {
        return 'ring, ring';
    };
    return TraditionalPhone;
}());
var ModernPhone = /** @class */ (function () {
    function ModernPhone(model, version) {
        this.model = model;
        this.version = version;
    }
    ModernPhone.prototype.ring = function () {
        return "ring tone";
    };
    return ModernPhone;
}());
var bellPhone = new TraditionalPhone("Bell", 11.0);
var modernPhone = new ModernPhone("Cell", 6.1);
var phones = [];
phones.push(bellPhone);
phones.push(modernPhone);
for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
    var phone = phones_1[_i];
    console.log(phone.ring());
}
for (var _a = 0, phones_2 = phones; _a < phones_2.length; _a++) {
    var phone = phones_2[_a];
    console.log(typeof phone);
}
//# sourceMappingURL=interface.js.map