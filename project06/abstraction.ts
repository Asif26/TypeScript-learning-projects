abstract class country{
    public name: string;
    public language: string;
    public population: number;
    public populationGrothRate: number;


    constructor(name:string,
        language:string,
        population:number,
        populationGrothRate:number){
            this.name = name
            this.language = language
            this.population = population
            this.populationGrothRate = populationGrothRate

        }

 public abstract populationGroth():number;
 }





class OICCountry extends country{
    constructor(name:string,language:string,
        population:number,
        populationGrothRate:number){
            super(name,language,population,populationGrothRate) 
        }
    public populationGroth(): number {
        this.population = this.population * this.populationGrothRate
        return this.population 
        
    }
}

let Pakistan   = new OICCountry("Pakistan","Sindhi",210000000,2.5)
console.info(Pakistan);
console.log(Pakistan.populationGroth);








