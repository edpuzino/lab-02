'use strict';

const FlyingVehicle = () => ({
  air: () => {
    return ('I\'m Flying');
  },
  land: () => {
    return ('Let\'s Go Somewhere');
  },
});

function Airplane() {
  let wings = 'fixed';
  let airplane = Object.assign( {}, {name}, {wings}, FlyingVehicle());
  return airplane;
}

function Helicopter() {
  let wings = 'rotating';
  let helicopter = Object.assign( {}, {name}, {wings}, {loop}, FlyingVehicle());
  function loop() {
    return ('I just shit my pants');}
  return Object.freeze(helicopter);  
}

module.exports = {Airplane, Helicopter};
