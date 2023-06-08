abstract class country{
    public name: string;
    public language: string;
    public population: number;
    public populationGrothRate: number;
    private _statePrivacy : string;


    constructor(name:string,
        language:string,
        population:number,
        populationGrothRate:number,
        _statePrivacy: string){
            this.name = name
            this.language = language
            this.population = population
            this.populationGrothRate = populationGrothRate
            this._statePrivacy = _statePrivacy

        }

 public abstract populationGroth():number;
 }





class OICCountry extends country{
    constructor(name:string,language:string,
        population:number,
        populationGrothRate:number,
        _statePrivacy:string){
            super(name,language,population,populationGrothRate,_statePrivacy) 
        }
    public populationGroth(): number {
        this.population = this.population * this.populationGrothRate
        return this.population 
        
    }
}

let Pakistan   = new OICCountry("Pakistan","Sindhi",210000000,2.5, "Pakistan's Private Data")
console.info(Pakistan);
console.log(Pakistan.populationGroth());








export{}