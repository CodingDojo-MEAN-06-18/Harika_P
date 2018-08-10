class Bike {
    public price: number;
    public maxSpeed: number;
    public miles: number;

    constructor(price:number, maxSpeed:number){
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.miles = 0;
    }
    displayInfo = function(){
        console.log
            (`Price: $${this.price}, MaxSpeed: ${this.maxSpeed} MPH, Miles:
            ${this.miles}.`);
    }

    ride = function () {
        console.log("Riding..");
        this.miles += 10;
        return this;
    }
    reverse = function () {
        console.log("Reversing..");
        if (this.miles >= 5) {
            this.miles -= 5;
        }
        else {
            console.log("Cannot reverse any more!");
        }

        return this;
    }

}

let bike1 = new Bike(200, 25);
let bike2 = new Bike(100, 15);
let bike3 = new Bike(300, 5);

bike1.ride().ride().ride().reverse().displayInfo();
bike2.ride().ride().displayInfo();
bike1.reverse().reverse().reverse().displayInfo();
