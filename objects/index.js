'use strict';


//const Vehicle = require('./constructor.js');
const Vehicle = require('./class.js');
//const Vehicle = require('./factory.js');

// Implement a car and motorcycle
const mazda = new Vehicle.Car('Mazda 3');
console.log(mazda.name, mazda.drive(), mazda.stop());

const harley = new Vehicle.Motorcycle('Harley');
console.log(harley.name, harley.wheelie(), harley.stop());



//const FlyingVehicle = require('./flying-vehicle-constructor.js');
//const FlyingVehicle = require('./flying-vehicle-factory.js');
const FlyingVehicle = require('./flying-vehicle-class.js');

// Implement an airplane and helicopter
const boeing = new FlyingVehicle.Airplane('Boeing 767');
console.log(boeing.name, boeing.air(), boeing.land());

const bell = new FlyingVehicle.Helicopter('Bell BO-105');
console.log(bell.name, bell.air(), bell.loop());



const SeaCreature = require('./sea-creature-class.js');
//const SeaCreature = require('./sea-creature-constructor.js');
//const SeaCreature = require('./sea-creature-factory.js');

// Implement a fish and lobster
const shark = new SeaCreature.Fish('Tiger Shark');
console.log(shark.name, shark.land(), shark.sea());

const maine = new SeaCreature.Lobster('Maine Lobster');
console.log(maine.name, maine.sea(), maine.claw());
