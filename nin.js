class Ninja {
    constructor (name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log("-------------------------------");
        console.log(`Name:      ${this.name}`);
        console.log("-------------------------------");
    }
    showStats(){
        console.log("-------------------------------");
        console.log(`Name:      ${this.name}`);
        console.log(`Health:    ${this.health}`);
        console.log(`Speed:     ${this.speed}`);
        console.log(`Strength:  ${this.strength}`);
        console.log("-------------------------------");
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drank a cup of sake and regained health! ${this.name}'s health is now ${this.health}.`)
    }
}

const Kiba = new Ninja("Kiba", 300);
Kiba.showStats();
Kiba.drinkSake();
Kiba.showStats();