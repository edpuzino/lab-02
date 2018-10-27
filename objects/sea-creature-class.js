'use strict';

// SeaCreature Class
class SeaCreature {

  constructor(name, claws) {
    this.name = name;
    this.claws = claws;
  }

  land () {
    return 'I can not breathe';
  }

  sea () {
    return 'This feels better';
  }
}

// Sharks are Sea Creatures
class Fish extends SeaCreature {
  constructor(name) {
    super ();
    this.name = name;
    this.claws = 'No';
  }
}

// Lobsters are Sea Creatures
class Lobster extends SeaCreature {
  constructor(name) {
    super ();
    this.name = name;
    this.claws = 'Yes';
  }

  walk () {
    return 'I like to walk along the ocean floor';
  }
}

module.exports = {Fish, Lobster};
