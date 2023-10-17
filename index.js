class classeDeHeroi{
   constructor(name, age, type ){ 
    this.heroName = name
    this.heroAge = age
    this.heroType = type 
    }   
   
   attack(){
     let attackMethod = ""

        switch(this.heroType){
            case "bárbaro":
                attackMethod = "tacape"
                break
            case "mago":
                attackMethod = "bola de fogo"
                break
            case "cavaleiro":
                attackMethod = "espada sagrada"
                break
            case "anão":
                attackMethod = "machado de guerra"
                break 
            default:
                attackMethod = "apenas suas mãos"
                break      
        }

    console.log (`${this.heroName} o ${this.heroType} atacou usando ${attackMethod}`)
   }


}

const heroi1 = new classeDeHeroi ("Ruffus punho sangrento", 35, "bárbaro")
const heroi2 = new classeDeHeroi ("Mith", 65, "mago")
const heroi3 = new classeDeHeroi ("August o casto", 23, "cavaleiro")
const heroi4 = new classeDeHeroi ("Toph o alto", 130, "anão")

heroi1.attack()
heroi2.attack()
heroi3.attack()
heroi4.attack()