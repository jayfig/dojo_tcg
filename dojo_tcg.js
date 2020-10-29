class card{
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class effect extends card{
    constructor(name,cost,resilience,power){
        super(name,cost);
        this.resilience = resilience;
        this.power = power;
        }
    play(target){
        if( target instanceof unit){
            target.resilience+=this.resilience;
            target.power+=this.power;
                        
        }
        else{
            throw new Error("Target Must be Unit");
        }
    }  


}

class unit extends card{
    constructor(name,cost,power,resilience){
        super(name,cost);
        this.power = power;
        this.resilience = resilience;        
    }
    attack(target){
        target.power -= this.power;
    }
}

const algorithm = new effect('Hard Algorithm',2,3,0)
const rejection = new effect('Unhandled Promise Rejection',1,-2,0)
const pair = new effect('Pair Programming',3,0,2)

const red_ninja = new unit('Red Belt Ninja',3,3,4);
algorithm.play(red_ninja);
const black_ninja = new unit('Black Belt Ninja',4,5,4);
rejection.play(red_ninja);
pair.play(red_ninja);
red_ninja.attack(black_ninja);

console.log(black_ninja);
console.log(red_ninja);

console.log('Red ninja has defeated Black Ninja');

// turn	action
// 1	Player 1 summons "Red Belt Ninja"
// 1	Player 1 plays "Hard Algorithm" on "Red Belt Ninja"
// 2	Player 2 summons "Black Belt Ninja"
// 2	Player 2 plays "Unhandled Promise Rejection" on "Red Belt Ninja"
// 3	Player 1 plays "Pair Programming" on "Red Belt Ninja"
// 3	Player 1 has "Red Belt Ninja" attack "Black Belt Ninja"