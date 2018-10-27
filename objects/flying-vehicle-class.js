'use strict';

//FlyingVehicle class
class FlyingVehicle {

  constructor(name, wings) {
    this.name = name;
    this.wings = wings;
  }

  air () {
    return 'I\'m Flying';
  }

  land () {
    return 'Let\'s Go Somewhere';
  }
}

// Airplanes are Flying Vehicles
class Airplane extends FlyingVehicle {
  constructor(name) {
    super ();
    this.name = name;
    this.wings = 'fixed';
  }
}

// Helicopters are Flying Vehicles
class Helicopter extends FlyingVehicle {
  constructor(name) {
    super ();
    this.name = name;
    this.wings = 'rotating';
  }

  loop () {
    return 'I just shit my pants';
  }
}

module.exports = {Airplane, Helicopter};
