"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var country = /** @class */ (function () {
    function country(name, language, population, populationGrothRate, _statePrivacy, _leader) {
        this.name = name;
        this.language = language;
        this.population = population;
        this.populationGrothRate = populationGrothRate;
        this._statePrivacy = _statePrivacy;
        this._leader = _leader;
    }
    Object.defineProperty(country.prototype, "leader", {
        set: function (newleader) {
            this._leader = newleader;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(country.prototype, "privateData", {
        get: function () {
            return this._statePrivacy;
        },
        enumerable: false,
        configurable: true
    });
    return country;
}());
var OICCountry = /** @class */ (function (_super) {
    __extends(OICCountry, _super);
    function OICCountry(name, language, population, populationGrothRate, _statePrivacy, _leader) {
        return _super.call(this, name, language, population, populationGrothRate, _statePrivacy, _leader) || this;
    }
    OICCountry.prototype.populationGroth = function () {
        this.population = this.population * this.populationGrothRate;
        return this.population;
    };
    return OICCountry;
}(country));
var Pakistan = new OICCountry("Pakistan", "Sindhi", 210000000, 2.5, "Pakistan's Private Data", "Imran Khan");
console.info(Pakistan);
console.log(Pakistan.populationGroth());
Pakistan.name = "Islamic Republic of Pakistan";
Pakistan.leader = "Asif Ali";
console.info(Pakistan);
// Error 
// Pakistan._statePrivacy
console.log(Pakistan.privateData);
