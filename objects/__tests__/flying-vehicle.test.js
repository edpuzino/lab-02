'use strict';

//const FlyingVehicle = require('../flying-vehicle-constructor.js');
const FlyingVehicle = require('../flying-vehicle-class.js');
//const FlyingVehicle = require('../flying-vehicle-factory.js');

describe('FlyingVehicles', () => {

  describe('Airplane', () => {

    let airplane = new FlyingVehicle.Airplane('foo');

    it('has fixed wings', () => {
      expect(airplane.wings).toEqual('fixed');
    });

    it('can fly', () => {
      expect(airplane.air()).toBeTruthy();
    });

    it('can land', () => {
      expect(airplane.land()).toBeTruthy();
    });
    
    it('cannot do a loop', () => {
      expect(airplane.loop).toBeUndefined();
    });
  });

  describe('Helicopter', () => {

    let helicopter = new FlyingVehicle.Helicopter('foo');

    it('has rotating wings', () => {
      expect(helicopter.wings).toEqual('rotating');
    });

    it('can fly', () => {
      expect(helicopter.air()).toBeTruthy();
    });

    it('can land', () => {
      expect(helicopter.land()).toBeTruthy();
    });

    it('can do a loop de loop', () => {
      expect(helicopter.loop()).toBeTruthy();
    });
  });
});