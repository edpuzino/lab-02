'use strict';

//const SeaCreature = require('../sea-creature-factory.js');
//const SeaCreature = require('../sea-creature-constructor.js');
const SeaCreature = require('../sea-creature-class.js');

describe('SeaCreature', () => {

  describe('Shark', () => {

    let fish = new SeaCreature.Fish('foo');

    it('has claws', () => {
      expect(fish.claws).toEqual('No');
    });

    it('on land', () => {
      expect(fish.land()).toEqual('I can not breathe');
    });

    it('in the water', () => {
      expect(fish.sea()).toEqual('This feels better');
    });

    it('can walk', () => {
      expect(fish.walk).toBeUndefined();
    });

  });

  describe('Lobster', () => {

    let lobster = new SeaCreature.Lobster('foo');

    it('has claws', () => {
      expect(lobster.claws).toEqual('Yes');
    });

    it('on land', () => {
      expect(lobster.land()).toEqual('I can not breathe');
    });

    it('in the water', () => {
      expect(lobster.sea()).toEqual('This feels better');
    });

    it('can walk', () => {
      expect(lobster.walk()).toBeTruthy();
    });

  });

});
