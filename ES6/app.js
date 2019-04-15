let mixin = {
	madeIn(){
		console.log('This car was made in year 2019');
	}
}

let carMixin = {
	__proto__: mixin,
	madeIn() {
		super.madeIn();
	}
};

class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }

    static totalDoors(car1, car2) {
    	const doors1 = car1.doors;
    	const doors2 = car2.doors;
    	return doors2 + doors1;
    }
}

class SUV extends Car {
	constructor(doors, engine, color, brand, carStats){
		super(doors, engine, color, carStats);
		this.brand = brand;
		this.wheels = 4;
		this.ac = true;

		//assign mixin
		Object.assign(this, carMixin);
	}

	myBrand(){
		return console.log(`This SUV is a ${this.brand}`);
	}
}

const cx5 = new Car( 4, 'V6', 'grey');
const civic = new Car( 3, 'V4', 'black');

const tahoe = new SUV(4, 'V6', 'red', 'Chevi');

console.log(cx5);
console.log(cx5.carStats());
console.log(Car.totalDoors(civic, cx5));
console.log(tahoe);
console.log(tahoe.madeIn());
