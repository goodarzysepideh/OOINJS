///Association

function Person(name, surname) {
this.name = name;
this.surname = surname;
this.parent = null;
}

var johnSmith = new Person("John", "Smith");
var fredSmith = new Person("Fred", "Smith");

fredSmith.parent = johnSmith;

///Aggregation


var company = {
    name: "ACME Inc.",
    employees: []
};

var johnSmith = new Person("John", "Smith");
var marioRossi = new Person("Mario", "Rossi");

company.employees.push(johnSmith);
company.employees.push(marioRossi);


///Composition

var person = {name: "John",
              surname: "Smith",
              address: {
                street: "123 Duncannon Street",
                city: "London",
                country: "United Kingdom"
              }}; 
