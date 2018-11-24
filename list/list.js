'use strict';

class List {

  constructor() {
    this.length = 0;
    this.data = {};
  }


  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    let returnValue = this.data[this.length];
    delete this.data[this.length];
    this.length--;
    return returnValue;
  }

  shift() {
    let returnElement = this.data[0];
    delete this.data[0];
    this.length--;
    return returnElement;
  }

  unshift(item) {
    this.data[0] = item;
    this.length++;
    return this.length;
  }


}

module.exports = List;
