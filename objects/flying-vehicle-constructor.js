'use strict';

const FlyingVehicle = function(name, wings) {
  this.name = name;
  this.wings = wings;
};

FlyingVehicle.prototype.air = () => {
  return 'I\'m Flying';
};
FlyingVehicle.prototype.land = () => {
  return 'Let\'s Go Somewhere';
};

// Airplane Constructor
const Airplane = function(name) {
  FlyingVehicle.call(this, name, 'fixed');
};

Airplane.prototype = new FlyingVehicle();

// Helicopter Constructor
const Helicopter = function(name) {
  FlyingVehicle.call(this, name, 'rotating');
};

Helicopter.prototype = new FlyingVehicle();

Helicopter.prototype.loop = () => {
  return 'I just shit my pants';
};

module.exports = {Airplane, Helicopter};
