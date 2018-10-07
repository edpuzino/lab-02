'use strict';

//Vehicle class
class Vehicle {

  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  drive () {
    return 'Moving Forward';
  } 

  stop () {
    return 'Stopping';
  }
}

//Cars are Vehicles
class Car extends Vehicle {
  constructor(name) {
    super ();
    this.name = name;
    this.wheels = 4;
  }  
}

//Motorcycles are Vehicles
class Motorcycle extends Vehicle {
  constructor(name) {
    super ();
    this.name = name;
    this.wheels = 2;
  }

  wheelie () {
    return 'Wheee!';
  }
}

module.exports = {Car, Motorcycle};
