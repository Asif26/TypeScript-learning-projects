abstract class country{
    public name: string;
    public language: string;
    public population: number;
    public populationGrothRate: number;
    private _statePrivacy : string;
    private _leader:string;


    constructor(name:string,
        language:string,
        population:number,
        populationGrothRate:number,
        _statePrivacy: string,
        _leader:string){
            this.name = name
            this.language = language
            this.population = population
            this.populationGrothRate = populationGrothRate
            this._statePrivacy = _statePrivacy
            this._leader = _leader

        }

 public abstract populationGroth():number;
 public set leader(newleader:string){
    this._leader = newleader;
 }
 public get privateData() :string{
    return this._statePrivacy
 }

 }





class OICCountry extends country{
    constructor(name:string,language:string,
        population:number,
        populationGrothRate:number,
        _statePrivacy:string, 
        _leader:string){
            super(name,language,population,populationGrothRate,_statePrivacy, _leader) 
        }
    public populationGroth(): number {
        this.population = this.population * this.populationGrothRate
        return this.population 
        
    }
}

let Pakistan   = new OICCountry("Pakistan","Sindhi",210000000,2.5, "Pakistan's Private Data","Imran Khan")
console.info(Pakistan);
console.log(Pakistan.populationGroth());
Pakistan.name = "Islamic Republic of Pakistan"
Pakistan.leader = "Asif Ali"
console.info(Pakistan)

// Error 
// Pakistan._statePrivacy

console.log(Pakistan.privateData);






export{}