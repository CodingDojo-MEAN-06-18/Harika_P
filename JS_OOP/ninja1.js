function Ninja(name){
  this.name = name;
  this.health = 200;
  var speed = 3;
  var strength = 3;
  this.showSpeed = function(){
    return speed;
  }
  this.showStrength = function(){
    return strength;
  }
  this.sayName =function(){
    console.log("My ninja name is: "+this.name);
  }

  this .showStats = function(){
    console.log("Name: "+this.name+", Health: "+this.health +", Speed:"+this.showSpeed()+", Strength: "+this.showStrength());

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
