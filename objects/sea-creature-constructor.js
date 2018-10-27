'use strict';

const SeaCreature = function(name, claws) {
  this.name = name;
  this.claws = claws;
};

SeaCreature.prototype.land = () => {
  return 'I can not breathe';
};

SeaCreature.prototype.sea = () => {
  return 'This feels better';
};

// Fish Constructor
const Fish = function(name) {
  SeaCreature.call(this, name, 'No');
};

Fish.prototype = new SeaCreature();

// Lobster Constructor
const Lobster = function(name) {
  SeaCreature.call(this, name, 'Yes');
};

Lobster.prototype = new SeaCreature();

Lobster.prototype.walk = () => {
  return 'I like to walk along the ocean floor';
};

module.exports = {Fish, Lobster};
