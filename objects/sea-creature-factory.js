'use script';

const SeaCreature = () => ({
  land: () => {
    return 'I can not breathe';
  },

  sea: () => {
    return 'This feels better';
  },
});

function Fish() {
  let claws = 'No';
  let fish = Object.assign( {}, {name}, {claws}, SeaCreature());
  return fish;
}

function Lobster() {
  let claws = 'Yes';
  let lobster = Object.assign( {}, {name}, {claws}, {walk}, SeaCreature());
  function walk() {
    return ('I like to walk along the ocean floor');}
  return Object.freeze(lobster);  
}

module.exports = {Fish, Lobster};
