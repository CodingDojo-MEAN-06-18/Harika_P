function Ninja(name){

  this.name = name;
  this.health = 200;
  var speed = 3;
  var strength = 3;
  this.getSpeed = function(){
    return speed;
  }
  this.getStrength = function(){
    return strength;
  }
  this.sayName =function(){
    console.log("My ninja name is: "+this.name);
  }

  this .showStats = function(){
    console.log("Name: "+this.name+", Health: "+this.health +", Speed:"+this.getSpeed()+", Strength: "+this.getStrength());

  }

  this.drinkSake = function(){
    this.health += 10;
    console.log("My new health is: "+this.health);
  }

  this.punch = function(ninja){
    //check if parameter is ninja instance
    if (ninja instanceof Ninja){
    ninja.health -= 5;
    console.log(ninja.name + " was punched by "+this.name+" and lost 5 health");
    }
    else{
      console.log( "You did not enter a Ninja!");
    }
  }

  this.kick = function(ninja){
    if (ninja instanceof Ninja){
        const loss= this.getStrength()*15;
        ninja.health -= loss;

      console.log(ninja.name + " was kicked by "+this.name+" and lost 15 health because "+this.name+" has "+this.getStrength()+ " points of strength");
    }
    else{
      console.log( "You did not enter a Ninja!");

    }
  }

}

//testing

var blueNinja = new Ninja("Goemon");
var redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);
