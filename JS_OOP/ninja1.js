function Ninja(name){
  this.name = name;
  this.health = 200;
  var speed = 3;
  var strength = 3;

  this.sayName =function(){
    console.log("My ninja name is: "+this.name);
  }

  this .showStats = function(){
    console.log("Name: "+this.name+", Health: "+this.health +", Speed:"+this.speed+", Strength: "+this.strength);

  }

  this.drinkSake = function(){
    this.health += 10;
    console.log("My new health is: "+this.health);
  }

}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
ninja1.drinkSake();
