var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var country = /** @class */ (function () {
    function country(name, language, population, populationGrothRate) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrothRate = populationGrothRate;
    }
    return country;
}());
var OICCountry = /** @class */ (function (_super) {
    __extends(OICCountry, _super);
    function OICCountry(name, language, population, populationGrothRate) {
        return _super.call(this, name, language, population, populationGrothRate) || this;
    }
    OICCountry.prototype.populationGroth = function () {
        this.population = this.population * this.populationGrothRate;
        return this.population;
    };
    return OICCountry;
}(country));
var Pakistan = new OICCountry("Pakistan", "Sindhi", 210000000, 2.5);
console.info(Pakistan);
console.log(Pakistan.populationGroth());
