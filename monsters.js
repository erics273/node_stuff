//base class of living thing
class LivingThing {

    //constructor runs once when creating a living thing with the new keyword
    constructor(name, health){
        this.name = name;
        this.health = health;
    }//closes constructor

    //getter for the health property
    getHealth(){
        return this.health;
    }

    //gettter for name property
    getName(){
        return this.name;
    }

    //set the health of the living thing
    setHealth(health){
        this.health = health;
    }

    //setter for name property
    setName(name){
        this.name = name;
    }

}

//new class here that extends Living thing which means all the functionality the LivingThing has
//so does the hero
class Hero extends LivingThing{
    constructor(name, health, superHeroIdentity){

        //calls the parent constructor to do the stuff with name and health since it 
        //already knows what to do with it
        super(name, health);

        //new property just for the hero
        this.superHeroIdentity = superHeroIdentity;
    }

    attack(monster){
        //generate random numbers between 1 and 100 for the damage for the hero and the monster
        let monsterDamage = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + Math.ceil(1);
        let heroDamage = Math.floor(Math.random() * (Math.floor(100) - Math.ceil(1) + 1)) + Math.ceil(1);
        
        //update the health on the respective objects
        monster.setHealth(monster.getHealth() - monsterDamage);
        this.setHealth(this.getHealth() - heroDamage);
    }

    fight(listOfMonsters){

        //monster should attack the hero until either the hero is dead or all monsters are dead
        for(let monster of listOfMonsters){
            //make the monster attack until one dies
            while(this.getHealth() > 0 && monster.getHealth() > 0){
                this.attack(monster);
            }
        }


    }

}

//create some monsters from the LivingThing class
let ogre = new LivingThing("ogre", 80);
let troll = new LivingThing("troll", 100);
let vampire = new LivingThing("Vampy", 75);

//Create a hero from the Hero class
let myHero = new Hero("Clark", 100, "superman");


//array of our monsters
let monsters = [ogre, troll, vampire];

myHero.fight(monsters);

if(myHero.getHealth() > 0 ){
    console.log("hero won");
}else{
    console.log("monsters won");
}

console.log(myHero, monsters);

// //loop over monsters to show their property values
// for(let i=0; i < monsters.length; i++){
//     console.log(monsters[i].getName() + " health is at " + monsters[i].getHealth());
// }