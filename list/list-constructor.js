'use strict';

function List() {
  this.length = 0;
  this.data = {};
}

List.prototype.push = function(item) {
  this.data[this.length] = item;
  this.length++;
};


List.prototype.pop = function() {
  let returnValue = this.data[this.length-1];
  delete this.data[this.length-1];
  this.length--;
  return returnValue;
};

List.prototype.shift = function() {
  let returnElement = this.data[0];
  delete this.data[0];
  this.length--;
  return returnElement;
};

List.prototype.unshift = function(newElement) {
  this.data[0] = newElement;
  this.length++;
  return this.length;
};



module.exports = List;
