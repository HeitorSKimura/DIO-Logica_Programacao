class heroClass{
    constructor(name, age, classType){
        this.name = name
        this.age = age
        this.classType = classType.toLowerCase()
    }

    weapon(heroType){
        let wp = "";
        switch (heroType){
            case "mago":
                wp = "magia";
                break;
            case "guerreiro":
                wp = "espada";
                break;
            case "monge":
                wp = "artes marciais";
                break;
            case "ninja":
                wp = "shuriken";
                break;
            default:
                wp = "???????";
                break;
        }
        return wp;
    }

    attack() {
        console.log(`O ${this.name} atacou usando ${this.weapon(this.classType)}`);
    }
}


const hero1 = new heroClass("Thor", 1500, "guerreiro");
hero1.attack();

const hero2 = new heroClass("Gandalf", 2019, "mago");
hero2.attack();

const hero3 = new heroClass("Tenzin", 112, "monge");
hero3.attack();

const hero4 = new heroClass("Hanzo", 17, "ninja");
hero4.attack();

const hero5 = new heroClass("Ragnar", 19, "pirata");
hero5.attack();