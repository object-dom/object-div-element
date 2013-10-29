var ObjectElement = require('object-element');

module.exports = ObjectDivElement;

function ObjectDivElement(element) {
  element = element || document.createElement('div');
  ObjectElement.call(this, element);
}

ObjectDivElement.prototype = Object.create(ObjectElement.prototype);

ObjectDivElement.prototype.defineProperty('tag', {
  get: function () {
    return 'div';
  }
});
