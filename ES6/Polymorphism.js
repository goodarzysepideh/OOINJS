class Animal {

   constructor(name)  {
     this.name = name;
   }

   showInfo()  {
     console.log("I'm " + this.name);
   }

   move()  {
     console.log("Moving..");
   }

}

class Cat extends Animal {
    constructor(name, age, height) {
       super(name);
       // Cat's properties:
       this.age = age;
       this.height = height;
    }

    // Override method of parent class.
    showInfo()  {
      console.log("My name is " + this.name);
    }

    // Other method...
    sleep()  {
       console.log("Sleeping..");
    }
}

class Mouse extends Animal {

    constructor(name, age, height) {
       super(name);

       this.age = age;
       this.height = height;
    }

    // Override method of parent class.
    showInfo()  {
      // Call showInfo() method of parent class.
      super.showInfo();
      console.log ("Age: " + this.age);
      console.log ("Height: " + this.height);
    }

    // Override method of parent class.
    move()  {
      console.log("Mouse Moving..");
    }
}

// ------------- TEST --------------------
let tom = new Cat("Tom", 3, 20);

console.log("Call move() method");

tom.move();

console.log("\n");
console.log("Call showInfo() method");

tom.showInfo();

// ------------- TEST --------------------
let jerry = new Mouse("Jerry", 3, 5);

console.log("Call move() method");

jerry.move();

console.log("\n");
console.log("Call showInfo() method");

jerry.showInfo();
